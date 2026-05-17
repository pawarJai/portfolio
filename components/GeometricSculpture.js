import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Neural Network Node Component (Optimized)
function NeuralNode({ position, connections = [], color = '#4f46e5' }) {
  const meshRef = useRef();
  const frameCounter = useRef(0);
  
  useFrame((state) => {
     if (meshRef.current) {
       frameCounter.current++;
       
       // Limit updates to every 4th frame for performance
       if (frameCounter.current % 4 === 0) {
         const time = state.clock.elapsedTime;
         const pulse = Math.sin(time * 2 + position[0]) * 0.2 + 0.8;
         meshRef.current.material.emissiveIntensity = pulse;
         
         // Simplified floating motion
         meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.03;
         
         // Reduced rotation complexity
         meshRef.current.rotation.y = time * 0.2 + position[0];
       }
     }
   });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 8, 8]} /> {/* Reduced segments */}
      <meshStandardMaterial 
        color="#0f172a"
        emissive="#1e293b"
        emissiveIntensity={0.05}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Neural Network Connection Lines (Optimized)
function NeuralConnections({ nodes }) {
  const linesRef = useRef();
  const frameCounter = useRef(0);
  
  const geometry = useMemo(() => {
    const points = [];
    // Reduced connection density for performance
    for (let i = 0; i < nodes.length; i += 2) { // Skip every other node
      for (let j = i + 2; j < nodes.length; j += 2) {
        if (Math.random() > 0.8) { // Fewer connections
          points.push(new THREE.Vector3(...nodes[i]));
          points.push(new THREE.Vector3(...nodes[j]));
        }
      }
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodes]);
  
  useFrame((state) => {
     if (linesRef.current) {
       frameCounter.current++;
       
       // Update every 6th frame only
       if (frameCounter.current % 6 === 0) {
         const time = state.clock.elapsedTime;
         linesRef.current.material.opacity = 0.3 + Math.sin(time) * 0.1;
       }
     }
   });
  
  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#60a5fa" transparent opacity={0.2} />
    </lineSegments>
  );
}

