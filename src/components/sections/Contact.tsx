'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MessageCircle, MapPin, CheckCircle, Clock, User, AtSign, Edit3, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 3 ? 'Name must be at least 3 characters' : '';
      case 'email':
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? 'Invalid email address' : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.length < 20 ? 'Message must be at least 20 characters' : '';
      default:
        return '';
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Form submission to FormSubmit
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `Portfolio Contact: ${formData.subject}`);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_next', 'https://aamamunszone.vercel.app/');
      formDataToSend.append('_captcha', 'false');
      
      const response = await fetch('https://formsubmit.co/' + personalInfo.email, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok || response.status === 200) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Show success toast
        toast.success('Message sent successfully! I will get back to you soon.');
      } else {
        // Show error toast
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      // Show error toast
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Edit3 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                    placeholder="Subject of your message"
                  />
                </div>
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <Edit3 className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/20 min
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              {/* Get In Touch Card */}
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Mail className="mr-2 text-cyan-500" />
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">Email</p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 transition-colors">{personalInfo.email}</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 transition-colors">{personalInfo.phone}</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/8801973289703" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">WhatsApp</p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 transition-colors">{personalInfo.whatsapp}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center p-3 rounded-lg">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Availability Card */}
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="mr-2 text-green-500" />
                  Availability
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Available</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">for freelance</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="mr-2 text-cyan-500 h-4 w-4" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Response time: Usually within 24 hours</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="mr-2 text-cyan-500 h-4 w-4" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Best time: 9 AM - 10 PM (GMT+6)</span>
                  </div>
                </div>
              </div>
              
              {/* Social Connect Card */}
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <MessageCircle className="mr-2 text-purple-500" />
                  Social Connect
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-800 text-white mr-3 group-hover:bg-cyan-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">GitHub</p>
                    </div>
                  </a>
                  
                  <a 
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-600 text-white mr-3 group-hover:bg-cyan-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">LinkedIn</p>
                    </div>
                  </a>
                  
                  <a 
                    href={personalInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500 text-white mr-3 group-hover:bg-cyan-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">Facebook</p>
                    </div>
                  </a>
                  
                  <a 
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-400 text-white mr-3 group-hover:bg-cyan-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">Twitter</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;