"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-dark to-black text-light flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 mb-4 shadow-xl"
      >
        <Image
          src="/1620834450072.jpg" // Add your image here
          alt="Profile Picture"
          width={200}
          height={200}
          className="object-cover"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Hi, I’m <span className="text-primary">Jayesh Pawar</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-2xl"
      >
        A passionate Full-Stack Developer crafting scalable and intuitive web applications.
      </motion.p>
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-md md:text-lg max-w-2xl italic text-gray-400"
      >
        "I am a proactive individual with an unwavering commitment to personal and professional growth. I approach
        challenges with resilience, viewing them as opportunities to learn and improve. Passionate about computer work, 
        I find joy in expanding my knowledge and overcoming daily challenges. With a deep love for my country and a 
        strong self-leadership mindset, I am poised to make significant contributions to my field."
      </motion.p> */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-primary text-dark font-semibold rounded-lg shadow-lg hover:shadow-primary hover:shadow-lg transition"
      >
        Get in Touch
      </motion.a>
    </section>
  );
};

export default HeroSection;
