import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getCubePositions, generateSeed } from "./utils";

import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

type Props = {
    scrollY: number,
    count?: number,
    radius?: number,
    color?: THREE.Color
};

const calcCamPos = (scrollAmount: number, initialPosition:THREE.Vector3, amplitude = -10, frequency = 0.001) => {
    const zOffset = amplitude * Math.sin(frequency * scrollAmount);
    const newPosition = new THREE.Vector3(
      initialPosition.x,
      initialPosition.y,
      initialPosition.z + zOffset
    );
    return newPosition;
}

const camPos = new THREE.Vector3(1,1,2);

const CustomGeometryParticles = ({ scrollY, count=400, radius=200.0, color=new THREE.Color(0.1, 0.5, 0.8) } : Props) => {
    const [particlePositions] = useState(getCubePositions(count, radius));
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

    useFrame(({ clock, camera, }) => {
        uniforms.uTime.value = clock.elapsedTime;
        camera.setRotationFromAxisAngle(new THREE.Vector3(1,1,0),scrollY*scrollIntensity);
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
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <Canvas camera={{ rotation:[0,0,0],position: camPos, fov: 80 }}>
            <ambientLight intensity={0.5} />
            <CustomGeometryParticles scrollY={scrollY}/>
        </Canvas> 
    );
};

export default Scene;
