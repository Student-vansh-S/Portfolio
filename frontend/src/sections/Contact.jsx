import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: "Email",
      value: "sainivansh8116@gmail.com",
      link: "mailto:sainivansh8116@gmail.com"
    },
    {
      icon: <FiMapPin size={20} />,
      title: "Location",
      value: "Noida, India",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Student-vansh-S" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/vansh-saini-4446b02a8/" },
    { icon: <FiInstagram size={20} />, url: "https://www.instagram.com/ig.vansh_07/" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-darker relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Contact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-darker dark:text-white mb-6">Contact Information</h3>
              <p className="text-gray-dark dark:text-gray-light mb-8">
                Feel free to reach out for collaborations, freelance projects, or just to say hi!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-darker dark:text-white">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-dark dark:text-gray hover:text-primary transition-colors text-sm break-all">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-dark dark:text-gray text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-light dark:border-white/10">
                <h4 className="font-bold text-darker dark:text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-light dark:bg-dark flex items-center justify-center text-darker dark:text-white hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-darker dark:text-gray-light mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-light dark:bg-dark border border-gray-light dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-darker dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-darker dark:text-gray-light mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-light dark:bg-dark border border-gray-light dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-darker dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-darker dark:text-gray-light mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light dark:bg-dark border border-gray-light dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-darker dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-darker dark:text-gray-light mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-light dark:bg-dark border border-gray-light dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-darker dark:text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300'}`}>
                  {status.message}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
              >
                {loading ? 'Sending...' : (
                  <>Send Message <FiSend /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
