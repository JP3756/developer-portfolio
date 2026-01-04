import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.filter(p => p.category === filter));
    }
  }, [filter, projects]);

  const ProjectCard = ({ project, index }) => (
    <div
      className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCode className="text-4xl text-gray-400 dark:text-gray-600" />
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <span className="bg-primary-500 text-white px-2 py-0.5 rounded text-xs font-medium">
              Featured
            </span>
          )}
          {project.status && (
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : project.status === 'In Development'
                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
            }`}>
              {project.status}
            </span>
          )}
        </div>
        {project.category && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-white/90 dark:bg-gray-900/90 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded text-xs font-medium">
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-primary-500 dark:text-primary-400 font-medium">
              {project.subtitle}
            </p>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Impact */}
        {project.impact && (
          <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-4 border-l-2 border-primary-500 pl-3">
            {project.impact}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded text-xs">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
            >
              <FaGithub size={16} />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
            >
              <FaExternalLinkAlt size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects demonstrating my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-dark-bg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10" data-aos="fade-up">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
