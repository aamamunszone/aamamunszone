'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, stats } from '@/lib/data';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsAnimated(true);
    }
  }, [isInView]);

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

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Image and Stats */}
          <div className="relative">
            {/* Profile Image */}
            <motion.div
              className="relative z-10 flex justify-center"
              variants={imageVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <img 
                    src="/images/profile-demo.png" 
                    alt="Abdullah Al Mamun" 
                    width={256}
                    height={256}
                    className="w-64 h-64 mx-auto object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Decorative elements around image */}
            <div className="absolute top-1/4 -left-10 w-8 h-8 rounded-full bg-cyan-500/20"></div>
            <div className="absolute top-1/3 -right-5 w-6 h-6 rounded-full bg-purple-500/20"></div>
            <div className="absolute bottom-1/4 -left-5 w-4 h-4 rounded-full bg-cyan-500/20"></div>
            <div className="absolute bottom-1/3 -right-10 w-10 h-10 rounded-full bg-purple-500/20"></div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                    {stat.icon === "Calendar" && isAnimated ? (
                      <CountUp end={parseInt(stat.value)} duration={2} suffix="+" />
                    ) : stat.icon === "FolderCheck" && isAnimated ? (
                      <CountUp end={parseInt(stat.value)} duration={2} suffix="+" />
                    ) : stat.icon === "Users" && isAnimated ? (
                      <CountUp end={parseInt(stat.value)} duration={2} suffix="+" />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
              <div className="h-1 w-16 bg-cyan-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-4 mb-8">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <a href="#contact">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;