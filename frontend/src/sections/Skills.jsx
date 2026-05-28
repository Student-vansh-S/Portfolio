import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL / SQL", level: 80 }
    ]
  },
  {
    category: "Programming & Core",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "C++ / C", level: 85 },
      { name: "DSA", level: 85 },
      { name: "DBMS / OS / CN", level: 80 }
    ]
  },
  {
    category: "AI/ML & Tools",
    skills: [
      { name: "Pandas / NumPy", level: 70 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker / Postman", level: 75 },
      { name: "Vercel / Render", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-darker relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            My Skills
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            Technologies I Work With
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-darker dark:text-white mb-6 border-b border-gray-light dark:border-white/10 pb-4">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-darker dark:text-gray-light">{skill.name}</span>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-light dark:bg-dark rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
