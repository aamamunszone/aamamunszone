'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  Code, 
  Rocket, 
  Globe, 
  Settings, 
  Database 
} from 'lucide-react';
import { journey } from '@/lib/data';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const iconMap: Record<string, React.FC<any>> = {
    Sparkles,
    Code,
    Rocket,
    Globe,
    Settings,
    Database
  };

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full hidden md:block"></div>
          
          <div ref={ref} className="space-y-12">
            {journey.map((milestone, index) => {
              const IconComponent = milestone.icon || Sparkles;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                      <div className="flex items-start">
                        {!isLeft && (
                          <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white mr-4">
                            <IconComponent className="h-6 w-6" />
                          </div>
                        )}
                        <div>
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-full mb-2">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {milestone.description}
                          </p>
                        </div>
                        {isLeft && (
                          <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white ml-4">
                            <IconComponent className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;