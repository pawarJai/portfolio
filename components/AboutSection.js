'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    title: 'Custom AI Strategy and Messaging',
    description:
      'Define your AI roadmap, messaging system, and product direction with a clear strategy that supports real delivery.',
    items: ['AI roadmap', 'Messaging architecture', 'Technical planning'],
  },
  {
    title: 'Machine Learning Product Design',
    description:
      'Shape ML products that feel simple for users while keeping the underlying system practical, scalable, and measurable.',
    items: ['User flows', 'Prediction UX', 'Model-to-product alignment'],
  },
  {
    title: 'LLM Workflows and Automation Systems',
    description:
      'Build powerful automation pipelines using LLMs, retrieval systems, prompt orchestration, and process design.',
    items: ['Prompt systems', 'Agent workflows', 'Business automation'],
  },
  {
    title: 'Data Visualization and Decision Dashboards',
    description:
      'Turn raw data into executive-ready dashboards and product interfaces that help teams make faster decisions.',
    items: ['Dashboard design', 'Analytics UX', 'Insight presentation'],
  },
  {
    title: 'Brand Systems for Technical Products',
    description:
      'Create a strong visual language for AI products so the brand feels polished, modern, and trustworthy.',
    items: ['Visual identity', 'UI direction', 'Design consistency'],
  },
  {
    title: 'Motion Design for Product Storytelling',
    description:
      'Use subtle motion and interaction to explain complex systems with clarity and create a more premium experience.',
    items: ['Micro-interactions', 'Motion systems', 'Launch storytelling'],
  },
];

const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // About
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
              01
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 text-6xl font-light leading-none text-transparent lg:hidden"
                style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
              >
                01
              </div>
              <h2 className="text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl">
                AI/ML Services
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                I design and build AI-first product systems with a clear visual
                language, thoughtful strategy, and production-ready execution for
                modern brands and technical teams.
              </p>
            </div>

            <div className="border-t border-white/8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="border-b border-white/8 transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-[#ece8e1] sm:text-base">
                        {service.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-semibold tracking-[0.2em] text-white/32">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg text-[#f59e0b]">
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-10">
                          <p className="max-w-2xl text-sm leading-7 text-white/58 sm:text-[15px]">
                            {service.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/55"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/8 pt-8">
              <div>
                <div className="text-3xl font-black text-[#ece8e1]">5+</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#ece8e1]">20+</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">
                  Technologies
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#ece8e1]">10+</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">
                  Projects Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
