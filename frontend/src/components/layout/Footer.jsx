import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-darker pt-16 pb-8 border-t border-gray-light dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-light dark:border-white/10 pb-12">

          <div className="col-span-1">
            <h2 className="text-3xl font-bold font-heading text-darker dark:text-white mb-4">
              Vansh Saini<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-dark dark:text-gray-light max-w-sm mb-6">
              Aspiring AI/ML Engineer & Full Stack MERN Developer based in Noida, India.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-darker dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Skills'].map((link) => (
                  <li key={link}>
                    <Link to={link.toLowerCase()} smooth={true} duration={500} className="text-gray-dark dark:text-gray hover:text-primary transition-colors cursor-pointer text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-darker dark:text-white mb-4">Portfolio</h4>
              <ul className="space-y-3">
                {['Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link to={link.toLowerCase()} smooth={true} duration={500} className="text-gray-dark dark:text-gray hover:text-primary transition-colors cursor-pointer text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-dark dark:text-gray text-sm">
            &copy; {new Date().getFullYear()} Vansh Saini. All Rights Reserved.
          </p>
          <p className="text-gray-dark dark:text-gray text-sm flex items-center gap-1">
            Built with <span className="text-red-500 text-lg">❤️</span> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
