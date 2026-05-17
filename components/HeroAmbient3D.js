'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

function FloatingParticles() {
  const pointsRef = useRef();
  const count = 48;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 10;
      values[i * 3 + 1] = (Math.random() - 0.5) * 6;
      values[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    return values;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.04;
  });

  return (
    <points ref={pointsRef} position={[0, 0, -2]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f59e0b" size={0.03} transparent opacity={0.18} />
    </points>
  );
}

function AccentRing({ color, position, scale }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = 1.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} rotation={[1.1, 0.2, 0.4]}>
      <torusGeometry args={[1, 0.03, 18, 96]} />
      <meshBasicMaterial color={color} transparent opacity={0.18} />
    </mesh>
  );
}

export default function HeroAmbient3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <FloatingParticles />
        <AccentRing color="#f59e0b" position={[2.6, 0.4, -1]} scale={1.4} />
        <AccentRing color="#111111" position={[-2.9, -1.1, -2]} scale={0.9} />
      </Canvas>
    </div>
  );
}
