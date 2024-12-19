"use client";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaUserGraduate } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-8 lg:px-16 bg-black from-blue-500 to-purple-600 text-light"
    >
      <div className="container mx-auto">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          About Me
        </motion.h2>

        {/* Cards Animation */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Full Stack Development",
              desc: "React, Next.js, Django.",
              icon: <FaCode size={40} className="text-yellow-400" />,
            },
            {
              title: "UI/UX Enthusiast",
              desc: "Designing clean and usable interfaces.",
              icon: <FaPalette size={40} className="text-pink-400" />,
            },
            {
              title: "Continuous Learner",
              desc: "Always exploring new technologies.",
              icon: <FaUserGraduate size={40} className="text-teal-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-dark transform transition-all"
            >
              {/* Icon */}
              <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center text-dark mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-center text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
