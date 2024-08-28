import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { InstancedMesh, SphereGeometry, ShaderMaterial, Matrix4, Color, MeshBasicMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';

import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';

interface SpheresProps {
  count: number;
}
const SpheresMesh: React.FC<SpheresProps> = ({ count }) => {
  const meshRef = useRef<InstancedMesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[new SphereGeometry(0.5, 32, 32), new MeshBasicMaterial({ color: 'white' }), count]}>
      <instancedBufferAttribute
        attach="instanceMatrix"
        args={[new Float32Array(count * 16), 16]}
      />
    </instancedMesh>
  );
};

// const SpheresMesh: React.FC<SpheresProps> = ({ count }) => {
//   const meshRef = useRef<InstancedMesh>(null);

//   // Generate random positions and colors
//   const positions = useMemo<Float32Array>(() => {
//     const array = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       array[i * 3] = Math.random() * 20 - 10;
//       array[i * 3 + 1] = Math.random() * 20 - 10;
//       array[i * 3 + 2] = Math.random() * 20 - 10;
//     }
//     return array;
//   }, [count]);

//   const colors = useMemo<Float32Array>(() => {
//     const array = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       array[i * 3] = Math.random();
//       array[i * 3 + 1] = Math.random();
//       array[i * 3 + 2] = Math.random();
//     }
//     return array;
//   }, [count]);

//   // Define the uniforms for the shader material
//   const uniforms = useMemo(() => ({
//     uColor: { value: new Color(0xffffff) },
//   }), []);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <instancedMesh ref={meshRef} args={[new SphereGeometry(0.5, 32, 32), new ShaderMaterial({
//       fragmentShader,
//       vertexShader,
//       uniforms,
//       depthWrite: false,
//       vertexColors: true // Ensure vertex colors are considered
//     }), count]}>
//       {/* Correct the attribute names to match the shader */}
//       <bufferAttribute
//         attach="attributes-position"
//         args={[positions, 3]}
//       />
//       <bufferAttribute
//         attach="attributes-aColor"
//         args={[colors, 3]}
//       />
//     </instancedMesh>
//   );
// };

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <SpheresMesh count={1000} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
