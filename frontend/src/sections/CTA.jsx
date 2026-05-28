import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const CTA = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-indigo-600 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-primary/30"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 text-center md:text-left mb-8 md:mb-0 max-w-2xl">
          <span className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 leading-tight">
            Got A Project? Let's Talk
          </h2>
          <p className="text-white/90 text-lg">
            I'm open to internships, freelance work, and exciting full-time opportunities.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              Let's Connect
              <FiArrowRight />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