// Enhanced Visible Spider Web Visualization
function SpiderWebVisualization() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Gentle rotation for the web
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
      {/* Enhanced Sophisticated Web Network */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const radius = 4;
        return (
          <group key={`web-${i}`}>
            {/* Primary Radial Lines - More Visible */}
            <mesh 
              position={[
                Math.cos(angle) * radius * 0.5,
                0,
                Math.sin(angle) * radius * 0.5
              ]}
              rotation={[0, angle, 0]}
            >
              <cylinderGeometry args={[0.008, 0.008, radius, 16]} />
              <meshPhysicalMaterial 
                color="#e2e8f0"
                metalness={0.3}
                roughness={0.1}
                emissive="#60a5fa"
                emissiveIntensity={0.2}
                transparent
                opacity={0.9}
                clearcoat={1}
                reflectivity={0.9}
              />
            </mesh>
            
            {/* Secondary Web Connections - Enhanced */}
            {i % 2 === 0 && (
              <mesh 
                position={[
                  Math.cos(angle + Math.PI / 16) * radius * 0.7,
                  Math.sin(i * 0.3) * 0.3,
                  Math.sin(angle + Math.PI / 16) * radius * 0.7
                ]}
                rotation={[0, angle + Math.PI / 16, Math.PI / 4]}
              >
                <cylinderGeometry args={[0.006, 0.006, radius * 0.7, 12]} />
                <meshPhysicalMaterial 
                  color="#cbd5e1"
                  metalness={0.4}
                  roughness={0.2}
                  emissive="#3b82f6"
                  emissiveIntensity={0.15}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            )}
            
            {/* Tertiary Connections for Density */}
            {i % 3 === 0 && (
              <mesh 
                position={[
                  Math.cos(angle + Math.PI / 8) * radius * 0.3,
                  Math.sin(i * 0.2) * 0.2,
                  Math.sin(angle + Math.PI / 8) * radius * 0.3
                ]}
                rotation={[Math.PI / 6, angle + Math.PI / 8, 0]}
              >
                <cylinderGeometry args={[0.004, 0.004, radius * 0.4, 8]} />
                <meshPhysicalMaterial 
                  color="#94a3b8"
                  metalness={0.5}
                  roughness={0.3}
                  emissive="#1e40af"
                  emissiveIntensity={0.1}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            )}
            
            {/* Enhanced Connection Nodes - More Prominent */}
            <mesh position={[
              Math.cos(angle) * radius,
              Math.sin(i * 0.4) * 0.5,
              Math.sin(angle) * radius
            ]}>
              <sphereGeometry args={[0.05, 20, 20]} />
              <meshPhysicalMaterial 
                color="#f8fafc"
                metalness={0.1}
                roughness={0.1}
                emissive="#60a5fa"
                emissiveIntensity={0.4}
                clearcoat={1}
                clearcoatRoughness={0.01}
                reflectivity={0.95}
                envMapIntensity={2}
                transmission={0.1}
                thickness={0.2}
              />
            </mesh>
            
            {/* Mid-point Connection Nodes */}
            <mesh position={[
              Math.cos(angle) * radius * 0.5,
              Math.sin(i * 0.2) * 0.2,
              Math.sin(angle) * radius * 0.5
            ]}>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshPhysicalMaterial 
                color="#e2e8f0"
                metalness={0.2}
                roughness={0.2}
                emissive="#3b82f6"
                emissiveIntensity={0.3}
                clearcoat={1}
                reflectivity={0.8}
              />
            </mesh>
          </group>
        );
      })}
      
      {/* Enhanced Concentric Ring Network */}
      {[2, 3, 4, 5].map((radius, i) => (
        <Float key={`ring-${i}`} speed={0.3 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.1}>
          <mesh rotation={[Math.PI / 4, i * Math.PI / 8, 0]}>
            <torusGeometry args={[radius, 0.02, 16, 64]} />
            <meshPhysicalMaterial 
              color="#f1f5f9"
              metalness={0.2}
              roughness={0.1}
              emissive="#60a5fa"
              emissiveIntensity={0.15 - i * 0.02}
              clearcoat={1}
              clearcoatRoughness={0.02}
              reflectivity={0.9}
              envMapIntensity={1.5}
              transparent
              opacity={0.8 - i * 0.1}
              transmission={0.1}
              thickness={0.05}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Central Hub */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          metalness={0.1}
          roughness={0.05}
          emissive="#60a5fa"
          emissiveIntensity={0.6}
          clearcoat={1}
          clearcoatRoughness={0.01}
          reflectivity={1}
          envMapIntensity={3}
          transmission={0.2}
          thickness={0.3}
        />
      </mesh>
    </group>
  );
}







// Professional Pedestal
function ProfessionalPedestal() {
  return (
    <mesh position={[0, -3, 0]} receiveShadow>
       <cylinderGeometry args={[3, 3, 0.2, 32]} />
       <meshPhysicalMaterial 
         color="#0f172a"
         metalness={0.95}
         roughness={0.05}
         clearcoat={1}
         clearcoatRoughness={0.02}
         reflectivity={1}
         envMapIntensity={2}
         transparent
         opacity={0.4}
         transmission={0.1}
         thickness={0.5}
       />
    </mesh>
  );
}

// Interactive Mouse Effects
function useMouseInteraction() {
  const { mouse, viewport } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useFrame(() => {
    setMousePosition({
      x: (mouse.x * viewport.width) / 2,
      y: (mouse.y * viewport.height) / 2
    });
  });
  
  return mousePosition;
}

// Main Professional Geometry Component
export function ProfessionalGeometry() {
  const groupRef = useRef();
  const mousePosition = useMouseInteraction();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse interaction
      groupRef.current.rotation.x = mousePosition.y * 0.05;
      groupRef.current.rotation.y = mousePosition.x * 0.05;
      
      // Gentle breathing animation
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      groupRef.current.scale.setScalar(breathe);
    }
  });
  
  return (
    <group ref={groupRef}>
      <SpiderWebVisualization />
    </group>
  );
}

// Museum Exhibit with Professional 3D Models
export function MuseumExhibit() {
  return (
    <group>
      <ProfessionalGeometry />
      <ProfessionalPedestal />
      
      {/* Professional Lighting */}
       <ambientLight intensity={0.3} color="#ffffff" />
       <directionalLight 
         position={[10, 10, 5]} 
         intensity={1.2} 
         color="#ffffff"
         castShadow
         shadow-mapSize-width={4096}
         shadow-mapSize-height={4096}
         shadow-camera-far={50}
         shadow-camera-left={-10}
         shadow-camera-right={10}
         shadow-camera-top={10}
         shadow-camera-bottom={-10}
       />
       <pointLight position={[-8, 5, -8]} intensity={0.8} color="#3b82f6" />
       <pointLight position={[8, -5, 8]} intensity={0.8} color="#8b5cf6" />
       <pointLight position={[0, 8, 0]} intensity={0.6} color="#06b6d4" />
       <spotLight 
         position={[0, 10, 0]} 
         target-position={[0, 0, 0]}
         intensity={1}
         angle={Math.PI / 6}
         penumbra={0.5}
         color="#ffffff"
         castShadow
       />
    </group>
  );
}

export default ProfessionalGeometry;