import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import CameraControls from 'camera-controls';
import { ZoomControls, generatePositions, type NodePosition, type Position } from "./utils";
import { wordcloud } from "@data/text";

CameraControls.install({ THREE });

import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

const positionsTree = generatePositions("Skills", wordcloud["Skills"]);
const defaultPosition = { position: { x: 0, y: 0, z: 0 }, name: "Skills", children: [] };

const Circle = ({ node, onNodeClick, focus, sphereRefs, movement }: { node: NodePosition, onNodeClick: any, focus: NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>>, movement: boolean }) => {
  const isVisible = node.name === focus.name || node.parent?.name === focus.name;
  const meshRef = useRef<THREE.Mesh>(null);

  const handleClick = () => {
    let nodeData = node;
    if (focus.parent && focus.name === node.name) nodeData = focus.parent;
    return onNodeClick(nodeData);
  };

  const uniforms = {
    uTime: { value: 0.0 },
    uColor: { value: new THREE.Vector3(0.3, 0.8, 1.0) },
    lightDir: { value: new THREE.Vector3(1, 1, 2) },
  };

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;

    const t = clock.elapsedTime;

    let bounceFactor = 0.05;
    if (node.name===focus.name || !movement) bounceFactor = 0;
    const bounceHeight = Math.sin(t + node.position.x) * bounceFactor;

    if (meshRef.current) {
      const newPosition = new THREE.Vector3(node.position.x + bounceHeight, node.position.y + bounceHeight/2, node.position.z);
      meshRef.current.position.copy(newPosition);  
      sphereRefs.current[node.name] = newPosition;
    }
  });

  return (
    <group ref={meshRef} onClick={handleClick} visible={isVisible}>
      {isVisible && (
        <>
          <mesh>
            <sphereGeometry args={[0.1, 32, 32]} />
            <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
          </mesh>
          <Text position={[0, 0.2, 0]} fontSize={0.1} color="white">
            {node.name.split("#")[0]}
          </Text>
        </>
      )}
    </group>
  );
};


const Line = ({ start, end, sphereRefs, focus }: { start: NodePosition, end: NodePosition, focus:NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>> }) => {
  const lineRef = useRef<THREE.Line>(null);

  useFrame(() => {
    const startPos = sphereRefs.current[start.name];
    const endPos = sphereRefs.current[end.name];

    if (startPos && endPos && lineRef.current) {
      const points = [startPos.clone(), endPos.clone()];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      lineRef.current.geometry = lineGeometry;
    }
  });
  const isVisible = start.name === focus.name;
  return (
    <line ref={lineRef} visible={isVisible}>
      <lineBasicMaterial attach="material" color="white" />
    </line>
  );
};


const RecursiveCircles = ({ node, onNodeClick, focus, sphereRefs, movement }: { node: NodePosition, onNodeClick: any, focus: NodePosition, sphereRefs: React.MutableRefObject<Record<string, THREE.Vector3>>, movement: boolean }) => {
  return (
    <>
      <Circle node={node} onNodeClick={onNodeClick} focus={focus} sphereRefs={sphereRefs} movement={movement}/>
      {node.children.map((child) => (
        <React.Fragment key={child.name}>
          <Line start={node} end={child} sphereRefs={sphereRefs} focus={focus}/>
          <RecursiveCircles node={child} onNodeClick={onNodeClick} focus={focus} sphereRefs={sphereRefs} movement={movement} />
        </React.Fragment>
      ))}
    </>
  );
};

const Scene = () => {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState<NodePosition>(defaultPosition);
  const [movement, toggleMovement] = useState(true); 
  const sphereRefs = useRef<Record<string, THREE.Vector3>>({});

  const zoomOut = () => {
    if (focus.parent) {
      setFocus(focus.parent);
    }
  };

  return (
    <>
    <Canvas camera={{ position: [0, 0, 0.5], fov: 50 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <ZoomControls zoom={zoom} focus={focus} />
      <RecursiveCircles sphereRefs={sphereRefs} node={positionsTree} focus={focus} onNodeClick={(focusRef:NodePosition, parentRef:NodePosition) => (setZoom(true),setFocus(focusRef))} movement={movement} />
    </Canvas>
    <div className="absolute right-5 bottom-5 grid gap-4">
      <button className="px-4 z-50 text-sm border-neutral-50 border rounded-lg shadow-glow-white" onClick={zoomOut}>
        zoom out -
      </button>
      <button className="px-4 z-50 text-sm " onClick={() => toggleMovement(!movement)}>
        movement
        <input className="ml-2" type="checkbox" checked={movement} defaultChecked/>
      </button>
    </div>
    </>
  );
};

export default Scene;
