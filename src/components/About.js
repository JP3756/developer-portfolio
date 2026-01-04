import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Get to Know Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2">
            Professional <span className="text-gradient">Summary</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image/Avatar Section */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-dark-card p-6 rounded-2xl shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-xl overflow-hidden">
                    <img 
                      src={personal.avatar} 
                      alt={personal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quick Info Card */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="mr-3 text-primary-500" />
                      <span>{personal.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaEnvelope className="mr-3 text-primary-500" />
                      <span>{personal.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaBriefcase className="mr-3 text-primary-500" />
                      <span className="text-green-600 dark:text-green-400 font-medium">{personal.availability}</span>
                    </div>
                  </div>

                  {/* Resume Download */}
                  {personal.resumeUrl && (
                    <a
                      href={personal.resumeUrl}
                      download
                      className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      <FaDownload />
                      Download Resume
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="space-y-8">
              {/* Professional Summary */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {personal.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {about.summary}
                </p>
              </div>

              {/* Career Objective */}
              {about.careerObjective && (
                <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl border-l-4 border-primary-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Career Objective
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {about.careerObjective}
                  </p>
                </div>
              )}

              {/* Key Highlights */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Key Qualifications
                </h4>
                <div className="space-y-3">
                  {about.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              {about.coreCompetencies && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {about.coreCompetencies.map((competency, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 rounded-lg font-medium transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
