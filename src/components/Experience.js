import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-card z-10 mt-6"></div>

                {/* Content Card */}
                <div className="md:ml-20">
                  <div className="bg-white dark:bg-dark-bg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 dark:border-gray-800">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {exp.position}
                          </h3>
                          {exp.type && (
                            <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium">
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt className="mr-2" size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {exp.description}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start text-gray-600 dark:text-gray-400 text-sm"
                          >
                            <FaCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" size={14} />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
