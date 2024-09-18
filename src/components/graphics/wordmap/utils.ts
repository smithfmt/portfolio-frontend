import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import CameraControls from 'camera-controls'
import { useMemo } from "react";


type DataNode = any;

export type Position = {
  x: number,
  y: number,
  z: number,
};

export type NodePosition = {
  name: string,
  position: Position,
  children: NodePosition[],
  parent?: NodePosition,
  description?: string,
}

export const ZoomControls = ({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3() } : { zoom:boolean, focus: {position: Position, name: string}, pos?:THREE.Vector3, look?: THREE.Vector3 }) => {
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

export const generatePositions = (
  name: string,
  data: DataNode,
  nodePosition: Position = { x: 0, y: 0, z: 0 },
  parent?: NodePosition,
  zDistance: number = -0.5,
  radius: number = 1,
): NodePosition => {
  const childrenKeys = typeof data === "object" ? Object.keys(data) : [];
  const numChildren = childrenKeys.length;

  const result: NodePosition = {
    name,
    position: nodePosition,
    children: [],
    parent,
    description: typeof data === 'string' ? data : undefined,
  };

  if (numChildren > 0) {
    const angleStep = (Math.PI * 2) / numChildren;

    childrenKeys.forEach((childName, index) => {
      const angle = index * angleStep;
      const childPosition: Position = {
        x: nodePosition.x + Math.cos(angle) * radius,
        y: nodePosition.y + Math.sin(angle) * radius,
        z: nodePosition.z + zDistance,
      };

      const childData = (data as Record<string, DataNode>)[childName];
      const childNode = generatePositions(childName, childData, childPosition, parent=result, zDistance, radius);
      result.children.push(childNode);
    });
  };

  return result;
};

