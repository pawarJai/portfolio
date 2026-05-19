'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    number: '01',
    title: 'QUEST Control Flows',
    type: 'Corporate Website & ERP',
    description:
      'Led development of corporate website and integrated ERP system for QUEST Control Flows, showcasing portfolio for Fortune 500 clients (Indian Navy, OIL, ONGC) and managing internal enterprise resources.',
    stack: 'FastAPI, React, Next.js, PostgreSQL, AWS',
    meta: 'OneConnectX · Nov 2025 - Present',
    accent: 'dark',
  },
  {
    number: '02',
    title: 'NGHR - Recruitment Platform',
    type: 'Job Portal & Real-time Chat',
    description:
      'Comprehensive recruitment platform connecting job seekers, companies, and consultants with CV building, real-time chat, and tiered subscription access (free/paid).',
    stack: 'Next.js, FastAPI, MongoDB',
    meta: 'OneConnectX · Mar 2025 - Aug 2025',
    accent: 'dark',
  },
  {
    number: '03',
    title: 'BizDateUp',
    type: 'Startup Onboarding Platform',
    description:
      'Startup onboarding platform with integrated fundraising, payment processing, and activation workflows. Led team of 7 developers through complete development lifecycle with CI/CD integration.',
    stack: 'FastAPI, Django, ReactJS, NextJS, AWS, Docker',
    meta: 'Script All DNA · Mar 2024 - Mar 2025',
    accent: 'light',
  },
  {
    number: '04',
    title: 'Plant Visibility System',
    type: 'Manufacturing Analytics',
    description:
      'Real-time manufacturing plant monitoring and analytics dashboard for Dr Reddy\'s with KPI dashboards, role-based access control, and production insight visualization.',
    stack: 'Django, React, PostgreSQL, REST API',
    meta: "Dr Reddy's · Aug 2022 - Feb 2024",
    accent: 'light',
  },
  {
    number: '05',
    title: 'Purecane',
    type: 'Product Management System',
    description:
      'Comprehensive product management system with sales dashboards, expense tracking, profit analysis, shop management, and logistics coordination.',
    stack: 'React Vite, MongoDB, Flask',
    meta: 'OneConnectX · Sep 2025 - Jan 2026',
    accent: 'dark',
  },
  {
    number: '06',
    title: 'Crex - Live Cricket Score',
    type: 'Live Sports Analytics',
    description:
      'Live cricket score application delivering real-time match updates, statistics, and mobile-responsive UI for optimal user engagement.',
    stack: 'Next.js, React Vite, MongoDB, Node.js',
    meta: 'OneConnectX · Apr 2025 - Jul 2025',
    accent: 'light',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // Projects
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div
                className="select-none text-[10rem] font-light leading-none text-transparent xl:text-[11rem]"
                style={{ WebkitTextStroke: '1.5px rgba(236, 232, 225, 0.38)' }}
              >
                05
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-6xl font-light leading-none text-transparent lg:hidden"
                style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
              >
                05
              </div>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl">
                    Featured Projects
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                    Production-grade applications spanning recruitment platforms, manufacturing analytics, startup infrastructure, and real-time systems. Built for Fortune 500 clients and innovative startups.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#ece8e1] transition-all duration-300 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b] hover:text-black"
                >
                  View All Projects
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 p-3 lg:p-4">
              <div className="flex flex-col gap-3 lg:min-h-[430px] lg:flex-row">
                {projects.map((project, index) => {
                  const isActive = activeProject === index;
                  const isLight = project.accent === 'light';

                  return (
                    <motion.article
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                        layout: {
                          type: 'spring',
                          stiffness: 90,
                          damping: 18,
                        },
                      }}
                      viewport={{ once: true, margin: '-80px' }}
                      onMouseEnter={() => setActiveProject(index)}
                      onFocus={() => setActiveProject(index)}
                      onClick={() => setActiveProject(index)}
                      className={`group relative overflow-hidden rounded-[24px] border border-white/8 ${
                        isActive ? 'lg:flex-[2.1]' : 'lg:flex-1'
                      } ${
                        isLight
                          ? 'bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.14),_transparent_26%),linear-gradient(135deg,#2b2624_0%,#151312_100%)]'
                          : 'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_26%),linear-gradient(135deg,#1a1b1f_0%,#101012_100%)]'
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 ${
                          isLight
                            ? 'bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.18),_transparent_42%)]'
                            : 'bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_40%)]'
                        }`}
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          scale: isActive ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)]"
                        animate={{ opacity: isActive ? 0.7 : 0.15 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      />

                      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between p-5 lg:min-h-[430px] lg:p-6">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <span className="text-3xl font-black text-[#f59e0b] lg:text-4xl">
                              {project.number}
                            </span>
                            {isActive && (
                              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70">
                                {project.meta}
                              </span>
                            )}
                          </div>

                          <div className={`${isActive ? 'mt-16' : 'mt-10'}`}>
                            <h3 className={`font-bold text-[#ece8e1] transition-all duration-500 ${
                              isActive ? 'max-w-sm text-3xl md:text-4xl' : 'text-xl'
                            }`}>
                              {project.title}
                            </h3>
                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                              {project.type}
                            </p>
                          </div>
                        </div>

                        {isActive ? (
                          <motion.div
                            key={`${project.title}-open`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-md"
                          >
                            <p className="text-sm leading-7 text-white/72">
                              {project.description}
                            </p>
                            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                              <p className="text-sm text-white/45">{project.stack}</p>
                              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ece8e1]">
                                View Details
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                              </span>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key={`${project.title}-closed`}
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm leading-7 text-white/55"
                          >
                            {project.description}
                          </motion.div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
