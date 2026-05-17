'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#aiml' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const footerColumns = [
  {
    title: 'Navigation',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#aiml' },
      { name: 'Journey', href: '#experience' },
      { name: 'Skills', href: '#skills' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Projects', href: '#projects' },
      { name: 'Stories', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/jayeshpawar',
        external: true,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/jayeshpawar',
        external: true,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/jayeshpawar',
        external: true,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/jayeshpawar',
        external: true,
      },
    ],
  },
];

const socialIcons = [
  { name: 'GitHub', href: 'https://github.com/jayeshpawar', icon: FaGithub },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jayeshpawar',
    icon: FaLinkedin,
  },
  { name: 'Twitter', href: 'https://twitter.com/jayeshpawar', icon: FaTwitter },
  {
    name: 'Instagram',
    href: 'https://instagram.com/jayeshpawar',
    icon: FaInstagram,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-[#050505] px-4 pb-6 pt-10 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-full overflow-hidden  border border-white/10 bg-black'>
        <div className='relative border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)] px-6 pb-16 pt-6 sm:px-8 lg:px-10'>
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10' />
          <div className='pointer-events-none absolute inset-x-[32%] top-0 h-24 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),transparent_72%)] blur-2xl opacity-70' />
        </div>

        <div className='relative overflow-hidden border-b border-white/8 bg-[linear-gradient(180deg,#060606_0%,#030303_100%)] px-6 py-9 sm:px-8 lg:px-10'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),transparent_64%)]' />
          <div className='pointer-events-none absolute left-1/2 top-0 h-[2px] w-40 -translate-x-1/2 rounded-full bg-white blur-[1px] sm:w-56 lg:w-72' />
          <div className='pointer-events-none absolute left-1/2 top-0 h-36 w-[24rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.7),rgba(255,255,255,0.22)_24%,rgba(255,255,255,0.08)_48%,transparent_78%)] blur-lg sm:h-40 sm:w-[36rem] lg:h-44 lg:w-[52rem]' />
          <div className='pointer-events-none absolute left-1/2 top-0 h-32 w-[92%] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_24%,rgba(255,255,255,0.02)_48%,transparent_78%)] opacity-90 blur-[56px]' />
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-white/16' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/16' />
          <div className='relative z-10 overflow-hidden'>
            <div
              className='break-words text-center text-[2.8rem] font-light leading-[0.82] tracking-[-0.08em] text-transparent sm:text-[4.6rem] md:text-[7rem] lg:text-[11rem] xl:text-[13rem]'
              style={{
                WebkitTextStroke: '1.5px rgba(236, 232, 225, 0.18)',
                textShadow: '0 0 22px rgba(255,255,255,0.045)',
              }}
            >
              // PortFolio //
            </div>
          </div>
        </div>

        <div className='grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='space-y-5'
          >
            <div className='space-y-3 text-sm text-white/58'>
              <div className='flex items-start gap-3'>
                <MapPinIcon className='mt-0.5 h-4 w-4 text-[#f59e0b]' />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className='flex items-start gap-3'>
                <PhoneIcon className='mt-0.5 h-4 w-4 text-[#f59e0b]' />
                <a href='tel:+919408342183' className='hover:text-white'>
                  +91 94083 42183
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <EnvelopeIcon className='mt-0.5 h-4 w-4 text-[#f59e0b]' />
                <a
                  href='mailto:contact@skylineways.site'
                  className='hover:text-white'
                >
                  contact@skylineways.site
                </a>
              </div>
            </div>

            <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-emerald-200'>
              <span className='h-2 w-2 rounded-full bg-emerald-400' />
              All systems normal
            </div>

            <div className='flex items-center gap-3'>
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/68 transition-colors hover:border-white/20 hover:text-white'
                >
                  <social.icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </motion.div>

          {footerColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className='text-sm font-semibold uppercase tracking-[0.2em] text-white/42'>
                {column.title}
              </h4>
              <div className='mt-5 space-y-3'>
                {column.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block text-sm text-white/62 transition-colors hover:text-white'
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className='block text-left text-sm text-white/62 transition-colors hover:text-white'
                    >
                      {link.name}
                    </button>
                  ),
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className='border-t border-white/8 px-6 py-5 sm:px-8 lg:px-10'>
          <div className='flex flex-col gap-4 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between'>
            <p>
              © {new Date().getFullYear()} SkylineWays. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className='inline-flex items-center gap-2 text-white/52 transition-colors hover:text-white'
            >
              <span>Back to top</span>
              <ArrowUpIcon className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
