'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detect active section based on scroll position
      const sections = navLinks.map(link => link.href).filter(href => href !== '/');
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section) as HTMLElement;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.substring(1).charAt(0).toUpperCase() + section.substring(2));
            return;
          }
        }
      }
      
      // Default to Home if no section is active
      if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80; // Account for sticky navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md py-3 border-b border-gray-200/20 dark:border-gray-800/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          aamamunszone
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeSection === link.name
                  ? 'text-cyan-600 dark:text-cyan-400 font-medium'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.name && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Resume Download Button */}
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                    activeSection === link.name
                      ? 'text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 font-medium'
                      : 'text-gray-700 hover:bg-gray-200/30 dark:text-gray-300 dark:hover:bg-gray-800/30 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Resume Button for Mobile */}
              <Button asChild className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;