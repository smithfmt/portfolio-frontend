// Spheres.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { InstancedMesh, SphereGeometry, ShaderMaterial, BufferAttribute, Matrix4, Color } from 'three';
import { OrbitControls } from '@react-three/drei';

import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';

interface SpheresProps {
  count: number;
}

const SpheresMesh: React.FC<SpheresProps> = ({ count }) => {
  const meshRef = useRef<InstancedMesh>(null);

  // Generate random positions and colors
  const positions = useMemo<Float32Array>(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = Math.random() * 20 - 10;
      array[i * 3 + 1] = Math.random() * 20 - 10;
      array[i * 3 + 2] = Math.random() * 20 - 10;
    }
    return array;
  }, [count]);

  const colors = useMemo<Float32Array>(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = Math.random();
      array[i * 3 + 1] = Math.random();
      array[i * 3 + 2] = Math.random();
    }
    return array;
  }, [count]);

  // Define the uniforms for the shader material
  const uniforms = useMemo(() => ({
    // Example uniform
    uColor: { value: new Color(0xffffff) },
  }), []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[new SphereGeometry(0.5, 32, 32), new ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms,
      depthWrite: false,
    }), count]}>
      {/* InstancedMesh takes geometry, material, and count */}
      <bufferAttribute
        attach='attributes-position'
        count={count}
        array={positions}
        itemSize={3}
      />
      <bufferAttribute
        attach='attributes-aColor'
        count={count}
        array={colors}
        itemSize={3}
      />
    </instancedMesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.5, 0.5, 0.5] }}>
      <ambientLight intensity={0.5} />
      <SpheresMesh count={1000} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
