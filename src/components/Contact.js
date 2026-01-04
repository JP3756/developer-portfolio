import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaClock, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal, contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Unable to send message. Please try again later or email me directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    'Job Opportunity',
    'Freelance Project',
    'Collaboration',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm actively seeking opportunities in software development. Whether you have a position available, 
            a project idea, or just want to connect—I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            {/* Availability Card */}
            <div className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900 dark:text-white">Currently Available</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {contact?.availability || 'Open to full-time positions, internships, and freelance opportunities.'}
              </p>
              <div className="flex flex-wrap gap-2">
                {(personal.preferredRoles || ['Full-Stack Developer', 'Frontend Developer']).map((role, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border space-y-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-card transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white">{personal.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FaClock className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Response Time</p>
                  <p className="text-gray-900 dark:text-white">{contact?.responseTime || 'Within 24 hours'}</p>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Profiles</h3>
              <div className="space-y-3">
                {personal.linkedin && (
                  <a 
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                  >
                    <FaLinkedin className="text-[#0077B5] text-xl" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors">
                      LinkedIn Profile
                    </span>
                  </a>
                )}
                {personal.github && (
                  <a 
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <FaGithub className="text-gray-800 dark:text-white text-xl" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      GitHub Profile
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-xl shadow-lg text-white">
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase />
                <h3 className="font-semibold">What I'm Looking For</h3>
              </div>
              <ul className="space-y-2 text-sm text-primary-100">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-200 mt-0.5 flex-shrink-0" />
                  <span>Entry-level or junior developer positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-200 mt-0.5 flex-shrink-0" />
                  <span>Internship opportunities in software development</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-200 mt-0.5 flex-shrink-0" />
                  <span>Collaborative team environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-200 mt-0.5 flex-shrink-0" />
                  <span>Projects with learning opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-bg p-8 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Company Input */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors`}
                  >
                    <option value="">Select a subject</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors resize-none`}
                  placeholder="Tell me about the opportunity, project, or how I can help..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitStatus.type === 'success' && <FaCheckCircle />}
                    {submitStatus.message}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                I'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
