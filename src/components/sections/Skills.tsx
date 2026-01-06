'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Code, 
  Server, 
  Wrench, 
  Upload, 
  Zap,
  Layers,
  Database,
  Settings,
  Palette
} from 'lucide-react';
import { skills } from '@/lib/data';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      name: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'from-cyan-500 to-blue-500',
      size: 'large'
    },
    {
      name: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'from-purple-500 to-indigo-500',
      size: 'medium'
    },
    {
      name: 'Tools',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-green-500 to-teal-500',
      size: 'medium'
    },
    {
      name: 'Deployment',
      icon: Upload,
      skills: skills.deployment,
      color: 'from-orange-500 to-red-500',
      size: 'small'
    },
    {
      name: 'Others',
      icon: Zap,
      skills: skills.others,
      color: 'from-pink-500 to-rose-500',
      size: 'small'
    }
  ];

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

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => {
            let gridColSpan = 'md:col-span-2'; // large
            if (category.size === 'medium') gridColSpan = 'md:col-span-1';
            if (category.size === 'small') gridColSpan = 'md:col-span-1';

            return (
              <Tilt
                key={index}
                className={`rounded-2xl p-6 ${gridColSpan}`}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
              >
                <motion.div
                  className={`h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="bg-white dark:bg-gray-700/50 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-max"
                        variants={badgeVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;