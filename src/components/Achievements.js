import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaAward, FaStar } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const getIcon = (index) => {
    const icons = [FaTrophy, FaAward, FaStar];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="text-white text-2xl" />;
  };

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  {getIcon(index)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-primary-500 dark:text-primary-400 font-semibold mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
