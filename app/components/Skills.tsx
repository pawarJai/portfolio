import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", level: 90, icon: <FaJsSquare size={40} className="text-yellow-500" />, experience: "2+ years" },
  { name: "React.js", level: 85, icon: <FaReact size={40} className="text-blue-500" />, experience: "2 years" },
  { name: "Next.js", level: 80, icon: <SiNextdotjs size={40} className="text-gray-600" />, experience: "1+ years" },
  { name: "Python", level: 90, icon: <FaPython size={40} className="text-green-500" />, experience: "4+ years" },
  { name: "Django", level: 85, icon: <SiDjango size={40} className="text-green-600" />, experience: "4 years" },
  { name: "Node.js", level: 75, icon: <FaNodeJs size={40} className="text-green-400" />, experience: "2 years" },
  { name: "SQL/PLSQL", level: 80, icon: <FaDatabase size={40} className="text-blue-500" />, experience: "4+ years" },
  { name: "MongoDB", level: 75, icon: <SiMongodb size={40} className="text-green-500" />, experience: "2 years" },
  { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss size={40} className="text-blue-400" />, experience: "1+ years" },
];
// @ts-expect-error: Ignore type-checking error for demonstration
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-5 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-gray-800 via-gray-900 to-black 
              p-8 rounded-lg shadow-lg overflow-hidden transition-transform transform 
              hover:scale-105 hover:rotate-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-pink-500/10 blur-xl"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{skill.icon}</div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-blue-400">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500"
                ></div>
              </div>

              {/* Experience */}
              <p className="text-center mt-4 text-gray-300">
                <span className="text-blue-400 font-bold">{skill.level}%</span> Proficiency
              </p>
              <p className="text-center mt-2 text-gray-400 italic">
                {skill.experience} Experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
