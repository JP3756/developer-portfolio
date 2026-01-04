import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaCode, FaCogs, FaDatabase, FaTools, FaBrain, FaLightbulb } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="mb-4" data-aos="fade-up" data-aos-delay={index * 30}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const SkillTag = ({ skill, index }) => (
    <span
      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
      data-aos="fade-up"
      data-aos-delay={index * 30}
    >
      {skill}
    </span>
  );

  const SkillSection = ({ title, icon: Icon, children }) => (
    <div className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
          <Icon className="text-primary-500" size={20} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Programming Languages */}
          <SkillSection title="Programming Languages" icon={FaCode}>
            {skills.languages.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </SkillSection>

          {/* Frameworks & Libraries */}
          <SkillSection title="Frameworks & Libraries" icon={FaCogs}>
            {skills.frameworks.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </SkillSection>

          {/* Databases */}
          <SkillSection title="Databases" icon={FaDatabase}>
            {skills.databases.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </SkillSection>

          {/* Development Tools */}
          <SkillSection title="Development Tools" icon={FaTools}>
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </SkillSection>
        </div>

        {/* Concepts & Methodologies */}
        {skills.concepts && (
          <div className="mb-8" data-aos="fade-up">
            <SkillSection title="Concepts & Methodologies" icon={FaLightbulb}>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((concept, index) => (
                  <SkillTag key={concept} skill={concept} index={index} />
                ))}
              </div>
            </SkillSection>
          </div>
        )}

        {/* Professional Skills */}
        {skills.professional && (
          <div data-aos="fade-up">
            <SkillSection title="Professional Skills" icon={FaBrain}>
              <div className="flex flex-wrap gap-2">
                {skills.professional.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </SkillSection>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
