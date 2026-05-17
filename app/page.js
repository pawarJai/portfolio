'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import AIMLSection from '../components/AIMLSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HeroAmbient3D from '../components/HeroAmbient3D';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-black'>
      <Header />

      <section
        id='home'
        className='relative overflow-hidden bg-[#ece8e1] text-[#111111]'
      >
        <div className='absolute inset-0 opacity-25'>
          <HeroAmbient3D />
        </div>

        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_42%)]' />

        <div className='relative z-10 mx-auto min-h-screen max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 lg:px-2 lg:pt-24'>
          <div className='relative min-h-[720px] overflow-hidden'>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='absolute left-0 top-4 z-30 max-w-[260px] lg:top-0'
            >
              <p className='break-all text-[10px] font-semibold uppercase tracking-[0.3em] text-black/70 sm:text-[11px]'>
                pawarjay1516@gmail.com
              </p>
            </motion.div>

            <div className='pointer-events-none absolute inset-x-0 top-[8%] z-20 hidden lg:block'>
              <div className='select-none text-left font-black tracking-[-0.09em] text-[#111111]'>
                <div className='text-[7rem] leading-[0.9] xl:text-[8rem]'>
                  Jay
                </div>
                <div className='text-[7rem] leading-[0.9] xl:text-[8rem]'>
                  Pawar
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className='absolute bottom-10 left-0 z-40 hidden max-w-[280px] sm:max-w-[320px] lg:bottom-10 lg:block'
            >
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-black/45'>
                Intro
              </p>
              <h1 className='mt-4 text-[2.4rem] font-black leading-[0.92] text-[#111111] sm:text-[4.2rem]'>
                AI/ML Developer
              </h1>
              <p className='mt-5 max-w-[290px] text-[15px] leading-8 text-black/78 sm:text-base'>
                I build production-ready AI systems, data products, and clean
                digital experiences with strong visual clarity.
              </p>

              <div className='mt-6 space-y-2 text-sm text-black/72'>
                <a
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2 transition-colors hover:text-black'
                >
                  <Linkedin className='h-4 w-4' />
                  <span>LinkedIn</span>
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2 transition-colors hover:text-black'
                >
                  <Twitter className='h-4 w-4' />
                  <span>Twitter</span>
                </a>
                <a
                  href='https://www.instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2 transition-colors hover:text-black'
                >
                  <Instagram className='h-4 w-4' />
                  <span>Instagram</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
              className='absolute right-0 top-[1%] z-10 hidden aspect-[4/4.5] w-[360px] overflow-hidden lg:block xl:right-[1%] xl:top-[1%] xl:w-[410px]'
            >
              <Image
                src='/profile-removebg-preview-img1.png'
                alt='Jayesh portrait'
                fill
                priority
                className='object-contain object-top grayscale scale-[1.05] translate-x-[2%] -translate-y-[1%] mix-blend-multiply'
                sizes='(max-width: 1280px) 360px, 410px'
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
                  maskImage:
                    'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
                }}
              />
            </motion.div>

            <div className='absolute bottom-[18%] left-[46%] z-20 hidden h-[160px] w-[64px] -rotate-[18deg] bg-[#f59e0b] lg:block xl:left-[47%]' />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className='absolute bottom-10 right-0 z-30 hidden max-w-[280px] text-right lg:block lg:max-w-[320px]'
            >
              <p className='text-[11px] font-semibold uppercase tracking-[0.26em] text-black/55'>
                // Machine Learning
              </p>
              <h2 className='mt-3 text-4xl font-black leading-[1.02] text-[#111111] lg:text-5xl'>
                Web Designer
                <span className='block'>Art Director</span>
              </h2>
            </motion.div>

            <div className='absolute right-6 top-40 hidden lg:block'>
              <div className='h-7 w-0.5 bg-black/70' />
              <div className='h-0.5 w-5 bg-black/70' />
            </div>

            <div className='absolute bottom-20 right-[8%] hidden lg:block'>
              <div className='h-10 w-16 rounded-full border-2 border-[#f59e0b] border-l-transparent border-r-transparent' />
            </div>

            <div className='relative z-20 flex min-h-[640px] items-end lg:hidden'>
              <div className='w-full pb-10'>
                <div className='mx-auto mb-7 aspect-[4/5] w-[240px] sm:w-[320px]'>
                  <div className='relative h-full w-full'>
                    <Image
                      src='/profile-removebg-preview.png'
                      alt='Jayesh portrait'
                      fill
                      priority
                      className='object-contain object-bottom grayscale'
                      sizes='320px'
                    />
                  </div>
                </div>
                <p className='text-xs font-semibold uppercase tracking-[0.28em] text-black/45'>
                  Intro
                </p>
                <h1 className='mt-3 text-[2.2rem] font-black leading-[0.92] tracking-[-0.05em] text-[#111111] sm:text-[3.2rem]'>
                  AI/ML Developer
                </h1>
                <p className='mt-4 max-w-md text-sm leading-7 text-black/72 sm:text-base'>
                  I build production-ready AI systems, data products, and clean
                  digital experiences with strong visual clarity.
                </p>

                <div className='mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/72'>
                  <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 transition-colors hover:text-black'
                  >
                    <Linkedin className='h-4 w-4' />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 transition-colors hover:text-black'
                  >
                    <Twitter className='h-4 w-4' />
                    <span>Twitter</span>
                  </a>
                  <a
                    href='https://www.instagram.com'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 transition-colors hover:text-black'
                  >
                    <Instagram className='h-4 w-4' />
                    <span>Instagram</span>
                  </a>
                </div>

                <div className='mt-8 border-t border-black/10 pt-6'>
                  <h2 className='text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[#111111] sm:text-5xl'>
                    Jayesh
                    <span className='block'>Pawar</span>
                  </h2>
                  <p className='mt-4 max-w-md text-sm leading-7 text-black/70 sm:text-base'>
                    AI/ML developer focused on strong product visuals and
                    production-ready implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections with Scroll Animations */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <AIMLSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <SkillsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <ProjectsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <ContactSection />
      </motion.div>

      <Footer />
    </div>
  );
}
