import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiDatabase, FiLayers, FiMessageSquare, FiLayout } from 'react-icons/fi';

const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web applications using MERN stack with scalable architecture.",
    icon: <FiMonitor size={24} />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Responsive Web Design",
    description: "Modern, mobile-friendly and user-centric designs with smooth animations.",
    icon: <FiSmartphone size={24} />,
    color: "from-orange-400 to-pink-500"
  },
  {
    title: "API Development & Integration",
    description: "Building RESTful APIs and integrating third-party AI services.",
    icon: <FiDatabase size={24} />,
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "MERN Stack Applications",
    description: "Specialized in MongoDB, Express, React, and Node.js ecosystems.",
    icon: <FiLayers size={24} />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "AI Chatbot Integration",
    description: "Integrating intelligent LLMs like Gemini and ChatGPT into web apps.",
    icon: <FiMessageSquare size={24} />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Modern UI Development",
    description: "Crafting beautiful interfaces with Tailwind CSS and Framer Motion.",
    icon: <FiLayout size={24} />,
    color: "from-pink-500 to-rose-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            What I Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-dark dark:text-gray-light"
          >
            I help ideas turn into real digital products by providing a comprehensive range of development services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group glass-card p-8 rounded-2xl relative overflow-hidden cursor-pointer"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-darker dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-dark dark:text-gray text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
