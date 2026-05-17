'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const workExperience = [
  {
    label: 'Step-01',
    number: '1',
    title: 'Plan',
    meta: 'Script All DNA Technology · Jul 2022 - Mar 2025',
    description:
      "Designed and shipped full-stack systems for manufacturing visibility, onboarding, and real-time tracking across production workflows.",
    stack: 'Python, Django, React, PostgreSQL, AWS',
  },
  {
    label: 'Step-02',
    number: '2',
    title: 'Automate',
    meta: 'Ijona · Mar 2021 - May 2022',
    description:
      'Built backend APIs, booking and payment logic, and internal automation tools that simplified society management workflows.',
    stack: 'Python, Django, Flask, REST API, PostgreSQL',
  },
  {
    label: 'Step-03',
    number: '3',
    title: 'Execute',
    meta: '3iwebexpert · Jan 2020 - Feb 2021',
    description:
      'Created e-commerce interfaces, handled frontend delivery, and supported data-processing workflows for product and customer systems.',
    stack: 'JavaScript, HTML/CSS, Python, UI Delivery',
  },
];

const expertiseCards = [
  {
    label: 'Core-01',
    number: '1',
    title: 'Backend & APIs',
    meta: 'Production engineering stack',
    description:
      'Build scalable backend systems and APIs for AI products, automation flows, and business applications.',
    stack: 'Python, Django, Flask, FastAPI, Tornado',
  },
  {
    label: 'Core-02',
    number: '2',
    title: 'AI & Data',
    meta: 'Applied intelligence workflow',
    description:
      'Work across analytics, data pipelines, model integration, and AI-enabled product experiences.',
    stack: 'Pandas, NumPy, SQL, ML Workflows, Reporting',
  },
  {
    label: 'Core-03',
    number: '3',
    title: 'Frontend & Cloud',
    meta: 'Interface to deployment',
    description:
      'Connect strong product UI with deployment, DevOps, and delivery pipelines for production-ready systems.',
    stack: 'React, Next.js, Node.js, Docker, AWS, Azure',
  },
];

const cardBase =
  'group relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.08),_transparent_26%),linear-gradient(135deg,#1b1b1d_0%,#101011_100%)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-500';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const activeCards = activeTab === 'journey' ? workExperience : expertiseCards;

  return (
    <section id="experience" className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // Journey
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
              03
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div
                  className="mb-4 text-6xl font-light leading-none text-transparent lg:hidden"
                  style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
                >
                  03
                </div>
                <h2 className="text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl">
                  Professional Journey
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                  A switchable view of how I plan, automate, and execute modern
                  digital systems across product, backend, and AI delivery.
                </p>
              </div>

              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('journey')}
                  className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeTab === 'journey'
                      ? 'bg-[#f59e0b] text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Journey
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('expertise')}
                  className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeTab === 'expertise'
                      ? 'bg-[#f59e0b] text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Expertise
                </button>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {activeCards.map((card, index) => (
                <motion.div
                  key={`${activeTab}-${card.title}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  whileHover={{ y: -8 }}
                  className={cardBase}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 min-h-[240px]">
                    <p className="text-sm font-medium text-white/56">{card.label}</p>
                    <div className="mt-3 text-[8rem] font-black leading-none tracking-[-0.08em] text-white/10">
                      {card.number}
                    </div>
                    <h3 className="-mt-8 text-3xl font-bold text-[#ece8e1]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/42">
                      {card.meta}
                    </p>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
                      {card.description}
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-sm text-white/45">{card.stack}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
