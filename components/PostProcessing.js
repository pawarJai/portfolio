'use client';

import { useRef, useMemo } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { EffectComposer, RenderPass, UnrealBloomPass, FilmPass, SMAAPass } from 'three-stdlib';
import * as THREE from 'three';

// Extend R3F with post-processing passes
extend({ EffectComposer, RenderPass, UnrealBloomPass, FilmPass, SMAAPass });

// Lightweight Post-Processing Component (Performance Optimized)
export function CinematicPostProcessing({ children, enableEffects = false }) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef();
  
  // Only create composer if effects are enabled
  const composer = useMemo(() => {
    if (!enableEffects) return null;
    
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    
    // Only add basic render pass for performance
    composer.addPass(renderPass);
    
    // Optional lightweight bloom (disabled by default)
    if (enableEffects === 'high-end') {
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(size.width, size.height),
        0.8,  // reduced strength
        0.2,  // reduced radius
        0.9   // higher threshold
      );
      composer.addPass(bloomPass);
    }
    
    return composer;
  }, [gl, scene, camera, size, enableEffects]);
  
  // Update composer size when viewport changes
  useMemo(() => {
    if (composer) {
      composer.setSize(size.width, size.height);
    }
  }, [composer, size]);
  
  // Render with post-processing only if enabled
  useFrame(() => {
    if (composer) {
      composer.render();
    }
  }, enableEffects ? 1 : 0);
  
  return (
    <>
      {children}
    </>
  );
}

// Color Grading Component
export function ColorGrading() {
  const { gl } = useThree();
  
  useMemo(() => {
    // Enhanced tone mapping for cinematic look
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2;
    
    // Color space settings
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);
  
  return null;
}

// Depth of Field Effect (simplified)
export function DepthOfField({ focusDistance = 5, aperture = 0.025, maxblur = 0.01 }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Simple depth of field simulation by adjusting camera focus
    if (camera.focus !== undefined) {
      camera.focus = focusDistance;
      camera.aperture = aperture;
    }
  });
  
  return null;
}

// Atmospheric Scattering Effect
export function AtmosphericScattering() {
  const meshRef = useRef();
  
  const atmosphereGeometry = useMemo(() => new THREE.SphereGeometry(50, 32, 32), []);
  
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x1e3a8a) },
        color2: { value: new THREE.Color(0x3b82f6) },
        color3: { value: new THREE.Color(0x60a5fa) }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          
          vec3 atmosphere = color1 + color2 * intensity + color3 * intensity * intensity;
          
          gl_FragColor = vec4(atmosphere, intensity * 0.3);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      atmosphereMaterial.uniforms.time.value = state.clock.elapsedTime;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={atmosphereGeometry} material={atmosphereMaterial} />
  );
}

// Volumetric Lighting Effect
export function VolumetricLighting() {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5;
    }
  });
  
  return (
    <>
      <spotLight
        ref={lightRef}
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      
      {/* Volumetric light cone */}
      <mesh position={[5, 10, 5]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[3, 8, 8, 1, true]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

// Main Post-Processing Wrapper
export function AdvancedPostProcessing({ children }) {
  // Detect device performance level
  const isHighEnd = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return false;
    
    const renderer = gl.getParameter(gl.RENDERER);
    const isHighEndGPU = renderer && (
      renderer.includes('RTX') || 
      renderer.includes('GTX 1060') ||
      renderer.includes('RX 580') ||
      renderer.includes('Apple M') ||
      renderer.includes('Adreno 6')
    );
    
    return isHighEndGPU && navigator.hardwareConcurrency >= 4;
  }, []);
  
  return (
    <>
      <ColorGrading />
      <CinematicPostProcessing enableEffects={false}>
        {children}
      </CinematicPostProcessing>
    </>
  );
}

export default AdvancedPostProcessing;