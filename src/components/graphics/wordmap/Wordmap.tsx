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
  originalPosition: Position; // Store original position
  targetPosition: Position; // Target position for animation
  children: NodePosition[];
  time?: string,
}

// Generate positions for nodes
function generatePositions(
  name: string,
  data: DataNode,
  parentPosition: Position = { x: 0, y: 0, z: 0 },
  zDistance: number = -0.5,
  radius: number = 1
): NodePosition {
  const childrenKeys = typeof data === "object" ? Object.keys(data) : [];
  const numChildren = childrenKeys.length;

  const result: NodePosition = {
    name,
    position: parentPosition,
    originalPosition: { ...parentPosition }, // Store original position
    targetPosition: { ...parentPosition }, // Initialize target position
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

const Controls = ({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3() }) => {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  return useFrame((state, delta) => {
    zoom ? pos.set(focus.x, focus.y, focus.z + 1) : pos.set(0, 0, 2)
    zoom ? look.set(focus.x, focus.y, focus.z - 1) : look.set(0, 0, 1)

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
  })
}

const Circle: React.FC<{ name: string; position: Position; onNodeClick: any}> = ({ name, position, onNodeClick }) => {
  return (
    <group position={[position.x, position.y, position.z]} onClick={() => onNodeClick(position)}>
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

const Line: React.FC<{ start: Position; end: Position }> = ({ start, end }) => {
  const points = [
    new THREE.Vector3(start.x, start.y, start.z),
    new THREE.Vector3(end.x, end.y, end.z),
  ];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line>
      <primitive object={lineGeometry} attach="geometry" />
      <lineBasicMaterial attach="material" color="white" />
    </line>
  );
};

const RecursiveCircles: React.FC<{ node: NodePosition; onNodeClick: any }> = ({ node, onNodeClick }) => {
  return (
    <>
      <Circle name={node.name} position={node.position} onNodeClick={onNodeClick} />
      {node.children.map((child) => (
        <React.Fragment key={child.name}>
          <Line start={node.position} end={child.position} />
          <RecursiveCircles node={child} onNodeClick={onNodeClick}  />
        </React.Fragment>
      ))}
    </>
  );
};

const Scene = () => {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});

  return (
    <Canvas camera={{ position: [0, 0, 0.5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Controls zoom={zoom} focus={focus} />
      <RecursiveCircles node={positionsTree} onNodeClick={(focusRef:any) => (setZoom(true),setFocus(focusRef))} />
    </Canvas>
  );
};

export default Scene;
