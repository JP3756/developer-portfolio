import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-dark-card rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-0">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2" size={12} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                {edu.coursework && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <FaBook className="mr-2 text-primary-500" size={12} />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Activities & Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start text-gray-600 dark:text-gray-400 text-sm"
                        >
                          <span className="text-primary-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
