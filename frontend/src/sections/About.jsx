import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTarget, FiZap } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      title: "DSA Enthusiast",
      description: "Consistent problem solver, focusing on algorithmic efficiency.",
      icon: <FiCode className="text-blue-500" size={24} />,
      bg: "bg-blue-500/10"
    },
    {
      title: "AI/ML Explorer",
      description: "Learning and building with AI tools and predictive models.",
      icon: <FiCpu className="text-purple-500" size={24} />,
      bg: "bg-purple-500/10"
    },
    {
      title: "Problem Solver",
      description: "Love turning complex problems into simple, elegant solutions.",
      icon: <FiTarget className="text-green-500" size={24} />,
      bg: "bg-green-500/10"
    },
    {
      title: "Quick Learner",
      description: "Always curious and ready to explore new technologies.",
      icon: <FiZap className="text-accent" size={24} />,
      bg: "bg-accent/10"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image with circular animated border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Spinning dashed border */}
            <div className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] border-2 border-dashed border-primary rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Solid glow behind image */}
            <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-primary/20 rounded-full blur-2xl" />

            {/* Main Image Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-darker shadow-2xl z-10">
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-30"></div> */}
              <img
                src="/profile.jpeg"
                alt="Vansh Saini"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Shapes */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-10 left-0 w-12 h-12 rounded-lg bg-accent/80 backdrop-blur-md z-20 flex items-center justify-center text-white"
            >
              <FiCode size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute bottom-10 right-0 w-16 h-16 rounded-full bg-primary/80 backdrop-blur-md z-20 flex items-center justify-center text-white"
            >
              <span className="font-bold">AI</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Designing <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">Solutions</span>,<br />
              Not Just Visuals
            </h2>

            <p className="mt-6 text-purple-900 dark:text-purple-500 leading-relaxed text-lg">
              I am a BCA graduate from MSU University and currently pursuing MCA from JIIT Noida Sector 62. Passionate about building scalable web applications and actively transitioning into AI/ML engineering to create smarter, future-ready products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-colors">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${feature.bg}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-darker dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-dark dark:text-gray text-balance">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/vansh-saini-4446b02a8/"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                Read More About Me
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
