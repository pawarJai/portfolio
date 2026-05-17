'use client';

import { motion } from 'framer-motion';
const serviceCards = [
  {
    title: 'AI Product Design',
    subtitle: 'User-first system thinking',
    description:
      'Design AI interfaces, product flows, and decision layers that feel intuitive while staying technically realistic.',
    stack: 'UX Systems, Product Thinking, Dashboard UX',
    tone: 'dark',
  },
  {
    title: 'ML Engineering',
    subtitle: 'Model to production',
    description:
      'Build and ship machine learning pipelines, APIs, and production-ready systems with measurable outcomes.',
    stack: 'Python, FastAPI, TensorFlow, MLOps',
    tone: 'dark',
  },
  {
    title: 'Data & Insights',
    subtitle: 'Business-ready analytics',
    description:
      'Transform raw datasets into clean analytics workflows, executive dashboards, and clear decision tools.',
    stack: 'Pandas, SQL, Plotly, BI Systems',
    tone: 'light',
  },
  {
    title: 'Automation Systems',
    subtitle: 'AI workflow orchestration',
    description:
      'Create LLM-powered automations, agent workflows, and internal tools that save time and improve operations.',
    stack: 'LangChain, OpenAI, Retrieval, Automation',
    tone: 'light',
  },
];

export default function AIMLSection() {
  return (
    <section id="aiml" className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-4 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // Services
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
              02
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
                02
              </div>
              <h2 className="text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl">
                Services & Solutions
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                A curated set of AI, data, and product services shaped with the
                same premium visual system used across the site.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {serviceCards.map((card, index) => {
                const isLight = card.tone === 'light';

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    viewport={{ once: true, margin: '-80px' }}
                    whileHover={{ y: -8 }}
                    className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-500 sm:p-8 ${
                      isLight
                        ? 'border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_30%),linear-gradient(135deg,#b7a396_0%,#5b514d_100%)] text-white'
                        : 'border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(135deg,#3f4148_0%,#191a20_100%)] text-white'
                    }`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/55">
                          {card.subtitle}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-md border border-white/12 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                        Very Good
                      </span>
                    </div>

                    <p className="relative z-10 mt-6 max-w-md text-[15px] leading-7 text-white/72 sm:mt-8 sm:text-base sm:leading-8">
                      {card.description}
                    </p>

                    <div className="relative z-10 mt-6 border-t border-white/10 pt-5 sm:mt-8">
                      <p className="break-words text-sm leading-6 text-white/45">
                        {card.stack}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
