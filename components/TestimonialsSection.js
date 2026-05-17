'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    headline: 'AI Recommendation System',
    highlight: '40% increase in user engagement',
    text: 'Jayesh delivered an exceptional AI-powered recommendation system that increased our user engagement by 40%. His expertise in machine learning and attention to detail made all the difference.',
    project: 'AI Recommendation Engine',
    results: '40% increase in user engagement',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Director',
    company: 'Analytics Pro',
    headline: 'Real-Time Data Pipeline',
    highlight: '95% reduction in processing time',
    text: 'Working with Jayesh was a game-changer for our data analytics pipeline. He implemented a real-time processing system that reduced our analysis time from hours to minutes.',
    project: 'Real-time Data Pipeline',
    results: '95% reduction in processing time',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'FinTech Solutions',
    headline: 'Document Processing AI',
    highlight: '80% automation of manual tasks',
    text: "Jayesh's computer vision solution for document processing automated 80% of our manual work. Professional, reliable, and delivered ahead of schedule.",
    project: 'Document Processing AI',
    results: '80% automation of manual tasks',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'E-commerce Plus',
    headline: 'Predictive Analytics Model',
    highlight: '25% cost reduction',
    text: 'The predictive analytics model Jayesh built helped us optimize inventory management and reduce costs by 25%. Excellent communication throughout the project.',
    project: 'Predictive Analytics Model',
    results: '25% cost reduction',
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id='testimonials'
      className='bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28'
    >
      <div className='mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mb-10 border-b border-white/8 pb-6'
        >
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]'>
            // Success Stories
          </p>
        </motion.div>

        <div className='grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='hidden lg:block'
          >
            <div
              className='select-none text-[10rem] font-light leading-none text-transparent xl:text-[11rem]'
              style={{ WebkitTextStroke: '1.5px rgba(236, 232, 225, 0.38)' }}
            >
              06
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div
              className='mb-4 text-6xl font-light leading-none text-transparent lg:hidden'
              style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
            >
              06
            </div>
            <div className='mb-8 max-w-3xl'>
              <h2 className='text-4xl font-black leading-tight text-[#ece8e1] md:text-5xl'>
                Client Success Stories
              </h2>
              <p className='mt-4 max-w-2xl text-base leading-8 text-white/58 md:text-lg'>
                Real outcomes from product, AI, and system delivery work shaped
                for business clarity and measurable impact.
              </p>
            </div>

            <div className='relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_28%),linear-gradient(135deg,#151515_0%,#090909_100%)] p-4 sm:p-6 lg:p-8'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08),_transparent_36%)] opacity-80' />

              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className='relative overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#1a1a1a_0%,#0c0c0c_100%)] pb-6 lg:min-h-[620px] lg:pb-0'
                >
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.08),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]' />

                  <div className='relative z-10 flex items-start justify-between gap-3 px-5 pt-5 lg:hidden'>
                    <div className='text-2xl font-black text-[#ece8e1]'>
                      {String(currentTestimonial + 1).padStart(2, '0')}
                    </div>
                    <div className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70'>
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>

                  <div className='absolute left-5 top-5 hidden text-3xl font-black text-[#ece8e1] lg:block'>
                    {String(currentTestimonial + 1).padStart(2, '0')}
                  </div>

                  <div className='absolute right-5 top-5 hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70 lg:block'>
                    {testimonials[currentTestimonial].company}
                  </div>

                  <div className='absolute left-0 top-0 hidden h-full w-full lg:block lg:w-[52%]'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_40%)]' />
                    <div className='absolute bottom-0 left-0 right-0 top-[14%] flex items-end justify-center'>
                      <div className='relative h-[78%] w-[82%] rounded-[30px] bg-[linear-gradient(180deg,#2f2f2f_0%,#151515_100%)] shadow-[inset_0_0_120px_rgba(255,255,255,0.06)]'>
                        <div className='absolute inset-x-[18%] top-[9%] h-[32%] rounded-[999px] bg-[linear-gradient(180deg,#5a5a5a_0%,#2d2d2d_100%)]' />
                        <div className='absolute inset-x-[10%] bottom-0 h-[58%] rounded-t-[180px] bg-[linear-gradient(180deg,#3d3d3d_0%,#1f1f1f_100%)]' />
                      </div>
                    </div>
                  </div>

                  <div className='relative z-10 mx-4 mt-5 rounded-[26px] border-4 border-[#f59e0b] p-5 sm:mx-6 sm:border-[6px] sm:p-8 lg:absolute lg:bottom-[15%] lg:left-[28%] lg:right-[6%] lg:top-[24%] lg:mx-0 lg:mt-0 lg:rounded-none lg:p-9'>
                    <div className='absolute right-4 top-4 h-5 w-5 rounded-full bg-[#f59e0b]' />
                    <div className='flex flex-col justify-end lg:h-full'>
                      <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55'>
                        {testimonials[currentTestimonial].project}
                      </p>
                      <h3 className='mt-3 max-w-[550px] text-xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#ece8e1] sm:text-2xl lg:text-[2rem]'>
                        {testimonials[currentTestimonial].headline}
                        <span className='block text-[#f59e0b]'>
                          {testimonials[currentTestimonial].highlight}
                        </span>
                      </h3>
                      <p className='mt-4 max-w-[420px] text-sm leading-7 text-white/68 sm:text-[15px]'>
                        {testimonials[currentTestimonial].text}
                      </p>
                    </div>
                  </div>

                  <div className='pointer-events-auto absolute bottom-5 left-5 z-30 hidden rounded-[24px] bg-white/14 px-5 py-4 backdrop-blur-md lg:block'>
                    <div className='flex items-center gap-3'>
                      <ArrowTopRightOnSquareIcon className='h-5 w-5 text-white' />
                      <div>
                        <p className='text-2xl font-bold text-[#ece8e1]'>
                          Visit Site
                        </p>
                        <p className='text-[11px] uppercase tracking-[0.18em] text-white/55'>
                          {testimonials[currentTestimonial].name} ·{' '}
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pointer-events-auto absolute bottom-5 right-5 z-30 hidden flex-col gap-3 lg:flex'>
                    <button
                      type='button'
                      onClick={prevTestimonial}
                      aria-label='Previous testimonial'
                      className='flex h-16 w-16 items-center justify-center rounded-[22px] bg-white/14 text-white backdrop-blur-md transition-colors hover:bg-white/20'
                    >
                      <ChevronLeftIcon className='h-6 w-6' />
                    </button>
                    <button
                      type='button'
                      onClick={nextTestimonial}
                      aria-label='Next testimonial'
                      className='flex h-16 w-16 items-center justify-center rounded-[22px] bg-white/14 text-white backdrop-blur-md transition-colors hover:bg-white/20'
                    >
                      <ChevronRightIcon className='h-6 w-6' />
                    </button>
                  </div>

                  <div className='relative z-10 mx-4 mt-4 rounded-[24px] bg-white/14 px-5 py-4 backdrop-blur-md sm:mx-6 lg:hidden'>
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                      <div className='flex items-center gap-3'>
                        <ArrowTopRightOnSquareIcon className='h-5 w-5 text-white' />
                        <div>
                          <p className='text-xl font-bold text-[#ece8e1] sm:text-2xl'>
                            Visit Site
                          </p>
                          <p className='text-[11px] uppercase tracking-[0.18em] text-white/55'>
                            {testimonials[currentTestimonial].name} ·{' '}
                            {testimonials[currentTestimonial].role}
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center gap-3'>
                        <button
                          type='button'
                          onClick={prevTestimonial}
                          aria-label='Previous testimonial'
                          className='flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/14 text-white backdrop-blur-md transition-colors hover:bg-white/20'
                        >
                          <ChevronLeftIcon className='h-5 w-5' />
                        </button>
                        <button
                          type='button'
                          onClick={nextTestimonial}
                          aria-label='Next testimonial'
                          className='flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/14 text-white backdrop-blur-md transition-colors hover:bg-white/20'
                        >
                          <ChevronRightIcon className='h-5 w-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
