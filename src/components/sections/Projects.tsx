'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { projects, moreProjects } from '@/lib/data';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showMore, setShowMore] = useState(false);
  
  const hasDetailPage = (projectId: string) => {
    return projects.some(p => p.id === projectId);
  };

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

  const toggleMoreProjects = () => {
    setShowMore(!showMore);
  };
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <Tilt
              key={project.id}
              className="rounded-2xl p-2"
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="16px"
            >
              <motion.div
                className="relative h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="text-white bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-lg transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 max-h-20 overflow-y-auto pr-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
        
        {/* More Projects Toggle Button */}
        <div className="flex justify-center mb-12 mt-4">
          <button
            onClick={toggleMoreProjects}
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {showMore ? 'Show Less' : 'More Projects'}
          </button>
        </div>
        
        {/* More Projects Cards - Animated Reveal */}
        <motion.div
          initial={false}
          animate={{
            height: showMore ? 'auto' : 0,
            opacity: showMore ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((project, index) => (
              <Tilt
                key={project.id}
                className="rounded-2xl p-2"
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="16px"
              >
                <motion.div
                  className="relative h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      {hasDetailPage(project.id) ? (
                        <Link 
                          href={`/projects/${project.id}`}
                          className="text-white bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-lg transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          View Details
                        </Link>
                      ) : (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-lg transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4 max-h-20 overflow-y-auto pr-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;