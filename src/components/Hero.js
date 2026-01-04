import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {personal.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-gradient">{personal.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {personal.title}
        </motion.h2>

        {/* Subtitle */}
        {personal.subtitle && (
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 mb-6"
          >
            {personal.subtitle}
          </motion.p>
        )}

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-all duration-300 hover:border-primary-500 hover:text-primary-500"
          >
            Contact Me
          </a>
          {personal.resumeUrl && (
            <a
              href={personal.resumeUrl}
              download
              className="px-8 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <FaDownload size={14} />
              <span>Resume</span>
            </a>
          )}
        </motion.div>

        {/* Professional Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center space-x-6 mb-16"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
            <span className="text-sm font-medium hidden sm:inline">GitHub</span>
          </a>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
            <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
          </a>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <a
            href={social.email}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
            <span className="text-sm font-medium hidden sm:inline">Email</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          variants={itemVariants}
          className="inline-block text-gray-400 dark:text-gray-500 animate-bounce"
          aria-label="Scroll to about section"
        >
          <FaChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
