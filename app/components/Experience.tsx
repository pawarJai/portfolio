import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiFlask } from "react-icons/si";
import Image from "next/image"; 
// @ts-expect-error: Ignore type-checking error for demonstration
const Experience = () => {
  const skillsExperience = [
    { skill: "Python", years: 4.6, icon: <FaPython className="text-4xl text-yellow-500" /> },
    { skill: "Django", years: 3, icon: <SiDjango className="text-4xl text-green-600" /> },
    { skill: "React.js", years: 2, icon: <FaReact className="text-4xl text-blue-500" /> },
    { skill: "Next.js", years: 1, icon: (
        <Image src="/next.svg" alt="Next.js logo" width={40} height={40} className="text-4xl" />
      )
    },
    { skill: "Flask", years: 1, icon: <SiFlask className="text-4xl text-orange-500" /> },
    { skill: "Full Stack Development", years: 2, icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { skill: "Node.js", years: 2, icon: <FaNodeJs className="text-4xl text-green-400" /> },
  ];

  const totalExperience = 4.5;

  return (
    <section id="experience" className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary font-display animate__animated animate__fadeIn">
          Experience
        </h2>

        <p className="text-center text-lg font-medium mb-6 font-sans animate__animated animate__fadeIn animate__delay-1s">
          Total Years of Experience:{" "}
          <span className="text-primary font-bold">{totalExperience} Years</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsExperience.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary">{item.skill}</h3>
              </div>
              <p className="text-gray-300">
                Years of Experience:{" "}
                <span className="text-white font-medium">{item.years}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
