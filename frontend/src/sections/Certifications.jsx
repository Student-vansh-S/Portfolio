import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
  { name: "MERN Stack Course", issuer: "Apna College" },
  { name: "DSA Course", issuer: "Apna College" },
  { name: "Python Advanced", issuer: "Saumya Singh" },
  { name: "Generative AI For All", issuer: "Physics Wallah" },
  { name: "Goldman Sachs Job Simulation", issuer: "Forage" },
  { name: "Walmart Software Engineering Simulation", issuer: "Forage" },
  { name: "DFA Certification", issuer: "Institution" }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Achievements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            Licenses & Certifications
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <FiAward size={24} />
              </div>
              <div>
                <h4 className="font-bold text-darker dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">{cert.name}</h4>
                <p className="text-sm text-gray-dark dark:text-gray font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
