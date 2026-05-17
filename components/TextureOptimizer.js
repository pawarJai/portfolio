'use client';

import { useEffect, useMemo } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Texture compression and optimization
export function useOptimizedTexture(url, options = {}) {
  const {
    format = THREE.RGBAFormat,
    type = THREE.UnsignedByteType,
    generateMipmaps = true,
    flipY = true,
    wrapS = THREE.RepeatWrapping,
    wrapT = THREE.RepeatWrapping,
    minFilter = THREE.LinearMipmapLinearFilter,
    magFilter = THREE.LinearFilter,
    maxSize = 1024
  } = options;

  const texture = useLoader(THREE.TextureLoader, url);
  
  useEffect(() => {
    if (texture) {
      // Optimize texture settings
      texture.format = format;
      texture.type = type;
      texture.generateMipmaps = generateMipmaps;
      texture.flipY = flipY;
      texture.wrapS = wrapS;
      texture.wrapT = wrapT;
      texture.minFilter = minFilter;
      texture.magFilter = magFilter;
      
      // Resize if too large
      if (texture.image && (texture.image.width > maxSize || texture.image.height > maxSize)) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const scale = Math.min(maxSize / texture.image.width, maxSize / texture.image.height);
        canvas.width = texture.image.width * scale;
        canvas.height = texture.image.height * scale;
        
        ctx.drawImage(texture.image, 0, 0, canvas.width, canvas.height);
        texture.image = canvas;
      }
      
      texture.needsUpdate = true;
    }
  }, [texture, format, type, generateMipmaps, flipY, wrapS, wrapT, minFilter, magFilter, maxSize]);
  
  return texture;
}

// Memory management component
export function MemoryManager() {
  const { gl } = useThree();
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Force garbage collection of unused textures and geometries
      if (gl.info.memory) {
        const memoryInfo = gl.info.memory;
        
        // Log memory usage
        console.log('GPU Memory Usage:', {
          geometries: memoryInfo.geometries,
          textures: memoryInfo.textures,
          programs: gl.info.programs?.length || 0
        });
        
        // Clean up if memory usage is high
        if (memoryInfo.textures > 50 || memoryInfo.geometries > 100) {
          gl.dispose();
        }
      }
    }, 10000); // Check every 10 seconds
    
    return () => clearInterval(interval);
  }, [gl]);
  
  return null;
}

// Adaptive quality based on performance
export function AdaptiveQuality({ children }) {
  const { gl } = useThree();
  
  useEffect(() => {
    // Set pixel ratio based on device capabilities
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    gl.setPixelRatio(pixelRatio);
    
    // Enable hardware acceleration optimizations
    gl.powerPreference = 'high-performance';
    
    // Set appropriate tone mapping
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2;
    
    // Enable shadow map optimizations
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    gl.shadowMap.autoUpdate = false; // Manual updates for better performance
    
    // Set output color space (updated for newer Three.js versions)
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);
  
  return (
    <>
      <MemoryManager />
      {children}
    </>
  );
}

// Optimized material factory
export function createOptimizedMaterial(type, props = {}) {
  const baseProps = {
    transparent: false,
    alphaTest: 0.1,
    side: THREE.FrontSide,
    ...props
  };
  
  switch (type) {
    case 'standard':
      return new THREE.MeshStandardMaterial(baseProps);
    case 'physical':
      return new THREE.MeshPhysicalMaterial(baseProps);
    case 'lambert':
      return new THREE.MeshLambertMaterial(baseProps);
    case 'basic':
      return new THREE.MeshBasicMaterial(baseProps);
    default:
      return new THREE.MeshStandardMaterial(baseProps);
  }
}

// Geometry pooling for reuse
class GeometryPool {
  constructor() {
    this.pool = new Map();
  }
  
  getGeometry(type, args) {
    const key = `${type}_${JSON.stringify(args)}`;
    
    if (!this.pool.has(key)) {
      let geometry;
      switch (type) {
        case 'box':
          geometry = new THREE.BoxGeometry(...args);
          break;
        case 'sphere':
          geometry = new THREE.SphereGeometry(...args);
          break;
        case 'cylinder':
          geometry = new THREE.CylinderGeometry(...args);
          break;
        case 'plane':
          geometry = new THREE.PlaneGeometry(...args);
          break;
        default:
          geometry = new THREE.BoxGeometry(...args);
      }
      this.pool.set(key, geometry);
    }
    
    return this.pool.get(key);
  }
  
  dispose() {
    this.pool.forEach(geometry => geometry.dispose());
    this.pool.clear();
  }
}

export const geometryPool = new GeometryPool();

export default AdaptiveQuality;