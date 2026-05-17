'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// DNA Double Helix Component
function DNAHelix({ position = [0, 0, 0], scale = 1, autoRotate = true }) {
  const groupRef = useRef();
  const helixRef1 = useRef();
  const helixRef2 = useRef();
  
  // Create helix curve points
  const helixPoints = useMemo(() => {
    const points1 = [];
    const points2 = [];
    const height = 4;
    const radius = 0.8;
    const segments = 100;
    
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * height;
      const angle1 = (i / segments) * Math.PI * 8; // 4 full rotations
      const angle2 = angle1 + Math.PI; // Offset by 180 degrees
      
      points1.push(new THREE.Vector3(
        Math.cos(angle1) * radius,
        t - height / 2,
        Math.sin(angle1) * radius
      ));
      
      points2.push(new THREE.Vector3(
        Math.cos(angle2) * radius,
        t - height / 2,
        Math.sin(angle2) * radius
      ));
    }
    
    return { points1, points2 };
  }, []);
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.008;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    
    if (helixRef1.current && helixRef2.current) {
      // Add subtle pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      helixRef1.current.scale.setScalar(pulse);
      helixRef2.current.scale.setScalar(pulse);
    }
  });
  
  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* First helix strand */}
      <mesh ref={helixRef1}>
        <tubeGeometry args={[new THREE.CatmullRomCurve3(helixPoints.points1), 100, 0.08, 8, false]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Second helix strand */}
      <mesh ref={helixRef2}>
        <tubeGeometry args={[new THREE.CatmullRomCurve3(helixPoints.points2), 100, 0.08, 8, false]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          emissive="#0891b2"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Connecting base pairs */}
      {helixPoints.points1.map((point1, index) => {
        if (index % 8 === 0 && index < helixPoints.points2.length) {
          const point2 = helixPoints.points2[index];
          const midPoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);
          const distance = point1.distanceTo(point2);
          
          return (
            <mesh key={index} position={[midPoint.x, midPoint.y, midPoint.z]}>
              <cylinderGeometry args={[0.02, 0.02, distance, 6]} />
              <meshPhysicalMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                emissive="#f8fafc"
                emissiveIntensity={0.1}
              />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
}

// Modern Torus Knot Component
function ModernTorusKnot({ position = [0, 0, 0], scale = 1, autoRotate = true }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <torusKnotGeometry args={[1, 0.3, 128, 16, 3, 5]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={3}
        emissive="#7c3aed"
        emissiveIntensity={0.15}
        iridescence={0.5}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
      />
    </mesh>
  );
}

// Abstract Spiral Component
function AbstractSpiral({ position = [0, 0, 0], scale = 1, autoRotate = true }) {
  const meshRef = useRef();
  
  const spiralCurve = useMemo(() => {
    const points = [];
    const segments = 200;
    const height = 3;
    const radius = 1.2;
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI * 12; // 6 full rotations
      const currentRadius = radius * (1 - t * 0.7); // Tapering effect
      
      points.push(new THREE.Vector3(
        Math.cos(angle) * currentRadius,
        (t - 0.5) * height,
        Math.sin(angle) * currentRadius
      ));
    }
    
    return new THREE.CatmullRomCurve3(points);
  }, []);
  
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.006;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <tubeGeometry args={[spiralCurve, 200, 0.12, 12, false]} />
      <meshPhysicalMaterial
        color="#10b981"
        metalness={0.85}
        roughness={0.15}
        clearcoat={0.9}
        clearcoatRoughness={0.1}
        envMapIntensity={2.5}
        emissive="#047857"
        emissiveIntensity={0.25}
        transmission={0.1}
        thickness={0.5}
      />
    </mesh>
  );
}

// Professional 3D Model Component with sophisticated materials
export function ProfessionalModel({ position = [0, 0, 0], scale = 1, autoRotate = true, modelType = 'dna' }) {
  // Return the appropriate modern 3D component based on type
  const getComponent = () => {
    switch (modelType) {
      case 'dna':
        return <DNAHelix position={position} scale={scale} autoRotate={autoRotate} />;
      case 'torus':
        return <ModernTorusKnot position={position} scale={scale} autoRotate={autoRotate} />;
      case 'spiral':
        return <AbstractSpiral position={position} scale={scale} autoRotate={autoRotate} />;
      default:
        return <DNAHelix position={position} scale={scale} autoRotate={autoRotate} />;
    }
  };
  
  return getComponent();
}