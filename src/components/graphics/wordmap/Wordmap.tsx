import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import CameraControls from 'camera-controls';
import { ZoomControls, generatePositions, type NodePosition, type Position } from "./utils";
import { wordcloud } from "@data/text";
import { scrollToElement, slugify } from "@utils/utils";

CameraControls.install({ THREE });

import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import Checkbox from "@components/ui/Checkbox";
import ZoomIcon from "@components/icons/ZoomIcon";

const positionsTree = generatePositions("Skills", wordcloud["Skills"]);
const defaultPosition = { position: { x: 0, y: 0, z: 0 }, name: "Skills", children: [] };

const Circle = ({ node, onNodeClick, focus, sphereRefs, movement, freecam }: { node: NodePosition, onNodeClick: any, focus: NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>>, movement: boolean, freecam: boolean }) => {
  const isVisible = node.name === focus.name || node.parent?.name === focus.name;
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Object3D>();
  const descRef = useRef<THREE.Object3D>();
  const { camera } = useThree();

  const handleClick = () => {
    let nodeData = node;
    if (focus.parent && focus.name === node.name) nodeData = focus.parent;
    return onNodeClick(nodeData);
  };

  const uniforms = useRef({
    uTime: { value: 0.0 },
    lightDir: { value: new THREE.Vector3(1, 1, 1) },
    uSelected: { value: node.name === focus.name },
  });

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    uniforms.current.uTime.value = t;
    uniforms.current.uSelected.value = node.name === focus.name;    

    const bounceFactor = (node.name===focus.name || !movement) ? 0 : 0.05;
    const bounceHeight = Math.sin(t + node.position.x) * bounceFactor;

    if (meshRef.current) {
      const newPosition = new THREE.Vector3(node.position.x + bounceHeight, node.position.y + bounceHeight/2, node.position.z);
      meshRef.current.position.copy(newPosition);  
      sphereRefs.current[node.name] = newPosition;
    }

    if (textRef.current) {
      if (freecam) {
        textRef.current.quaternion.copy(camera.quaternion); 
      } else {
        textRef.current.quaternion.copy({ x: 0, y: 0, z: 0, w: 1 } as THREE.Quaternion)
      };      
    };
    if (descRef.current) {
      if (freecam) {
        descRef.current.quaternion.copy(camera.quaternion); 
      } else {
        descRef.current.quaternion.copy({ x: 0, y: 0, z: 0, w: 1 } as THREE.Quaternion)
      };   
    }
  });

  return (
    //@ts-ignore
    <group ref={meshRef} onClick={handleClick} visible={isVisible}>
      {isVisible && (
        <>
          <mesh>
            <sphereGeometry args={[0.1, 32, 32]} />
            <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} needsUpdate={true}/>
          </mesh>
          <Text ref={textRef} position={[0, 0.2, 0]} fontSize={0.1} color="white">
            {node.name.split("#")[0]}
          </Text>
          {focus.name === node.name && node.description && (
            <Text ref={descRef} position={[0, -0.2, 0]} fontSize={0.05} color="white">
              {node.description.split("#")[0]}
            </Text>
          )}
        </>
      )}
    </group>
  );
};


const Line = ({ start, end, sphereRefs, focus }: { start: NodePosition, end: NodePosition, focus:NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>> }) => {
  const lineRef = useRef<THREE.Line>(null);
  const points = useRef([new THREE.Vector3(), new THREE.Vector3()]);
  const geometryRef = useRef(new THREE.BufferGeometry().setFromPoints(points.current));

  useFrame(() => {
    if (start.name !== focus.name) return;
    const startPos = sphereRefs.current[start.name];
    const endPos = sphereRefs.current[end.name];

    if (startPos && endPos && lineRef.current) {
      points.current = [startPos.clone(), endPos.clone()];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points.current);
      lineRef.current.geometry = lineGeometry;
    }
  });
  const isVisible = start.name === focus.name;
  return (
    //@ts-ignore
    <line ref={lineRef} visible={isVisible}>
      <lineBasicMaterial attach="material" color="gray" />
    </line>
  );
};


