import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
        ? 'bg-white/90 dark:bg-darker/90 backdrop-blur-xl shadow-md border-b border-gray-light dark:border-white/10 py-3'
        : 'bg-white/10 dark:bg-darker/30 backdrop-blur-md border-b border-white/20 dark:border-white/10 py-5 lg:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer group focus:outline-none">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-heading text-darker dark:text-white group-hover:scale-105 transition-transform"
          >
            Vansh Saini<span className="text-primary">.</span>
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={() => setActiveSection(link.to)}
                className="relative px-3 py-2 text-sm lg:text-base font-medium text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary transition-colors cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                {link.name}

                {/* Active/Hover animated underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transition-all duration-300 ${activeSection === link.to ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} />
              </Link>
            </motion.div>
          ))}

          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            Download CV <FiDownload />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-darker dark:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5 transition-all">
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-darker/95 backdrop-blur-2xl border-t border-gray-light dark:border-white/10 overflow-hidden shadow-2xl absolute w-full"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMobileMenuOpen(false)}
                    onSetActive={() => setActiveSection(link.to)}
                    className={`block w-full text-center py-3 text-lg font-medium rounded-xl transition-all ${activeSection === link.to
                      ? 'bg-primary/10 text-primary dark:text-primary font-bold'
                      : 'text-gray-dark dark:text-gray-light hover:bg-gray-50 dark:hover:bg-dark'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6 w-full px-5 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
