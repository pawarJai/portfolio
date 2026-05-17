'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [activePanel, setActivePanel] = useState(1);

  const skillPanels = [
    {
      title: 'Programming',
      subtitle: 'Core development base',
      description:
        'Strong backend and scripting foundation for modern products, AI systems, and data workflows.',
      items: ['Python', 'JavaScript', 'SQL'],
      tone: 'dark',
    },
    {
      title: 'API & Frameworks',
      subtitle: 'Production backend systems',
      description:
        'Framework experience for scalable backend delivery, business platforms, and AI-enabled application layers.',
      items: ['Django', 'Flask', 'FastAPI', 'Tornado'],
      tone: 'light',
    },
    {
      title: 'Data Science',
      subtitle: 'Analytics and modeling',
      description:
        'Libraries and workflows for analysis, experimentation, visualization, and machine learning exploration.',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Spark'],
      tone: 'dark',
    },
    {
      title: 'Databases',
      subtitle: 'Storage and architecture',
      description:
        'Data-layer design for relational and document databases with strong deployment and tooling support.',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Git/GitHub'],
      tone: 'dark',
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'Infrastructure and release flow',
      description:
        'Deployment-focused experience that helps move product ideas into production with stable workflows.',
      items: ['Docker', 'AWS', 'Azure', 'Nginx', 'CI/CD'],
      tone: 'light',
    },
    {
      title: 'Frontend',
      subtitle: 'Interface and motion layer',
      description:
        'Modern frontend stack for polished UI, smooth interactions, and premium web experiences.',
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
      tone: 'dark',
    },
  ];

  return (
    <section id="skills" className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // Skills
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div
              className="select-none text-[10rem] font-light leading-none text-transparent xl:text-[13rem]"
              style={{ WebkitTextStroke: '1.5px rgba(236, 232, 225, 0.38)' }}
            >
              04
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 max-w-3xl">
              <div
                className="mb-4 text-6xl font-light leading-none text-transparent lg:hidden"
                style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
              >
                04
              </div>
              <h2 className="text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl">
                Technical Skills
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                A pillar-style overview of the stack I use across AI, backend,
                frontend, cloud, and data-heavy product systems.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black px-4 py-6 sm:px-5 lg:px-6"
              onMouseLeave={() => setActivePanel(1)}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.08),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent_28%)]" />
              <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-24 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.22),_transparent_58%)] blur-xl" />

              <div className="relative z-10 flex min-h-[430px] flex-col gap-3 lg:min-h-[460px] lg:flex-row">
                {skillPanels.map((panel, index) => {
                  const isActive = activePanel === index;
                  const isLight = panel.tone === 'light';

                  return (
                    <motion.button
                      key={panel.title}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setActivePanel(index)}
                      onFocus={() => setActivePanel(index)}
                      onClick={() => setActivePanel(index)}
                      className={`group relative flex min-h-[110px] overflow-hidden rounded-[22px] border text-left transition-[flex-grow,flex-basis,background-color,border-color,opacity] duration-[850ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] lg:min-h-full ${
                        isActive ? 'lg:flex-[2.8]' : 'lg:flex-1'
                      } ${
                        isLight
                          ? 'border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.15),_transparent_28%),linear-gradient(180deg,#3a342f_0%,#181616_100%)]'
                          : 'border-white/10 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.1),_transparent_24%),linear-gradient(180deg,#0f1015_0%,#09090c_100%)]'
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.05),transparent)]"
                        animate={{ opacity: isActive ? 0.58 : 0.26 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      />

                      <motion.div
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`relative z-10 flex h-full w-full flex-col justify-between p-5 lg:p-6 ${isActive ? 'items-start' : 'items-center lg:items-center'}`}
                      >
                        <div className={`${isActive ? 'w-full' : 'flex h-full items-start justify-center'}`}>
                          {isActive ? (
                            <motion.div
                              key={`${panel.title}-open`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
                              className="w-full"
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                {panel.subtitle}
                              </p>
                              <h3 className="mt-4 text-2xl font-bold text-[#ece8e1]">
                                {panel.title}
                              </h3>
                              <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
                                {panel.description}
                              </p>
                              <div className="mt-6 flex flex-wrap gap-2">
                                {panel.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/55"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={`${panel.title}-closed`}
                              initial={{ opacity: 0.7 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.25, ease: 'linear' }}
                              className="flex h-full flex-col items-center justify-between"
                            >
                              <span className="[writing-mode:vertical-rl] rotate-180 pt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#ece8e1]">
                                {panel.title}
                              </span>
                            </motion.div>
                          )}
                        </div>

                        <div className={`mt-6 flex w-full items-center ${isActive ? 'justify-between' : 'justify-center lg:justify-center'}`}>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {isActive && (
                            <span className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f59e0b]">
                              Active
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
