'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Detailed, useHelper } from '@react-three/drei';
import * as THREE from 'three';

// LOD (Level of Detail) Component for performance optimization
export function OptimizedModel({ position, modelType, baseScale = 1 }) {
  const { camera } = useThree();
  const groupRef = useRef();
  
  // Calculate distance-based LOD
  const lodDistances = [5, 15, 30];
  
  // High detail geometry
  const highDetailGeometry = useMemo(() => {
    switch (modelType) {
      case 'helmet':
        return <dodecahedronGeometry args={[1, 3]} />;
      case 'crystal':
        return <octahedronGeometry args={[1.2, 2]} />;
      case 'tech':
        return <icosahedronGeometry args={[1, 2]} />;
      default:
        return <dodecahedronGeometry args={[1, 3]} />;
    }
  }, [modelType]);
  
  // Medium detail geometry
  const mediumDetailGeometry = useMemo(() => {
    switch (modelType) {
      case 'helmet':
        return <dodecahedronGeometry args={[1, 2]} />;
      case 'crystal':
        return <octahedronGeometry args={[1.2, 1]} />;
      case 'tech':
        return <icosahedronGeometry args={[1, 1]} />;
      default:
        return <dodecahedronGeometry args={[1, 2]} />;
    }
  }, [modelType]);
  
  // Low detail geometry
  const lowDetailGeometry = useMemo(() => {
    switch (modelType) {
      case 'helmet':
        return <dodecahedronGeometry args={[1, 1]} />;
      case 'crystal':
        return <octahedronGeometry args={[1.2, 0]} />;
      case 'tech':
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <dodecahedronGeometry args={[1, 1]} />;
    }
  }, [modelType]);
  
  // Optimized material with reduced complexity for distant objects
  const getOptimizedMaterial = (complexity = 'high') => {
    const baseProps = {
      color: modelType === 'helmet' ? '#1a365d' : modelType === 'crystal' ? '#553c9a' : '#065f46',
      envMapIntensity: complexity === 'high' ? 3 : complexity === 'medium' ? 2 : 1,
    };
    
    if (complexity === 'high') {
      return (
        <meshPhysicalMaterial
          {...baseProps}
          metalness={0.9}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.03}
          transmission={modelType === 'crystal' ? 0.9 : 0.05}
          thickness={modelType === 'crystal' ? 1.2 : 0.8}
          ior={modelType === 'crystal' ? 2.42 : 1.5}
        />
      );
    } else if (complexity === 'medium') {
      return (
        <meshStandardMaterial
          {...baseProps}
          metalness={0.8}
          roughness={0.1}
        />
      );
    } else {
      return (
        <meshLambertMaterial
          color={baseProps.color}
        />
      );
    }
  };
  
  return (
    <Detailed ref={groupRef} distances={lodDistances}>
      {/* High detail - close distance */}
      <mesh position={position} scale={baseScale} castShadow receiveShadow>
        {highDetailGeometry}
        {getOptimizedMaterial('high')}
      </mesh>
      
      {/* Medium detail - medium distance */}
      <mesh position={position} scale={baseScale} castShadow>
        {mediumDetailGeometry}
        {getOptimizedMaterial('medium')}
      </mesh>
      
      {/* Low detail - far distance */}
      <mesh position={position} scale={baseScale}>
        {lowDetailGeometry}
        {getOptimizedMaterial('low')}
      </mesh>
    </Detailed>
  );
}

// Frustum Culling Component
export function FrustumCulledObject({ children, position, boundingRadius = 2 }) {
  const meshRef = useRef();
  const { camera } = useThree();
  const frustum = useMemo(() => new THREE.Frustum(), []);
  const matrix = useMemo(() => new THREE.Matrix4(), []);
  
  useFrame(() => {
    if (meshRef.current) {
      // Update frustum
      matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(matrix);
      
      // Create bounding sphere
      const sphere = new THREE.Sphere(
        new THREE.Vector3(...position),
        boundingRadius
      );
      
      // Show/hide based on frustum culling
      meshRef.current.visible = frustum.intersectsSphere(sphere);
    }
  });
  
  return (
    <group ref={meshRef} position={position}>
      {children}
    </group>
  );
}