const RecursiveCircles = ({ node, onNodeClick, focus, sphereRefs, movement, freecam }: { node: NodePosition, onNodeClick: any, focus: NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>>, movement: boolean, freecam:boolean }) => {
  return (
    <>
      <Circle node={node} onNodeClick={onNodeClick} focus={focus} sphereRefs={sphereRefs} movement={movement} freecam={freecam}/>
      {node.children.map((child) => (
        <React.Fragment key={child.name}>
          <Line start={node} end={child} sphereRefs={sphereRefs} focus={focus}/>
          <RecursiveCircles node={child} onNodeClick={onNodeClick} focus={focus} sphereRefs={sphereRefs} movement={movement} freecam={freecam}/>
        </React.Fragment>
      ))}
    </>
  );
};

const Scene = () => {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState<NodePosition>(defaultPosition);
  const [movement, toggleMovement] = useState(true); 
  const [fullScreen, toggleFullScreen] = useState(true);
  const [freecam,toggleFreecam] = useState(false);
  const sphereRefs = useRef<Record<string, THREE.Vector3>>({});

  const zoomOut = () => {
    if (focus.parent) {
      setFocus(focus.parent);
    }
  };

  return (
    <div className={`relative grid gap-4 text-3xl w-full ${fullScreen?"h-[100svh]":"h-[30rem]"} transition-all`} >
      <Canvas camera={{ position: [0, 0, 0.5], fov: 60 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {!freecam&&<ZoomControls zoom={zoom} focus={focus} />}
        <RecursiveCircles sphereRefs={sphereRefs} node={positionsTree} focus={focus} freecam={freecam} onNodeClick={(focusRef:NodePosition, parentRef:NodePosition) => (setZoom(true),setFocus(focusRef))} movement={movement} />
      </Canvas>
      <div className="absolute right-5 bottom-5 flex flex-col items-end gap-4">
        <button className={`px-4 z-50 text-sm button-glow-white ${focus.name!=="Skills"?"opacity-100":"opacity-0"}`} onClick={zoomOut}>
          <ZoomIcon />
          <p className="font-black text-lg pb-1">-</p>
        </button>
        {<button className="w-fit z-50 text-sm flex gap-2 items-center" onClick={() => toggleFullScreen(!fullScreen)}>
          <p className="pb-1">Fullscreen</p>
          <Checkbox toggle={fullScreen} />
        </button>}
        <button className="w-fit z-50 text-sm flex gap-2 items-center" onClick={() => toggleFreecam(!freecam)}>
          <p className="pb-1">Freecam</p>
          <Checkbox toggle={freecam} />
        </button>
        <button className="w-fit z-50 text-sm flex gap-2 items-center" onClick={() => toggleMovement(!movement)}>
          <p className="pb-1">Movement</p>
          <Checkbox toggle={movement}/>
        </button>
      </div>
      <div className={`absolute grid gap-4 border-neutral-50 border rounded-lg shadow-glow-white p-4 py-8 top-32 left-5 text-sm ${focus.name==="Skills"?"opacity-100":"opacity-0"} transition-all`}>
          <h1 className="text-lg font-bold">Skills</h1>
          <p>Explore my skills by clicking the spheres</p>
          <p>Click the focused Sphere to Zoom out</p>
      </div>
      {focus.description && focus.description.split("#")[1] !== "nolink" && <div className={`absolute bottom-5 w-full text-lg flex justify-center`}>
        <button className="button-glow-white px-4" onClick={() => {console.log(`experience-${slugify(focus.name.split("#")[0])}`);scrollToElement(`experience-${slugify(focus.name.split("#")[0])}`)}}>
            {`View ${focus.name.split("#")[0]} Project →`}
        </button>
      </div>}
    </div>
  );
};

export default Scene;
