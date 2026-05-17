'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Float, 
  Environment, 
  Stars, 
  useTexture,
  MeshDistortMaterial,
  Text,
  OrbitControls,
  Sparkles,
  ContactShadows,
  PerspectiveCamera
} from '@react-three/drei'
import { useRef, Suspense, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { ProfessionalModel } from './GLTFModel'
import { PhysicsScene } from './PhysicsScene'
import { PerformanceWrapper, OptimizedModel, FrustumCulledObject } from './PerformanceOptimizer';
import AdaptiveQuality from './TextureOptimizer';
import AdvancedPostProcessing from './PostProcessing';
import { MuseumExhibit } from './GeometricSculpture';

// AI/ML Professional Environment (Performance Optimized)
function AIMLEnvironment() {
  return (
    <>
      <Environment preset="night" background={false} />
      <ambientLight intensity={0.15} color="#1e293b" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.25} 
        color="#64748b"
        castShadow
        shadow-mapSize-width={512} // Reduced shadow map size
        shadow-mapSize-height={512}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Removed additional lights for performance */}
    </>
  )
}





// AI/ML Data Particles with Neural Network Theme (Optimized)
function AIDataParticles() {
  const particlesRef = useRef()
  const particleCount = 30 // Reduced from 80 to 30 for better performance
  const frameCounter = useRef(0)
  
  // Generate AI-themed particle positions in clusters
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const col = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 20 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.cos(phi) + Math.random() * 10 - 5
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      
      const intensity = 0.3 + Math.random() * 0.4
      col[i * 3] = intensity * 0.4     // Subtle blue
      col[i * 3 + 1] = intensity * 0.5 // Muted
      col[i * 3 + 2] = intensity * 0.8 // Professional blue
    }
    return { positions: pos, colors: col }
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      frameCounter.current++
      
      // Limit animation updates to every 3rd frame for performance
      if (frameCounter.current % 3 === 0) {
        const time = state.clock.elapsedTime * 0.15 // Reduced speed
        // Simplified rotation
        particlesRef.current.rotation.y = time * 0.05
        particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
        
        // Simplified particle animation - only update every 6th frame
        if (frameCounter.current % 6 === 0) {
          const positions = particlesRef.current.geometry.attributes.position.array
          for (let i = 0; i < particleCount; i += 2) { // Skip every other particle
            positions[i * 3 + 1] += Math.sin(time + i * 0.2) * 0.001
          }
          particlesRef.current.geometry.attributes.position.needsUpdate = true
        }
      }
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08}
        transparent
        opacity={0.4}
        sizeAttenuation
        vertexColors
      />
    </points>
  )
}









// Main Scene Component
function Scene({ mousePosition }) {
  return (
    <PerformanceWrapper>
      <AIMLEnvironment />
      
      <Suspense fallback={null}>
        {/* Professional geometric exhibit */}
         <FrustumCulledObject position={[0, -1, 0]} boundingRadius={6}>
            <group scale={1.8}>
              <MuseumExhibit />
            </group>
          </FrustumCulledObject>
      </Suspense>
      
      <AIDataParticles />
      
      {/* Professional ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshPhysicalMaterial 
          color="#0f172a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
          envMapIntensity={2}
          transparent
          opacity={0.3}
          emissive="#1e293b"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Enhanced contact shadows */}
      <ContactShadows
        position={[0, -3.99, 0]}
        opacity={0.3}
        scale={30}
        blur={2}
        far={8}
        color="#000000"
        resolution={2048}
      />
    </PerformanceWrapper>
  )
}

// Loading Component
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-dark">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

// Main Hero3DScene Component (Performance Optimized)
export default function Hero3DScene({ mousePosition }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        shadows="soft" // Reduced shadow quality
        gl={{ 
          antialias: false, // Disabled for performance
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          logarithmicDepthBuffer: true // Better depth precision with less performance cost
        }}
        dpr={[0.5, 1.5]} // Reduced pixel ratio range
        performance={{ min: 0.2, max: 0.8 }} // More aggressive performance scaling
        frameloop="demand" // Only render when needed
      >
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={60} />
         
         <Suspense fallback={null}>
           <AdaptiveQuality>
          <AdvancedPostProcessing>
            <Scene mousePosition={mousePosition} />
          </AdvancedPostProcessing>
        </AdaptiveQuality>
         </Suspense>
         
         <OrbitControls
           enableZoom={false}
           enablePan={false}
           enableRotate={true}
           autoRotate={true}
           autoRotateSpeed={0.3} // Reduced rotation speed
           maxPolarAngle={Math.PI / 1.8}
           minPolarAngle={Math.PI / 3}
           maxAzimuthAngle={Math.PI / 4}
           minAzimuthAngle={-Math.PI / 4}
           enableDamping={false} // Disabled for performance
         />
         

      </Canvas>
    </div>
  )
}