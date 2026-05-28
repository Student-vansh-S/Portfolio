import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
