import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "SaiKet Systems",
    duration: "Jan 31, 2026 – Mar 1, 2026",
    type: "Internship",
    points: [
      "Developed full stack web applications using MERN stack.",
      "Built REST APIs.",
      "Implemented authentication & authorization.",
      "Worked on debugging & optimization.",
      "Handled deployment workflows.",
      "Used Git, GitHub and collaborated effectively."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self Employed",
    duration: "2025 – Present",
    type: "Freelance",
    points: [
      "Built local school website with responsive design.",
      "Collaborated with clients to gather requirements.",
      "Ensured high performance and SEO optimization."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-light dark:bg-darker">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            My Experience
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-gray-light dark:border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white dark:bg-darker border-4 border-primary shadow-[0_0_10px_rgba(108,99,255,0.5)] z-10" />
              
              {/* Line connector for dot */}
              <div className="absolute left-[-11px] top-6 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary to-transparent z-0 opacity-30" />

              <div className="glass-card p-6 md:p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-darker dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1 text-primary font-medium">
                      <FiBriefcase />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
                      {exp.type}
                    </span>
                    <span className="text-sm text-gray-dark dark:text-gray mt-2 font-mono">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-dark dark:text-gray-light">
                      <span className="text-primary mt-1 text-lg leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
