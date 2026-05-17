'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom twisted ribbon geometry
function createTwistedRibbonGeometry(segments = 200, twists = 8, radius = 2, width = 0.8) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  
  // Create twisted ribbon path
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2;
    const twist = t * twists * Math.PI * 2;
    
    // Main circular path
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(t * Math.PI * 4) * 0.5; // Vertical wave
    
    // Ribbon width vectors with twist
    const widthX = Math.cos(twist) * width;
    const widthY = Math.sin(twist) * width;
    
    // Create ribbon cross-section
    vertices.push(
      x - widthX * 0.5, y - widthY * 0.5, z,
      x + widthX * 0.5, y + widthY * 0.5, z
    );
    
    // Normals
    const normal = new THREE.Vector3(0, 1, 0);
    normals.push(normal.x, normal.y, normal.z);
    normals.push(normal.x, normal.y, normal.z);
    
    // UVs
    uvs.push(0, t, 1, t);
    
    // Indices for triangles
    if (i < segments) {
      const base = i * 2;
      indices.push(
        base, base + 1, base + 2,
        base + 1, base + 3, base + 2
      );
    }
  }
  
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
  
  return geometry;
}

// Enhanced iridescent material with holographic effects
function createIridescentMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0xff006e) }, // Hot Pink
      color2: { value: new THREE.Color(0x8338ec) }, // Electric Purple
      color3: { value: new THREE.Color(0x3a86ff) }, // Bright Blue
      color4: { value: new THREE.Color(0x06ffa5) }, // Neon Green
      color5: { value: new THREE.Color(0xffbe0b) }, // Electric Yellow
      color6: { value: new THREE.Color(0xff5722) }, // Electric Orange
      metalness: { value: 0.95 },
      roughness: { value: 0.05 },
      envMapIntensity: { value: 3.0 },
      holographicIntensity: { value: 2.5 }
    },
    vertexShader: `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
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
      uniform vec3 color3;
      uniform vec3 color4;
      uniform vec3 color5;
      uniform vec3 color6;
      uniform float metalness;
      uniform float roughness;
      uniform float envMapIntensity;
      uniform float holographicIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Enhanced Fresnel effect
        float fresnel = pow(1.0 - dot(normal, viewDir), 3.0);
        float fresnelGlow = pow(1.0 - dot(normal, viewDir), 0.5);
        
        // Complex animated color transitions
        float wave1 = sin(time * 0.8 + vPosition.x * 0.2 + vPosition.z * 0.1) * 0.5 + 0.5;
        float wave2 = cos(time * 0.6 + vPosition.y * 0.3 + vUv.x * 6.28) * 0.5 + 0.5;
        float wave3 = sin(time * 1.2 + vUv.y * 4.0 + vPosition.z * 0.15) * 0.5 + 0.5;
        float wave4 = cos(time * 0.4 + length(vPosition.xz) * 0.5) * 0.5 + 0.5;
        
        // Multi-layer color mixing
        vec3 layer1 = mix(color1, color2, wave1);
        vec3 layer2 = mix(color3, color4, wave2);
        vec3 layer3 = mix(color5, color6, wave3);
        
        vec3 baseColor = mix(
          mix(layer1, layer2, wave3),
          layer3,
          wave4
        );
        
        // Holographic rainbow effect
        float rainbow = sin(time * 2.0 + vUv.x * 10.0 + vPosition.y * 0.5) * 0.5 + 0.5;
        vec3 rainbowColor = vec3(
          sin(rainbow * 6.28 + 0.0) * 0.5 + 0.5,
          sin(rainbow * 6.28 + 2.09) * 0.5 + 0.5,
          sin(rainbow * 6.28 + 4.18) * 0.5 + 0.5
        );
        
        // Combine base color with holographic effects
        vec3 holographic = mix(baseColor, rainbowColor, fresnel * 0.3);
        
        // Add iridescent shimmer and glow
        vec3 iridescent = holographic + fresnelGlow * holographicIntensity * 0.2;
        
        // Enhanced metallic reflection with color
        float metallic = metalness * fresnel;
        vec3 metallicReflection = iridescent * (1.0 + metallic * 0.8);
        
        // Add edge glow
        float edgeGlow = pow(fresnel, 4.0) * 2.0;
        vec3 finalColor = metallicReflection + edgeGlow * baseColor;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    side: THREE.DoubleSide,
    transparent: false
  });
}

// Main twisted ribbon component
export function TwistedRibbon({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Create geometry and material
  const geometry = useMemo(() => createTwistedRibbonGeometry(150, 6, 2.5, 1.2), []);
  const material = useMemo(() => createIridescentMaterial(), []);
  
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Complex fluid rotation patterns
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2 + Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.25) * 0.15 + Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
      
      // Update material time for enhanced color animation
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * 1.5;
      
      // Dynamic morphing scale with multiple waves
      const pulse1 = 1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
      const pulse2 = 1 + Math.cos(state.clock.elapsedTime * 0.4) * 0.06;
      const pulse3 = 1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
      meshRef.current.scale.setScalar(scale * pulse1 * pulse2 * pulse3);
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={material}
      castShadow
      receiveShadow
    >
      <primitive object={material} ref={materialRef} />
    </mesh>
  );
}

// Multiple twisted ribbons for complex animation
export function TwistedRibbonCluster() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Hypnotic multi-axis rotation with chaotic phase shifts
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.8 + Math.cos(time * 0.15) * 0.3 + Math.sin(time * 0.9) * 0.1;
      groupRef.current.rotation.y = time * 0.18 + Math.sin(time * 0.3) * 0.15 + Math.cos(time * 0.7) * 0.08;
      groupRef.current.rotation.z = Math.cos(time * 0.35) * 0.5 + Math.sin(time * 0.8) * 0.2 + Math.cos(time * 1.1) * 0.1;
      
      // Complex morphing with chaotic wave interference
      const wave1 = Math.sin(time * 0.5) * 0.3;
      const wave2 = Math.cos(time * 0.7) * 0.2;
      const wave3 = Math.sin(time * 1.2) * 0.15;
      const wave4 = Math.cos(time * 1.6) * 0.1;
      const wave5 = Math.sin(time * 2.1) * 0.08;
      const morphScale = 1 + wave1 + wave2 + wave3 + wave4 + wave5;
      groupRef.current.scale.setScalar(morphScale);
      
      // Complex orbital motion with figure-8 patterns
      const orbitRadius1 = 0.4;
      const orbitRadius2 = 0.2;
      const orbitSpeed1 = 0.25;
      const orbitSpeed2 = 0.4;
      
      groupRef.current.position.x = Math.cos(time * orbitSpeed1) * orbitRadius1 + Math.sin(time * orbitSpeed2) * orbitRadius2;
      groupRef.current.position.z = Math.sin(time * orbitSpeed1) * orbitRadius1 + Math.cos(time * orbitSpeed2) * orbitRadius2;
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.25 + Math.cos(time * 0.6) * 0.15 + Math.sin(time * 1.1) * 0.1;
      
      // Update each ribbon with chaotic individual behaviors
      groupRef.current.children.forEach((child, index) => {
        if (child.material && child.material.uniforms) {
          // Chaotic time progression for each ribbon
          const timeMultiplier = 1.2 + index * 0.4 + Math.sin(time * 0.1) * 0.3;
          const timeOffset = Math.sin(time * 0.05 + index) * 4;
          child.material.uniforms.time.value = time * timeMultiplier + timeOffset;
          
          // Individual chaotic transformations
          const rotSpeed = 0.008 + index * 0.003;
          child.rotation.x += rotSpeed * (1 + Math.sin(time * 0.1 + index) * 0.5);
          child.rotation.y += rotSpeed * 0.8 * (1 + Math.cos(time * 0.15 + index) * 0.3);
          child.rotation.z += rotSpeed * 1.2 * (1 + Math.sin(time * 0.2 + index) * 0.4);
          
          // Individual scale pulsing
          const pulsePhase = time * (0.5 + index * 0.2) + index * Math.PI;
          const pulse = 1 + Math.sin(pulsePhase) * 0.15 + Math.cos(pulsePhase * 1.3) * 0.1;
          child.scale.setScalar(pulse);
          
          // Individual position wobbling
          const wobbleX = Math.sin(time * (0.3 + index * 0.1) + index) * 0.1;
          const wobbleY = Math.cos(time * (0.4 + index * 0.15) + index) * 0.08;
          const wobbleZ = Math.sin(time * (0.35 + index * 0.12) + index) * 0.12;
          child.position.set(wobbleX, wobbleY, wobbleZ);
        }
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Main central ribbon */}
      <TwistedRibbon position={[0, 0, 0]} scale={1.2} />
      
      {/* Smaller orbiting ribbons */}
      <TwistedRibbon position={[3, 1, -1]} scale={0.6} />
      <TwistedRibbon position={[-2.5, -0.5, 1]} scale={0.7} />
      <TwistedRibbon position={[1, -2, 2]} scale={0.5} />
      
      {/* Background ambient ribbons */}
      <TwistedRibbon position={[4, 2, -3]} scale={0.4} />
      <TwistedRibbon position={[-3, 1.5, -2]} scale={0.45} />
      
      {/* Additional chaotic ribbons for more confusion */}
      <TwistedRibbon position={[2.5, 3, 1.5]} scale={0.35} />
      <TwistedRibbon position={[-1.8, -2.5, -1.2]} scale={0.55} />
      <TwistedRibbon position={[0.5, 1.8, -2.8]} scale={0.3} />
    </group>
  );
}

// Morphing twisted shape
export function MorphingTwistedShape({ position = [0, 0, 0] }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Dynamic geometry that morphs
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16, 3, 7);
    return geo;
  }, []);
  
  const material = useMemo(() => createIridescentMaterial(), []);
  
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Hypnotic multi-axis rotation with phase shifts
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 + Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25 + Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.7 + Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
      
      // Update material with complex timing
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * 1.8 + Math.sin(state.clock.elapsedTime * 0.2) * 3;
      
      // Complex morphing with multiple wave patterns
      const wave1 = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
      const wave2 = Math.cos(state.clock.elapsedTime * 0.6) * 0.3;
      const wave3 = Math.sin(state.clock.elapsedTime * 1.3) * 0.2;
      const wave4 = Math.cos(state.clock.elapsedTime * 1.7) * 0.15;
      
      const morphX = 1 + wave1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.25;
      const morphY = 1 + wave2 + Math.cos(state.clock.elapsedTime * 0.9) * 0.3;
      const morphZ = 1 + wave3 + wave4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      meshRef.current.scale.set(morphX, morphY, morphZ);
      
      // Orbital motion around center
      const orbitRadius = 0.4;
      const orbitSpeed = 0.15;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * orbitSpeed) * orbitRadius;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * orbitSpeed) * orbitRadius;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + Math.cos(state.clock.elapsedTime * 0.7) * 0.15;
    }
  });
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={material}
      castShadow
      receiveShadow
    >
      <primitive object={material} ref={materialRef} />
    </mesh>
  );
}

// Floating particles for added visual complexity
function FloatingParticles() {
  const particlesRef = useRef();
  const particleCount = 80;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.attributes.position.array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const phase = i * 0.1;
        
        // Complex 3D motion patterns
        positions[idx] += Math.sin(time * 0.5 + phase) * 0.008 + Math.cos(time * 0.3 + phase) * 0.004;
        positions[idx + 1] += Math.cos(time * 0.4 + phase) * 0.01 + Math.sin(time * 0.7 + phase) * 0.006;
        positions[idx + 2] += Math.sin(time * 0.6 + phase) * 0.007 + Math.cos(time * 0.8 + phase) * 0.005;
        
        // Boundary wrapping for continuous motion
        if (Math.abs(positions[idx]) > 8) positions[idx] *= -0.8;
        if (Math.abs(positions[idx + 1]) > 8) positions[idx + 1] *= -0.8;
        if (Math.abs(positions[idx + 2]) > 8) positions[idx + 2] *= -0.8;
      }
      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points>
      <bufferGeometry ref={particlesRef}>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00ffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Enhanced scene with all elements
export function CompleteHypnoticScene() {
  return (
    <group>
      <TwistedRibbonCluster />
      <MorphingTwistedShape position={[0, 0, 0]} />
      <MorphingTwistedShape position={[5, 2, -3]} />
      <FloatingParticles />
    </group>
  );
}

export default TwistedRibbon;