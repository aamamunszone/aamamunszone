'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpToLine, Github, Linkedin, Facebook, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from '@/components/shared/SocialLinks';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Full Stack Web Development', href: '#services' },
    { name: 'Frontend Development', href: '#services' },
    { name: 'MERN Stack Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'API Development', href: '#services' },
    { name: 'Performance Optimization', href: '#services' },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUpToLine className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand/About Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">aamamunszone</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Building digital experiences that make a difference. Specializing in modern web applications with React, Next.js, Node.js, and MongoDB.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                <a 
                  href="mailto:aamamunszone@gmail.com" 
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                >
                  aamamunszone@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                <a 
                  href="tel:+8801973289703" 
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                >
                  +880 1973 289703
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                <a 
                  href="https://wa.me/8801973289703" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()}, Crafted with ❤️ by aamamunszone
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-4 md:mt-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;