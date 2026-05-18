'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

// ─── Subtle particle field (NOT balloons) ────────────────────────────────────
function Particles() {
  const ref = useRef();
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.018;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#ffffff" transparent opacity={0.20} sizeAttenuation />
    </points>
  );
}

// Thin horizontal grid lines — like a subtle scanner
function GridLines() {
  const lines = useMemo(() => {
    const verts = [];
    for (let y = -6; y <= 6; y += 1.5) {
      verts.push(-12, y, -3, 12, y, -3);
    }
    return new Float32Array(verts);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.025} />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Suspense fallback={null}>
        <Particles />
        <GridLines />
      </Suspense>
    </>
  );
}

// ─── Glass stat chip ─────────────────────────────────────────────────────────
function StatChip({ value, label }) {
  return (
    <div
      className="flex flex-col items-center px-5 py-3 rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <span className="text-white text-lg font-bold tracking-tight">{value}</span>
      <span className="text-white/40 text-[11px] mt-0.5">{label}</span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function HeroDataProtection() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#08080f' }}
    >
      {/* Ambient color glows — CSS only, no balloons */}
      <div className="pointer-events-none absolute inset-0">
        {/* Warm glow bottom-left */}
        <div
          className="absolute"
          style={{
            width: '55%', height: '55%', bottom: '-8%', left: '-8%',
            background: 'radial-gradient(circle, rgba(255,110,20,0.09) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Cool glow top-right */}
        <div
          className="absolute"
          style={{
            width: '45%', height: '45%', top: '-5%', right: '-5%',
            background: 'radial-gradient(circle, rgba(55,80,220,0.09) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Subtle center glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '40%', height: '40%',
            background: 'radial-gradient(circle, rgba(180,60,200,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Three.js — subtle particles + grid only */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between px-6 pt-28 pb-0 max-w-screen-xl mx-auto w-full"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/35">
            teamoneconnectx@gmail.com
          </p>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold text-green-400"
            style={{
              background: 'rgba(74,222,128,0.07)',
              border: '1px solid rgba(74,222,128,0.18)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            Open to work
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="flex-1 flex items-center max-w-screen-xl mx-auto w-full px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">

            {/* ── Left: name + role + info ── */}
            <div className="order-2 lg:order-1">

              {/* Name */}
              <div className="mb-6 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1
                    className="font-black tracking-tight text-white leading-[0.88]"
                    style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)' }}
                  >
                    Jayesh
                  </h1>
                  <h1
                    className="font-black tracking-tight text-white leading-[0.88]"
                    style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)' }}
                  >
                    Pawar
                  </h1>
                </motion.div>
              </div>

              {/* Role tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mb-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38 mb-3">
                  Intro
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  AI/ML Developer
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-white/50 text-[15px] leading-[1.75] max-w-sm mb-8"
              >
                I build production-ready AI systems, data products, and clean
                digital experiences with strong visual clarity.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <a
                  href="#projects"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-black transition-all hover:brightness-110"
                  style={{ background: '#f59e0b' }}
                >
                  Hire Me
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex items-center gap-4"
              >
                {[
                  { href: 'https://www.linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://twitter.com',     icon: Twitter,   label: 'Twitter' },
                  { href: 'https://www.instagram.com',icon: Instagram, label: 'Instagram' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white/38 text-sm hover:text-white/70 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── Right: photo + stats ── */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.30 }}
                className="flex items-center gap-3"
              >
                <StatChip value="3+" label="Years exp." />
                <StatChip value="20+" label="Projects" />
                <StatChip value="15+" label="Clients" />
              </motion.div>

              {/* Profile photo glass card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="relative"
                style={{
                  borderRadius: '20px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    width: 'clamp(240px, 28vw, 360px)',
                    height: 'clamp(280px, 33vw, 420px)',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Image
                    src="/profile-removebg-preview-img1.png"
                    alt="Jayesh Pawar"
                    fill
                    priority
                    className="object-contain object-top"
                    sizes="360px"
                    style={{
                      filter: 'grayscale(20%) contrast(1.05)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
                    }}
                  />
                  {/* Glass overlay */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background: 'linear-gradient(to top, rgba(8,8,15,0.8) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Role badge bottom-right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-right"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 mb-1">
                  // Machine Learning
                </p>
                <p className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Web Designer
                  <span className="block">& Freelancer</span>
                </p>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center pb-6 gap-2"
        >
          <div className="w-px h-6 bg-white/15" />
          <p className="text-white/20 text-[11px] uppercase tracking-[0.3em]">Scroll</p>
          <div className="w-px h-6 bg-white/15" />
        </motion.div>
      </div>
    </div>
  );
}
