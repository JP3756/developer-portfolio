import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { social, personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              {personal.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {personal.title}
            </p>
            <div className="flex space-x-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={social.email}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-300">Navigation</h4>
            <ul className="space-y-2">
              {portfolioData.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-300">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{personal.email}</li>
              <li>{personal.phone}</li>
              <li>{personal.location}</li>
              {contact && contact.availability && (
                <li className="text-green-400 mt-3">{contact.availability}</li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-xs">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React & Node.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
