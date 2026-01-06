'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Code, 
  Layout, 
  Database, 
  Globe, 
  Palette, 
  Rocket, 
  Shield, 
  Smartphone, 
  Settings, 
  Sparkles 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/lib/data';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Offer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon || Code;
            
            return (
              <Tilt
                key={service.id}
                className="rounded-2xl p-2"
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="16px"
              >
                <motion.div
                  className="h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;