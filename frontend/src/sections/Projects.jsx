import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Wanderlust — Airbnb Clone",
    description: "A full-featured property booking platform with authentication, map integration, and an MVC architecture.",
    tech: ["MERN Stack", "Mapbox", "Passport.js"],
    image: "/projects/wanderlust.png",
    live: "https://wanderlust-4psh.onrender.com/listings",
    github: "https://github.com/Student-vansh-S/Wanderlust"
  },
  {
    title: "Dialogix AI — ChatGPT Clone",
    description: "An AI chatbot platform featuring real-time conversations and context-aware responses powered by Gemini.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API"],
    image: "/projects/dialogixai.png",
    live: "https://dialogixai.vercel.app/",
    github: "https://github.com/Student-vansh-S/Dialogix-Ai"
  },
  {
    title: "Stock Trading Platform",
    description: "A real-time stock trading simulator with live market data updates and portfolio management.",
    tech: ["MERN Stack", "WebSockets", "Chart.js"],
    image: "/projects/trading.png",
    live: "#",
    github: "https://github.com/Student-vansh-S/TradeLens"
  },
  {
    title: "Video Conferencing Platform",
    description: "A real-time video meeting application with secure authentication and multi-user room support.",
    tech: ["MERN Stack", "WebRTC", "Socket.io"],
    image: "/projects/viconnects.png",
    live: "https://vi-connects.vercel.app/",
    github: "https://github.com/Student-vansh-S/VI-Connects"
  },
  {
    title: "Radhey Mart",
    description: "An e-commerce platform with a comprehensive admin dashboard, shopping cart, and secure checkout.",
    tech: ["MERN Stack", "Stripe", "Redux"],
    image: "/projects/radheymart.png",
    live: "https://radhey-mart.vercel.app/",
    github: "https://github.com/Student-vansh-S/Radhey-Mart"
  },
  {
    title: "School Website",
    description: "A modern, responsive informational portal for a local school with tailored UI/UX.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/school.png",
    live: "https://rkph-school.vercel.app/",
    github: "https://github.com/Student-vansh-S/School_RKPH"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-light dark:bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            Some Things I've Built
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gray-light dark:bg-dark relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div> */}
                <div className="w-full h-full flex items-center justify-center text-gray-dark dark:text-gray">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-darker dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-dark dark:text-gray-light text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 bg-gray-light dark:bg-dark text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-darker dark:text-white hover:text-primary transition-colors bg-gray-light dark:bg-dark px-4 py-2 rounded-full">
                    Live <FiExternalLink />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-darker dark:text-white hover:text-primary transition-colors bg-gray-light dark:bg-dark px-4 py-2 rounded-full">
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