// Enhanced Performance Monitor Component
export function PerformanceMonitor({ onPerformanceChange }) {
  const { gl, scene, camera } = useThree();
  const frameTimeHistory = useRef([]);
  const lastFrameTime = useRef(performance.now());
  const performanceLevel = useRef('medium');
  
  useFrame(() => {
    const currentTime = performance.now();
    const frameTime = currentTime - lastFrameTime.current;
    lastFrameTime.current = currentTime;
    
    // Track frame times
    frameTimeHistory.current.push(frameTime);
    if (frameTimeHistory.current.length > 60) {
      frameTimeHistory.current.shift();
    }
    
    // Calculate average FPS every 60 frames
    if (frameTimeHistory.current.length === 60) {
      const avgFrameTime = frameTimeHistory.current.reduce((a, b) => a + b, 0) / 60;
      const fps = 1000 / avgFrameTime;
      
      // Determine performance level
      let newLevel = 'medium';
      if (fps > 45) {
        newLevel = 'high';
      } else if (fps < 25) {
        newLevel = 'low';
      }
      
      // Notify parent component of performance changes
      if (newLevel !== performanceLevel.current) {
        performanceLevel.current = newLevel;
        onPerformanceChange?.(newLevel, fps);
      }
      
      // Log performance metrics occasionally
      if (gl.info.render.frame % 180 === 0) {
        console.log('Performance Stats:', {
          fps: Math.round(fps),
          level: newLevel,
          triangles: gl.info.render.triangles,
          calls: gl.info.render.calls,
          memory: gl.info.memory
        });
      }
    }
  });
  
  return null;
}

// Instanced Mesh for repeated objects
export function InstancedParticles({ count = 50 }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Generate random positions and scales
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.1,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
      });
    }
    return temp;
  }, [count]);
  
  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        dummy.position.set(...particle.position);
        dummy.scale.setScalar(particle.scale);
        dummy.rotation.set(
          particle.rotation[0] + state.clock.elapsedTime * 0.1,
          particle.rotation[1] + state.clock.elapsedTime * 0.15,
          particle.rotation[2] + state.clock.elapsedTime * 0.05
        );
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });
  
  return (
    <instancedMesh ref={meshRef} args={[null, null, count]} castShadow>
      <sphereGeometry args={[0.1, 8, 6]} />
      <meshLambertMaterial color="#4ade80" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Enhanced Performance wrapper component
export function PerformanceWrapper({ children }) {
  const [performanceLevel, setPerformanceLevel] = useState('medium');
  const [deviceCapabilities, setDeviceCapabilities] = useState(null);
  
  // Detect device capabilities on mount
  useEffect(() => {
    const detectCapabilities = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      
      if (!gl) {
        setDeviceCapabilities({ level: 'low', webgl2: false });
        return;
      }
      
      const renderer = gl.getParameter(gl.RENDERER) || '';
      const vendor = gl.getParameter(gl.VENDOR) || '';
      const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      const maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
      
      // Detect device type and capabilities
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isHighEndGPU = renderer.includes('RTX') || renderer.includes('GTX') || renderer.includes('Apple M') || renderer.includes('Adreno 6');
      const hasWebGL2 = !!canvas.getContext('webgl2');
      
      let level = 'medium';
      if (isMobile && !isHighEndGPU) {
        level = 'low';
      } else if (isHighEndGPU && hasWebGL2 && navigator.hardwareConcurrency >= 4) {
        level = 'high';
      }
      
      setDeviceCapabilities({
        level,
        webgl2: hasWebGL2,
        mobile: isMobile,
        maxTextureSize,
        maxVertexAttribs,
        renderer,
        cores: navigator.hardwareConcurrency || 2
      });
      
      setPerformanceLevel(level);
    };
    
    detectCapabilities();
  }, []);
  
  const handlePerformanceChange = (level, fps) => {
    setPerformanceLevel(level);
    
    // Automatically adjust quality based on performance
    if (level === 'low' && fps < 20) {
      console.warn('Low performance detected, reducing quality');
    }
  };
  
  // Don't render complex 3D on very low-end devices
  if (deviceCapabilities?.level === 'low' && deviceCapabilities?.mobile) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Optimizing for your device...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <PerformanceMonitor onPerformanceChange={handlePerformanceChange} />
      {children}
      <InstancedParticles count={30} />
    </>
  );
}

export default PerformanceWrapper;