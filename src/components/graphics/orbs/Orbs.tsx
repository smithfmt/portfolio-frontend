import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getSpherePositions, getCubePositions, getRandomPositions, generateSeed, getDodecahedronPositions } from "./utils";

import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

type Props = {
    trackPointer: boolean,
    scrollY: number,
    count?: number,
    radius?: number,
    color?: THREE.Color
    particleSpeed?: number,
};

const createTransformMatrix = (initialPosition:THREE.Vector3, scaleFactor:number) => {
  
    // Calculate the translation needed to move towards the origin
    const translation = initialPosition.clone().multiplyScalar(-1);
  
    // Create a translation matrix
    const translationMatrix = new THREE.Matrix4().makeTranslation(
      translation.x * scaleFactor,
      translation.y * scaleFactor,
      translation.z * scaleFactor
    );
  
    // Return the final transformation matrix
    return translationMatrix;
};

const calcCamPos = (scrollAmount: number, initialPosition:THREE.Vector3, amplitude = -10, frequency = 0.001) => {
    // Calculate the z-axis offset using a sine wave
    const zOffset = amplitude * Math.sin(frequency * scrollAmount);
  
    // Calculate the new position
    const newPosition = new THREE.Vector3(
      initialPosition.x,
      initialPosition.y,
      initialPosition.z + zOffset
    );
  
    return newPosition;
  }

const camPos = new THREE.Vector3(1,1,2);

const CustomGeometryParticles = ({ trackPointer, scrollY, count=400, radius=200.0, color=new THREE.Color(0.1, 0.5, 0.8) } : Props) => {
    const [particlePositions, setParticlePositions] = useState(getCubePositions(count, radius));
    const points = useRef<THREE.Points>(null!);
    const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);
    const seeds = useMemo(() => {
        const arr = new Float32Array(count);
        for (let i = 0; i < count; i++) {
          arr[i] = generateSeed(i, count);
        }
        return arr;
      }, [count]);
    
    const uniforms = useMemo(() => ({
        uRadius: { value: radius },
        uTime: { value: 0.0 },
        uSizeMin: { value: 20.0 },
        uSizeMax: { value: 100.0 }, 
        uColor: { value: color },
        lightDir: { value: new THREE.Vector3(1,-2,0.5) },
        uSpeed: { value: 200.0 },
    }), [radius, seeds]);

    const scrollIntensity = 0.0005;

    useFrame(({ clock, pointer, camera, }) => {
        uniforms.uTime.value = clock.elapsedTime;
        camera.setRotationFromAxisAngle(new THREE.Vector3(1,1,0),scrollY*scrollIntensity);
        // const transformationMatrix = createTransformMatrix(camera.position,scrollY*scrollIntensity*2);
        // camera.position.set(camPos.x,camPos.y,camPos.z)
        // camera.applyMatrix4(transformationMatrix);
        const { x, y, z } = calcCamPos(scrollY,camPos);
        camera.position.set(x,y,z);
    });

    return (
        <points ref={points}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={particlePositions.length / 3}
                array={particlePositions}
                itemSize={3}
            />
             <bufferAttribute
                attach="attributes-aSeed"
                count={count}
                array={seeds}
                itemSize={1}
            />
        </bufferGeometry>
        <shaderMaterial
            ref={shaderMaterialRef}
            depthWrite={false}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}            
        />
        </points>        
    );
};

const Scene = () => {
    const [trackPointer, setTrackPointer] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <Canvas camera={{ rotation:[0,0,0],position: camPos, fov: 80 }} onPointerLeave={() => setTrackPointer(false)} onPointerEnter={() => setTrackPointer(true)}>
            <ambientLight intensity={0.5} />
            <CustomGeometryParticles trackPointer={trackPointer} scrollY={scrollY}/>
            {/* <OrbitControls /> */}
        </Canvas>
        
    );
};

export default Scene;
