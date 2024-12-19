"use client";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    
    {
      title: "Plant Visibility (Dr. Reddy's)",
      description:
        "A manufacturing plant visibility solution designed for a leading pharmaceutical client. Built a full-stack application to monitor plant performance, enhance operational efficiency, and ensure real-time insights.",
      link: "#",
      role: "Full Stack Developer (Aug 2022 - Present)",
    },
    {
      title: "Rapid Investigator (Dr. Reddy's)",
      description:
        "A web application providing raw material information and status tracking for manufacturing medicine batches. Optimized manufacturing workflows with a user-friendly interface and data-driven insights.",
      link: "#",
      role: "Full Stack Developer (Sep 2022 - Present)",
    },
    {
      title: "BizdateUp",
      description:
        "A startup onboarding and funding platform connecting entrepreneurs with investors. Integrated features for secure user onboarding, pitch submissions, and real-time funding updates.",
      link: "#",
      role: "Full Stack Developer (Mar 2024 - Present)",
    },
    {
      title: "Yield Improvement Platform (Dr. Reddy's)",
      description:
        "A web application providing an intuitive dashboard to analyze and monitor pharmaceutical production data. The platform offers actionable insights to optimize manufacturing processes, prevent batch failures, and ensure high-quality output for pharmaceutical firms.",
      link: "#",
      role: "Frontend Developer (Mar 2023 - Feb 2024)",
    },
    {
      title: "IPQA - In Process Quality Assurance (Dr. Reddy's)",
      description:
        "Developed a front-end solution for real-time monitoring and analysis of manufacturing processes. Integrated animated data visualization to dynamically represent key quality metrics, enabling better decision-making and adherence to quality standards.",
      link: "#",
      role: "Frontend Developer (Dec 2022 - Mar 2023)",
    },
    {
      title: "Entrns",
      description:
        "A society management app offering online booking of premises, automated charge calculation, and online payment integration. Streamlined society operations by providing an intuitive backend system.",
      link: "#",
      role: "Backend Developer (Apr 2021 - Mar 2022)",
    },
    {
      title: "Grocery App",
      description:
        "A frontend interface for an e-commerce grocery platform, offering advanced search, filtering, and seamless user experience. Enabled customers to explore a wide variety of products effortlessly.",
      link: "#",
      role: "Frontend Developer (Sep 2020 - Jan 2021)",
    },
    {
      title: "DbeeIn E-Commerce App",
      description:
        "An e-commerce platform with personalized product recommendations. Designed an engaging user interface to enhance customer retention and drive sales.",
      link: "#",
      role: "Frontend Developer (Feb 2020 - Sep 2020)",
    },
  ];

  return (
    <section id="projects" className="py-16 px-10 bg-gradient-to-br from-black to-dark text-light">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center text-primary"
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-dark rounded-lg shadow-lg p-6 hover:shadow-primary transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="mt-2 text-light">{project.description}</p>
              <p className="mt-2 text-sm text-gray-400 italic">{project.role}</p>
              <a href={project.link} className="mt-4 inline-block text-primary underline">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
