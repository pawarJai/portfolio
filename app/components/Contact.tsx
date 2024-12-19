"use client";
import { motion } from "framer-motion";
// @ts-ignore
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-dark text-light">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          Contact Me
        </motion.h2>
        <motion.form
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-2 bg-light text-dark rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-2 bg-light text-dark rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 bg-light text-dark rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-dark rounded-lg hover:shadow-primary transition"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
