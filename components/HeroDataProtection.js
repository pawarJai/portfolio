'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let initCursor = false;

    const onMouseMove = (e) => {
      if (!initCursor) {
        cursor.style.opacity = '1';
        initCursor = true;
      }
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseOut = () => {
      cursor.style.opacity = '0';
      initCursor = false;
    };

    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseover', () => cursor.classList.add('cursor-grow'));
      el.addEventListener('mouseout', () => cursor.classList.remove('cursor-grow'));
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      {/* ─── Custom cursor ─── */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          opacity: 0,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#f59e0b',
          transition: 'transform 300ms ease, opacity 300ms ease',
          transform: 'translate(-50%, -50%) scale(0.35)',
          zIndex: 9999,
        }}
      />

      {/* ─── Hero section ─── */}
      <section
        id="home"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 600,
          background: '#0a0a0a',
          borderBottomRightRadius: 'clamp(40px, 15vw, 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
        }}
      >
        {/* Video wrap — clips to the curved border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            borderBottomRightRadius: 'clamp(40px, 15vw, 200px)',
          }}
        >
          <video
            autoPlay
            playsInline
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'rotate(180deg)',
              filter: 'brightness(0.55) saturate(1.2)',
            }}
          >
            {/* Free abstract waves video — no attribution required */}
            <source
              src="https://assets.codepen.io/319606/tactus-waves-hero-sm.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Bottom gradient overlay — fade to section background */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)',
            borderBottomRightRadius: 'clamp(40px, 15vw, 200px)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ─── Content ─── */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: 'clamp(1rem, 4vw, 1.5rem)',
            marginBottom: 'clamp(2rem, 8vw, 4rem)',
            width: '100%',
            maxWidth: '90vw',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(6px, 2vw, 8px)',
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.30)',
              borderRadius: 999,
              padding: 'clamp(4px, 2vw, 6px) clamp(12px, 4vw, 16px)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4ade80',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
                flexShrink: 0,
              }}
            />
            <span style={{ color: '#fbbf24', fontSize: 'clamp(0.65rem, 1.5vw, 0.7rem)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Available for Freelance
            </span>
          </motion.div>

          {/* Main title — mix-blend-mode: difference makes it look stunning over the video */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 8rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              mixBlendMode: 'difference',
              position: 'relative',
              zIndex: 2,
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              margin: '0 auto clamp(1rem, 3vw, 1.5rem)',
            }}
          >
            Jayesh Pawar
            <br />
            <span style={{ color: '#f59e0b' }}>AI / ML</span> Developer
          </motion.h1>

          {/* Sub tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
              maxWidth: '90vw',
              margin: '0 auto clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: 1.7,
            }}
          >
            I build production-ready AI systems, data pipelines, and clean
            digital experiences — available for freelance worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              display: 'flex',
              gap: 'clamp(8px, 2vw, 12px)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            }}
          >
            <a
              href="#projects"
              style={{
                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 32px)',
                background: '#f59e0b',
                color: '#000',
                fontWeight: 700,
                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'filter 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              style={{
                padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 32px)',
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.20)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                whiteSpace: 'nowrap',
              }}
            >
              HIRE ME
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: 'clamp(16px, 4vw, 24px)',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              { href: 'https://www.linkedin.com/in/pawarjay/', label: 'linkedin' },
              { href: 'https://www.instagram.com/pawarjay468/',      label: 'twitter' },
              { href: 'https://x.com/pawarjay1516',label: 'instagram' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.38)',
                  fontSize: 'clamp(0.65rem, 1.5vw, 0.78rem)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(16px, 4vw, 28px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(4px, 1vw, 6px)',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Concave corner bridge ─── */}
      {/* This mimics the :before/:after trick from the reference CSS */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(40px, 15vw, 200px)',
          background: '#000',
          marginTop: 0,
        }}
      >
        {/* Black square that fills the corner gap */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'clamp(40px, 15vw, 200px)',
            height: 'clamp(40px, 15vw, 200px)',
            background: '#0a0a0a',
          }}
        />
        {/* White (page bg) rounded overlay that carves the concave curve */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'clamp(40px, 15vw, 200px)',
            height: 'clamp(40px, 15vw, 200px)',
            background: '#000',
            borderTopLeftRadius: 'clamp(40px, 15vw, 200px)',
          }}
        />
      </div>

      {/* ─── Global style for custom cursor + pulse ─── */}
      <style>{`
        .cursor-grow {
          transform: translate(-50%, -50%) scale(1.4) !important;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
