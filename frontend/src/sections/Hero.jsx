import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-primary font-mono text-xl md:text-2xl h-8 inline-block">
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
};

const Hero = () => {
  const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Open Source Learner"
  ];

  const stats = [
    { value: "2+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Passion" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Animated Gradient / Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-accent/20 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#FFC080]">
                Hi, I'm <span className="font-bold text-[#826AED] text-3xl md:text-4xl">Vansh Saini</span>
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-[#826AED]">
                Aspiring AI/ML Engineer &<br />
                <span className="text-gradient">Full Stack MERN Developer</span>
              </h1>
            </div>

            <div className="h-10">
              <Typewriter words={words} />
            </div>

            <p className="text-base md:text-lg text-[#343a40] dark:text-[#343a40] max-w-xl leading-relaxed">
              I build scalable modern web applications and am currently exploring the world of Artificial Intelligence and Machine Learning to create futuristic solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group">
                  View My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="flex items-center gap-2 px-8 py-4 glass text-darker dark:text-white rounded-full font-semibold hover:bg-gray-light dark:hover:bg-dark transition-all">
                  Contact Me
                  <FiMail />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-light dark:border-white/10 mt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col space-y-1"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#826AED]">{stat.value}</span>
                  <span className="text-sm text-gray-dark dark:text-gray">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Sphere & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* 3D Canvas */}
            <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                <Sphere args={[1.5, 64, 64]}>
                  <MeshDistortMaterial
                    color="#6C63FF"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                  />
                </Sphere>
              </Canvas>
            </div>

            {/* Floating Tech Cards (HTML representation over 3D canvas) */}
            <motion.div
              className="absolute top-1/4 right-[10%] glass-card p-4 rounded-xl flex items-center gap-3 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-10 h-10 rounded-full bg-[#61DAFB]/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#61DAFB]"></div>
              </div>
              <span className="font-semibold text-sm text-[#F5F5F5]">
                React.js
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-[5%] glass-card p-4 rounded-xl flex items-center gap-3 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-10 h-10 rounded-full bg-[#47A248]/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#47A248]"></div>
              </div>
              <span className="font-semibold text-sm text-[#F5F5F5]">MongoDB</span>
            </motion.div>

            <motion.div
              className="absolute top-2/4 left-[15%] glass-card p-4 rounded-xl flex items-center gap-3 animate-float"
              style={{ animationDelay: '3s' }}
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                AI
              </div>
              <span className="font-semibold text-sm text-[#F5F5F5]">Machine Learning</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
