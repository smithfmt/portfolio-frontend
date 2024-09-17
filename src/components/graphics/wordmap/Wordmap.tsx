import React, { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import CameraControls from 'camera-controls'
import { wordcloud } from "@data/text";

// Define the DataNode type as any
type DataNode = any;

type Position = {
  x: number;
  y: number;
  z: number;
};

interface NodePosition {
  name: string;
  position: Position;
  children: NodePosition[];
}

const generatePositions = (
  name: string,
  data: DataNode,
  parentPosition: Position = { x: 0, y: 0, z: 0 },
  zDistance: number = -0.5,
  radius: number = 1
): NodePosition => {
  const childrenKeys = typeof data === "object" ? Object.keys(data) : [];
  const numChildren = childrenKeys.length;

  const result: NodePosition = {
    name,
    position: parentPosition,
    children: [],
  };

  if (numChildren > 0) {
    const angleStep = (Math.PI * 2) / numChildren;

    childrenKeys.forEach((childName, index) => {
      const angle = index * angleStep;
      const childPosition: Position = {
        x: parentPosition.x + Math.cos(angle) * radius,
        y: parentPosition.y + Math.sin(angle) * radius,
        z: parentPosition.z + zDistance,
      };

      const childData = (data as Record<string, DataNode>)[childName];
      const childNode = generatePositions(childName, childData, childPosition, zDistance, radius);
      result.children.push(childNode);
    });
  }

  return result;
}

const positionsTree = generatePositions("Skills", wordcloud["Skills"]);

CameraControls.install({ THREE });

const Controls = ({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3() } : { zoom:boolean, focus: {position: Position, name: string}, pos?:THREE.Vector3, look?: THREE.Vector3 }) => {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  return useFrame((state, delta) => {
    zoom ? pos.set(focus.position.x, focus.position.y, focus.position.z + 2) : pos.set(0, 0, 2);
    zoom ? look.set(focus.position.x, focus.position.y, focus.position.z - 2) : look.set(0, 0, 1);

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
  });
}

const Circle: React.FC<{ name: string; position: Position; onNodeClick: any; parent?: NodePosition; focus:{ position:Position,name:string }}> = ({ name, position, onNodeClick, parent, focus }) => {
  const isVisible = name===focus.name || parent?.name===focus.name

  const handleClick = () => {
    const nodeData = { position, name };
    if (parent && focus.name === name) {
      nodeData.position = parent.position;
      nodeData.name = parent.name;
    }
    return onNodeClick(nodeData);
  };
  if (!isVisible) return <></>
  return (
    <group visible={isVisible} position={[position.x, position.y, position.z]} onClick={handleClick}>
      <mesh>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={"skyblue"} />
      </mesh>
      <Text position={[0, 0.2, 0]} fontSize={0.1} color="white">
        {name}
      </Text>
    </group>
  );
};

const Line: React.FC<{ start: Position; end: Position; parent: NodePosition; child: NodePosition; focus: { position: Position, name: string }}> = ({ start, end, parent, child, focus }) => {
  const points = [
    new THREE.Vector3(start.x, start.y, start.z),
    new THREE.Vector3(end.x, end.y, end.z),
  ];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  const isVisible = parent.name===focus.name;
  return (
    <line>
      <primitive object={lineGeometry} attach="geometry" />
      <lineBasicMaterial attach="material" color="white" visible={isVisible}/>
    </line>
  );
};

const RecursiveCircles: React.FC<{ node: NodePosition; onNodeClick: any; parent?: NodePosition; focus:{ position: Position, name: string } }> = ({ node, onNodeClick, parent, focus }) => {
  return (
    <>
      <Circle name={node.name} position={node.position} onNodeClick={onNodeClick} parent={parent} focus={focus} />
      {node.children.map((child) => (
        <React.Fragment key={child.name}>
          <Line start={node.position} end={child.position} parent={node} child={child} focus={focus}/>
          <RecursiveCircles node={child} parent={node} onNodeClick={onNodeClick} focus={focus}  />
        </React.Fragment>
      ))}
    </>
  );
};

const Scene = () => {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({position: {x:0,y:0,z:0}, name:"Skills"});

  return (
    <Canvas camera={{ position: [0, 0, 0.5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Controls zoom={zoom} focus={focus} />
      <RecursiveCircles node={positionsTree} focus={focus} onNodeClick={(focusRef:any) => (setZoom(true),setFocus(focusRef))} />
    </Canvas>
  );
};

export default Scene;
