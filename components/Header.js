'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home', number: '00' },
  { name: 'About', href: '#about', number: '01' },
  { name: 'Services', href: '#aiml', number: '02' },
  { name: 'Projects', href: '#projects', number: '05' },
  { name: 'Contact', href: '#contact', number: '07' },
];

const cvLinks = [
  {
    label: 'Download PDF',
    href: 'https://global-asset-hub.s3.ap-south-1.amazonaws.com/Jayesh_Pawar-01.pdf',
  },
  {
    label: 'Download DOCX',
    href: 'https://global-asset-hub.s3.ap-south-1.amazonaws.com/Jayesh_Pawar-01.docx',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'aiml', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleSectionChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsDownloadMenuOpen(false);
  };

  const navTextClass = isScrolled ? 'text-white' : 'text-neutral-900';
  const mutedTextClass = isScrolled
    ? 'text-white/70 hover:text-white'
    : 'text-neutral-700 hover:text-neutral-950';

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-[#0e0e0e]/88 backdrop-blur-xl'
            : 'border-black/5 bg-[#efeae3]/90 backdrop-blur-md'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className='mx-auto flex h-20 max-w-7xl items-center justify-between overflow-visible px-6 sm:px-8 lg:px-10'>
          <button
            onClick={() => scrollToSection('#home')}
            className={`flex items-center gap-3 text-lg font-bold tracking-tight ${navTextClass}`}
          >
            <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b] text-black'>
              <span className='grid grid-cols-2 gap-[2px]'>
                <span className='h-1.5 w-1.5 rounded-full bg-black' />
                <span className='h-1.5 w-1.5 rounded-full bg-black' />
                <span className='h-1.5 w-1.5 rounded-full bg-black' />
                <span className='h-1.5 w-1.5 rounded-full bg-black' />
              </span>
            </span>
            // PORTFOLIO //
          </button>

          <div className='hidden items-center gap-6 lg:flex'>
            {navigation.map((item) => {
              const sectionName = item.href.substring(1);
              const isActive = activeSection === sectionName;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className='group relative min-w-[78px] text-left'
                >
                  <div className='flex items-center gap-2'>
                    <span
                      className={`text-sm font-light leading-none text-transparent transition-all duration-300 ${
                        isScrolled ? '' : ''
                      }`}
                      style={{
                        WebkitTextStroke: isActive
                          ? '1px rgba(245, 158, 11, 0.95)'
                          : isScrolled
                            ? '1px rgba(255, 255, 255, 0.45)'
                            : '1px rgba(17, 24, 39, 0.45)',
                      }}
                    >
                      {item.number}
                    </span>
                    <span className='relative block h-4 overflow-hidden'>
                      <span
                        className={`block text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 group-hover:-translate-y-4 ${
                          isActive
                            ? 'text-[#f59e0b]'
                            : isScrolled
                              ? 'text-white/70'
                              : 'text-neutral-700'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`absolute left-0 top-4 block text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 group-hover:-translate-y-4 ${
                          isActive ? 'text-[#f59e0b]' : 'text-[#f59e0b]'
                        }`}
                      >
                        {`// ${item.name}`}
                      </span>
                    </span>
                  </div>
                  {isActive && (
                    <span className='absolute -bottom-4 left-0 h-0.5 w-full bg-[#f59e0b]' />
                  )}
                </button>
              );
            })}
          </div>

          <div className='hidden lg:block'>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setIsDownloadMenuOpen((value) => !value)}
                className={`rounded-md px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isScrolled
                    ? 'bg-white text-black hover:bg-[#f59e0b]'
                    : 'bg-black text-white hover:bg-[#f59e0b] hover:text-black'
                }`}
                aria-haspopup='menu'
                aria-expanded={isDownloadMenuOpen}
              >
                Download CV
              </button>

              <AnimatePresence>
                {isDownloadMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className='absolute right-0 top-[calc(100%+10px)] z-[60] w-48 overflow-hidden rounded-xl border border-white/15 bg-black/95 shadow-2xl backdrop-blur-xl'
                    role='menu'
                  >
                    <div className='p-2'>
                      {cvLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          className='block rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10'
                          role='menuitem'
                          onClick={() => setIsDownloadMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className={`rounded-md p-2 lg:hidden ${navTextClass}`}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='fixed inset-0 z-40 lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type='button'
              className='absolute inset-0 bg-black/55'
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className='absolute left-4 right-4 top-24 rounded-2xl border border-black/10 bg-[#efeae3] p-6 shadow-2xl'
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className='space-y-3'>
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900 transition-colors hover:bg-black/5'
                  >
                    <span
                      className='text-base font-light leading-none text-transparent'
                      style={{ WebkitTextStroke: '1px rgba(17, 24, 39, 0.45)' }}
                    >
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              <div className='mt-6 border-t border-black/10 pt-5'>
                <div className='space-y-3'>
                  {cvLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900 transition-colors hover:bg-black/5'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span
                        className='text-base font-light leading-none text-transparent'
                        style={{ WebkitTextStroke: '1px rgba(17, 24, 39, 0.45)' }}
                      >
                        //
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
