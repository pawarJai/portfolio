'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    projectType: '',
    services: [],
    budget: '',
    timeline: '',
    message: '',
    urgency: 'normal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = {
    email: 'contact@aakshiv.com',
    phone: '+91 9408342183',
    location: 'Ahmedabad, India',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData((prev) => ({
          ...prev,
          name: '',
          email: '',
          subject: '',
          message: '',
        }));
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#141414] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#0d0d0d] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 border-b border-white/8 pb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            // Contact
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
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
              07
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-4 text-6xl font-light leading-none text-transparent lg:hidden"
              style={{ WebkitTextStroke: '1.2px rgba(236, 232, 225, 0.32)' }}
            >
              07
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_24%),linear-gradient(180deg,#101010_0%,#090909_100%)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14%_100%] opacity-25" />
              <div className="pointer-events-none absolute inset-x-[18%] top-[-18%] h-[240px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.92)_0%,rgba(245,158,11,0.6)_34%,rgba(59,130,246,0.38)_56%,transparent_72%)] blur-xl opacity-80" />

              <div className="relative z-10 border-b border-white/10 px-5 py-4 sm:px-7">
                <div className="grid grid-cols-2 gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:grid-cols-[1.1fr_1fr_1fr_1fr_80px]">
                  <div>आक्षिव</div>
                  <div className="hidden sm:block">About</div>
                  <div className="hidden sm:block">Contact</div>
                  <div className="hidden sm:block">Projects</div>
                  <div className="justify-self-end">Menu</div>
                </div>
              </div>

              <div className="grid gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-12">
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="max-w-md"
                >
                  <div className="space-y-7">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm text-white/58"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-0 border-b border-white/25 bg-transparent px-0 pb-3 text-white outline-none transition-colors placeholder:text-white/24 focus:border-[#f59e0b] focus:ring-0"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm text-white/58"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-0 border-b border-white/25 bg-transparent px-0 pb-3 text-white outline-none transition-colors placeholder:text-white/24 focus:border-[#f59e0b] focus:ring-0"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm text-white/58"
                      >
                        Project Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-0 border-b border-white/25 bg-transparent px-0 pb-3 text-white outline-none transition-colors placeholder:text-white/24 focus:border-[#f59e0b] focus:ring-0"
                        placeholder="Tell me what you want to build"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm text-white/58"
                      >
                        Share your thoughts
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full resize-none border-0 border-b border-white/25 bg-transparent px-0 pb-3 text-white outline-none transition-colors placeholder:text-white/24 focus:border-[#f59e0b] focus:ring-0"
                        placeholder="Describe your idea, timeline, and goals"
                      />
                    </div>

                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-start gap-3 rounded-2xl border px-4 py-4 ${
                          submitStatus === 'success'
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                            : 'border-red-500/30 bg-red-500/10 text-red-200'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                        ) : (
                          <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
                        )}
                        <p className="text-sm leading-6">
                          {submitStatus === 'success'
                            ? "Message sent successfully. I'll get back to you soon."
                            : 'Something went wrong. Please try again or use direct contact.'}
                        </p>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                      className="inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-md bg-[#ece8e1] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                          Sending
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-4 w-4" />
                          Share Your Feedback
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex min-h-[420px] items-center justify-center"
                >
                  <div className="absolute h-[320px] w-[260px] rounded-[48%_52%_46%_54%/46%_42%_58%_54%] border border-white/12" />
                  <div className="absolute h-[320px] w-[260px] rounded-[48%_52%_46%_54%/46%_42%_58%_54%] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.08),_transparent_32%)]" />
                  <div className="relative z-10 max-w-[290px]">
                    <h3 className="text-5xl font-light leading-[0.95] text-[#ece8e1] sm:text-6xl">
                      Contact
                      <span className="block text-right">
                        <span className="mr-4 inline-block h-px w-16 bg-[#f59e0b] align-middle" />
                        Us
                      </span>
                    </h3>
                    <p className="mt-8 text-sm leading-7 text-white/58 sm:text-base">
                      It is very important for us to keep in touch with you, so
                      we are always ready to answer any question that interests
                      you. Shoot.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative z-10 border-t border-white/10 px-5 py-4 sm:px-7 lg:px-10">
                <div className="grid gap-4 text-[11px] uppercase tracking-[0.18em] text-white/48 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:justify-end">
                    <EnvelopeIcon className="h-4 w-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
