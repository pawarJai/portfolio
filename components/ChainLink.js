import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create chain link geometry
function createChainLinkGeometry() {
  const shape = new THREE.Shape();
  
  // Outer oval
  const outerRadiusX = 1.2;
  const outerRadiusY = 0.6;
  shape.absellipse(0, 0, outerRadiusX, outerRadiusY, 0, Math.PI * 2, false, 0);
  
  // Inner oval (hole)
  const hole = new THREE.Path();
  const innerRadiusX = 0.8;
  const innerRadiusY = 0.3;
  hole.absellipse(0, 0, innerRadiusX, innerRadiusY, 0, Math.PI * 2, true, 0);
  shape.holes.push(hole);
  
  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05
  };
  
  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

// Create gradient material
function createChainMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0x000000) }, // Black
      color2: { value: new THREE.Color(0x1e40af) }, // Blue
      metalness: { value: 0.8 },
      roughness: { value: 0.2 }
    },
    vertexShader: `
      uniform float time;
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform float metalness;
      uniform float roughness;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Fresnel effect
        float fresnel = pow(1.0 - dot(normal, viewDir), 2.0);
        
        // Gradient based on position and time
        float gradient = sin(vPosition.y * 2.0 + time * 0.5) * 0.5 + 0.5;
        
        // Mix colors
        vec3 baseColor = mix(color1, color2, gradient + fresnel * 0.3);
        
        // Add metallic reflection
        vec3 finalColor = baseColor * (1.0 + metalness * fresnel * 0.5);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    side: THREE.DoubleSide
  });
}

// Single Chain Link Component
export function ChainLink({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  const geometry = useMemo(() => createChainLinkGeometry(), []);
  const material = useMemo(() => createChainMaterial(), []);
  
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      const time = state.clock.elapsedTime;
      
      // Snake-like movement
      meshRef.current.position.x = position[0] + Math.sin(time * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.3) * 0.2;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.4) * 0.25;
      
      // Smooth rotation
      meshRef.current.rotation.x = rotation[0] + Math.sin(time * 0.2) * 0.1;
      meshRef.current.rotation.y = rotation[1] + time * 0.3;
      meshRef.current.rotation.z = rotation[2] + Math.cos(time * 0.25) * 0.15;
      
      // Update material time
      materialRef.current.uniforms.time.value = time;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} material={material}>
      <shaderMaterial ref={materialRef} attach="material" {...material} />
    </mesh>
  );
}

// Snake Chain Component - Multiple connected links
export function SnakeChain() {
  const groupRef = useRef();
  const linkCount = 5;
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Overall snake movement
      groupRef.current.position.x = Math.sin(time * 0.3) * 0.5;
      groupRef.current.position.y = Math.cos(time * 0.2) * 0.3;
      groupRef.current.rotation.y = time * 0.1;
      
      // Individual link movements
      groupRef.current.children.forEach((child, index) => {
        const phase = index * 0.5;
        const amplitude = 0.2;
        
        child.position.x = Math.sin(time * 0.4 + phase) * amplitude;
        child.position.y = index * 0.8 + Math.cos(time * 0.3 + phase) * 0.1;
        child.position.z = Math.sin(time * 0.5 + phase) * amplitude * 0.5;
        
        child.rotation.x = Math.sin(time * 0.2 + phase) * 0.2;
        child.rotation.z = Math.cos(time * 0.25 + phase) * 0.15;
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {Array.from({ length: linkCount }, (_, i) => (
        <ChainLink
          key={i}
          position={[0, i * 0.8, 0]}
          rotation={[0, i * Math.PI / 4, 0]}
        />
      ))}
    </group>
  );
}

export default ChainLink;