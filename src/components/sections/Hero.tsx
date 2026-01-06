'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Mail, 
  Download, 
  ExternalLink,
  MousePointer2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.social.github },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.social.linkedin },
    { name: 'Facebook', icon: Facebook, url: personalInfo.social.facebook },
    { name: 'Twitter', icon: Twitter, url: personalInfo.social.twitter },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10" />
        
        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, i) => {
          // Predefined values to ensure consistency between server and client
          const positions = [
            { width: 120, height: 110, top: 20, left: 10 },
            { width: 90, height: 95, top: 70, left: 85 },
            { width: 110, height: 105, top: 40, left: 30 },
            { width: 85, height: 90, top: 85, left: 15 },
            { width: 100, height: 98, top: 10, left: 70 },
            { width: 95, height: 88, top: 60, left: 50 },
            { width: 115, height: 120, top: 30, left: 90 },
            { width: 88, height: 92, top: 75, left: 40 },
          ];
          
          const position = positions[i % positions.length];
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
              style={{
                width: `${position.width}px`,
                height: `${position.height}px`,
                top: `${position.top}%`,
                left: `${position.left}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Light particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          // Predefined values to ensure consistency between server and client
          const positions = [
            { width: 4, height: 5, top: 10, left: 5 },
            { width: 3, height: 4, top: 25, left: 80 },
            { width: 5, height: 6, top: 40, left: 15 },
            { width: 4, height: 4, top: 70, left: 90 },
            { width: 6, height: 5, top: 90, left: 25 },
            { width: 3, height: 3, top: 60, left: 50 },
            { width: 5, height: 4, top: 30, left: 70 },
            { width: 4, height: 6, top: 15, left: 95 },
            { width: 3, height: 5, top: 50, left: 5 },
            { width: 6, height: 4, top: 85, left: 60 },
            { width: 4, height: 3, top: 20, left: 40 },
            { width: 5, height: 5, top: 75, left: 20 },
            { width: 4, height: 4, top: 5, left: 75 },
            { width: 3, height: 6, top: 45, left: 35 },
            { width: 5, height: 3, top: 65, left: 85 },
            { width: 4, height: 5, top: 35, left: 10 },
            { width: 6, height: 4, top: 80, left: 55 },
            { width: 3, height: 3, top: 15, left: 30 },
            { width: 5, height: 6, top: 55, left: 95 },
            { width: 4, height: 4, top: 95, left: 45 },
          ];
          
          const position = positions[i % positions.length];
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${position.width}px`,
                height: `${position.height}px`,
                top: `${position.top}%`,
                left: `${position.left}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Hero content */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Greeting */}
          <motion.h1 
            className="text-lg md:text-xl text-cyan-500 font-medium mb-2"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h1>

          {/* Name */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.name}
          </motion.h2>

          {/* Typing animation */}
          <motion.div 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                "Full Stack Engineer", 
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8"
            variants={itemVariants}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Profile photo */}
          <motion.div
            className="relative mb-8"
            variants={itemVariants}
            transition={{ delay: 0.9 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                <img 
                  src="/images/profile-demo.png" 
                  alt="Abdullah Al Mamun" 
                  width={192}
                  height={192}
                  className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
            transition={{ delay: 1.0 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-4 mb-10"
            variants={itemVariants}
            transition={{ delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-0 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors duration-300"
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            transition={{ delay: 1.4 }}
          >
            <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
              <MousePointer2 className="h-6 w-6 mb-1 animate-bounce" />
              <span className="text-sm">Scroll to explore</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;