'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Physics, useBox, useSphere, usePlane } from '@react-three/cannon';
import * as THREE from 'three';

// Physics-enabled Box Component
function PhysicsBox({ position, args = [1, 1, 1], material, ...props }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    args,
    material: {
      friction: 0.4,
      restitution: 0.6,
    },
    ...props
  }));

  useFrame(() => {
    // Add slight rotation for visual interest
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={args} />
      {material || (
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          envMapIntensity={2}
        />
      )}
    </mesh>
  );
}

// Physics-enabled Sphere Component
function PhysicsSphere({ position, args = [0.5], material, ...props }) {
  const [ref, api] = useSphere(() => ({
    mass: 0.8,
    position,
    args,
    material: {
      friction: 0.3,
      restitution: 0.8,
    },
    ...props
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={args} />
      {material || (
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.1}
          roughness={0.05}
          transmission={0.9}
          thickness={1}
          ior={2.4}
          envMapIntensity={3}
        />
      )}
    </mesh>
  );
}

// Physics Ground Plane
function PhysicsGround() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -5, 0],
    material: {
      friction: 0.4,
      restitution: 0.3,
    }
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshPhysicalMaterial
        color="#1f2937"
        metalness={0.1}
        roughness={0.8}
        envMapIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Interactive Physics Objects
function InteractiveObjects() {
  return (
    <>
      {/* Floating boxes with physics */}
      <PhysicsBox position={[2, 5, 0]} args={[0.8, 0.8, 0.8]} />
      <PhysicsBox position={[-2, 6, 1]} args={[1, 0.5, 1]} />
      <PhysicsBox position={[0, 7, -2]} args={[0.6, 1.2, 0.6]} />
      
      {/* Bouncing spheres */}
      <PhysicsSphere position={[3, 8, 2]} args={[0.6]} />
      <PhysicsSphere position={[-3, 9, -1]} args={[0.4]} />
      <PhysicsSphere position={[1, 10, 3]} args={[0.5]} />
      
      {/* Additional interactive elements */}
      <PhysicsBox 
        position={[-1, 12, 0]} 
        args={[1.5, 0.3, 1.5]}
        material={
          <meshPhysicalMaterial
            color="#10b981"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2.5}
            emissive="#047857"
            emissiveIntensity={0.2}
          />
        }
      />
    </>
  );
}

// Main Physics Scene Component
export function PhysicsScene() {
  return (
    <Physics
      gravity={[0, -9.81, 0]}
      defaultContactMaterial={{
        friction: 0.4,
        restitution: 0.7,
        contactEquationStiffness: 1e8,
        contactEquationRelaxation: 4,
        frictionEquationStiffness: 1e8,
        frictionEquationRelaxation: 3,
      }}
    >
      <PhysicsGround />
      <InteractiveObjects />
    </Physics>
  );
}

export default PhysicsScene;