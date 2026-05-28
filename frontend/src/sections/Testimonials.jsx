import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "CEO, SaiKet Systems",
    content: "Vansh is a dedicated developer with strong problem-solving skills and great consistency. His work on our MERN stack application was outstanding.",
    rating: 5
  },
  {
    name: "Mehul Garg",
    role: "Tech Lead",
    content: "He quickly adapts to new technologies and delivers quality work on time. A very promising full stack developer with a bright future in AI.",
    rating: 5
  },
  {
    name: "Aman Verma",
    role: "Mentor",
    content: "Highly motivated, hard-working, and passionate about building real-world projects. His attention to detail in UI/UX is commendable.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-light dark:bg-darker relative overflow-hidden">
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-10 right-10 text-[200px] text-gray-light dark:text-white/5 font-serif font-black leading-none pointer-events-none select-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold font-heading text-darker dark:text-white"
          >
            What People Say
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex gap-1 text-accent mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-gray-dark dark:text-gray-light italic mb-8 flex-grow">
                    "{test.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-darker dark:text-white leading-tight">{test.name}</h4>
                      <p className="text-sm text-gray-dark dark:text-gray">{test.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
