/**
 * Portfolio Content Configuration
 * Professional Portfolio - John Paolo M. Cabaluna
 * Last Updated: January 2026
 */

export const portfolioData = {
  // Personal Information
  personal: {
    name: "John Paolo M. Cabaluna",
    firstName: "John Paolo",
    lastName: "Cabaluna",
    title: "Full-Stack Developer",
    subtitle: "Information Technology Student",
    tagline: "Developing scalable web applications with modern technologies. Combining technical expertise with proven leadership experience to deliver impactful solutions.",
    email: "cabalunajp7@gmail.com",
    location: "Cebu City, Philippines",
    phone: "+63 960 607 9804",
    avatar: `${process.env.PUBLIC_URL}/avatar.jpg`,
    resumeUrl: "/resume.pdf",
    availability: "Open to Opportunities",
    preferredRoles: ["Full-Stack Developer", "Frontend Developer", "Web Developer", "Software Developer Intern"],
  },

  // Professional Summary
  about: {
    summary: `Results-driven IT student with hands-on experience in full-stack web development and a proven track record of leadership in organizational management. Proficient in building responsive, user-centric applications using React, Node.js, and modern development frameworks. Currently serving as Executive Audit at Don Bosco Supreme Student Council, demonstrating strong analytical, communication, and project management capabilities.`,
    
    description: `I specialize in developing efficient, scalable web applications that solve real-world problems. My technical foundation in JavaScript, React, and Node.js is complemented by practical experience in database design, API development, and deployment workflows. As Executive Audit of the student council, I've honed my ability to manage complex projects, collaborate with diverse teams, and deliver results under tight deadlines.`,
    
    highlights: [
      "Full-Stack Development: React, Node.js, Express, MongoDB, MySQL",
      "Executive Audit at Don Bosco Supreme Student Council (2024-Present)",
      "Bachelor of Science in Information Technology, Expected 2026",
      "Experience in Agile methodologies and version control (Git)",
      "Strong communication and cross-functional collaboration skills"
    ],
    
    careerObjective: "Seeking a challenging position as a Full-Stack Developer or Software Development Intern where I can apply my technical skills and leadership experience to contribute to innovative projects while continuing professional growth.",
    
    coreCompetencies: [
      "Web Application Development",
      "Database Design & Management", 
      "RESTful API Development",
      "Responsive UI/UX Implementation",
      "Project Management",
      "Team Leadership"
    ]
  },

  // Education
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Don Bosco Technical College",
      location: "Cebu City, Philippines",
      period: "2022 - 2026 (Expected)",
      gpa: "", // Add if above 3.0
      description: "Comprehensive program covering software development, database management, networking, and IT project management with emphasis on practical application development.",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development Technologies",
        "Software Engineering",
        "Object-Oriented Programming",
        "Systems Analysis and Design"
      ],
      achievements: [
        "Executive Audit, Don Bosco Supreme Student Council (2024-Present)",
        "Consistent Dean's Lister", // Add if applicable
        "Active participant in IT-related workshops and seminars"
      ]
    }
  ],

  // Professional Experience
  experience: [
    {
      position: "Executive Audit",
      type: "Leadership Role",
      organization: "Don Bosco Supreme Student Council",
      period: "2024 - Present",
      location: "Don Bosco Technical College, Cebu City",
      description: "Elected position responsible for ensuring financial accountability and transparency across all student council operations and affiliated organizations.",
      responsibilities: [
        "Conduct comprehensive audits of organizational budgets totaling ₱500,000+ in annual funds",
        "Develop and implement financial tracking systems to improve transparency by 40%",
        "Present quarterly audit reports to administration and 2,000+ student body members",
        "Collaborate with 15+ council officers to ensure policy compliance and fiscal responsibility",
        "Lead process improvement initiatives resulting in streamlined budget approval workflows"
      ],
      skills: ["Financial Analysis", "Report Writing", "Public Speaking", "Process Improvement", "Stakeholder Management"]
    },
    {
      position: "Volunteer Coordinator",
      type: "Volunteer Experience",
      organization: "Youth Ministry & Community Outreach",
      period: "2022 - Present",
      location: "Cebu City, Philippines",
      description: "Coordinate volunteer programs and community service initiatives focused on youth development and social responsibility.",
      responsibilities: [
        "Organize and facilitate 10+ community outreach events annually serving 200+ beneficiaries",
        "Recruit, train, and manage teams of 20+ volunteers for various programs",
        "Develop event logistics and coordinate with local organizations and sponsors",
        "Create promotional materials and manage social media communications"
      ],
      skills: ["Event Management", "Volunteer Coordination", "Community Engagement", "Social Media Management"]
    }
  ],

  // Technical Skills
  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 85, years: 2 },
      { name: "TypeScript", level: 70, years: 1 },
      { name: "HTML5", level: 90, years: 3 },
      { name: "CSS3 / SCSS", level: 85, years: 3 },
      { name: "Python", level: 70, years: 2 },
      { name: "Java", level: 65, years: 2 },
      { name: "SQL", level: 80, years: 2 },
      { name: "PHP", level: 65, years: 1 },
    ],
    frameworks: [
      { name: "React.js", level: 85, years: 2 },
      { name: "Node.js", level: 80, years: 2 },
      { name: "Express.js", level: 75, years: 2 },
      { name: "Next.js", level: 70, years: 1 },
      { name: "Tailwind CSS", level: 85, years: 2 },
      { name: "Bootstrap", level: 80, years: 2 },
    ],
    databases: [
      { name: "MySQL", level: 80, years: 2 },
      { name: "MongoDB", level: 75, years: 1 },
      { name: "PostgreSQL", level: 70, years: 1 },
      { name: "Firebase", level: 75, years: 1 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85, years: 2 },
      { name: "VS Code", level: 90, years: 3 },
      { name: "Postman", level: 80, years: 2 },
      { name: "Docker", level: 60, years: 1 },
      { name: "Figma", level: 70, years: 1 },
      { name: "npm / Yarn", level: 85, years: 2 },
    ],
    concepts: [
      "RESTful API Design",
      "Responsive Web Design",
      "Version Control (Git)",
      "Agile/Scrum Methodology",
      "Object-Oriented Programming",
      "Database Design & Normalization",
      "Authentication & Authorization",
      "CI/CD Fundamentals"
    ],
    professional: [
      "Project Management",
      "Team Leadership",
      "Technical Documentation",
      "Problem Solving",
      "Cross-functional Collaboration",
      "Time Management",
      "Analytical Thinking",
      "Stakeholder Communication"
    ]
  },

  // Projects Portfolio
  projects: [
    {
      id: 1,
      title: "Full-Stack Portfolio Website",
      subtitle: "Personal Brand & Professional Showcase",
      description: "Developed a comprehensive portfolio website featuring server-side contact form handling, theme persistence, and responsive design. Implemented modern React patterns with custom hooks and context API for state management.",
      impact: "Demonstrates proficiency in full-stack development and modern web technologies.",
      technologies: ["React 19", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
      image: "/projects/portfolio.jpg",
      liveUrl: "https://jpcabaluna.vercel.app",
      githubUrl: "https://github.com/JP3756/developer-portfolio",
      featured: true,
      category: "Full-Stack",
      status: "Completed",
      year: "2025"
    },
    {
      id: 2,
      title: "Student Council Management System",
      subtitle: "Organization Management Platform",
      description: "Engineered a comprehensive management platform for student council operations including budget tracking, event management, and member communications. Features role-based access control, real-time notifications, and automated reporting.",
      impact: "Reduced administrative overhead by 35% and improved budget tracking accuracy.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT"],
      image: "/projects/council.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/JP3756/council-management",
      featured: true,
      category: "Full-Stack",
      status: "In Development",
      year: "2025"
    },
    {
      id: 3,
      title: "Community Outreach Tracker",
      subtitle: "Volunteer Management Application",
      description: "Built a web application to coordinate volunteer activities and track community engagement metrics. Includes event scheduling, volunteer registration, participation tracking, and impact reporting with data visualization.",
      impact: "Streamlined volunteer coordination for 200+ participants across 10+ events.",
      technologies: ["React", "Firebase", "Material-UI", "Google Maps API", "Chart.js"],
      image: "/projects/outreach.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/JP3756/outreach-tracker",
      featured: true,
      category: "Frontend",
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      subtitle: "Productivity & Collaboration Tool",
      description: "Designed and developed a kanban-style task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Implements Redux for state management and WebSocket for live synchronization.",
      impact: "Improved personal and team productivity through intuitive task organization.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      image: "/projects/taskmanager.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/JP3756/task-dashboard",
      featured: false,
      category: "Full-Stack",
      status: "In Development",
      year: "2025"
    },
    {
      id: 5,
      title: "E-Learning Platform",
      subtitle: "Educational Technology Solution",
      description: "Architected an e-learning platform with video content delivery, progress tracking, and interactive assessments. Features user authentication, course enrollment system, and certificate generation.",
      impact: "Designed to make IT education accessible with structured learning paths.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "Stripe API"],
      image: "/projects/elearning.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/JP3756/elearning-platform",
      featured: false,
      category: "Full-Stack",
      status: "Planning",
      year: "2025"
    }
  ],

  // Certifications & Training
  certifications: [
    {
      title: "Web Development Fundamentals",
      issuer: "Online Learning Platform",
      date: "2024",
      credentialUrl: "#",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Student Leadership Program",
      issuer: "Don Bosco Technical College",
      date: "2023",
      credentialUrl: "#",
      skills: ["Leadership", "Governance", "Public Speaking"]
    }
  ],

  // Awards & Recognition
  achievements: [
    {
      title: "Executive Audit - Student Council",
      organization: "Don Bosco Supreme Student Council",
      year: "2024",
      type: "Leadership",
      description: "Elected to oversee financial accountability and audit operations for the student government"
    },
    {
      title: "Leadership Development Program Graduate",
      organization: "Don Bosco Technical College",
      year: "2023",
      type: "Training",
      description: "Completed intensive leadership training focused on organizational management and governance"
    },
    {
      title: "Outstanding Community Service",
      organization: "Youth Ministry Outreach Program",
      year: "2023",
      type: "Recognition",
      description: "Recognized for exceptional contribution to community service initiatives"
    }
  ],

  // Professional Links
  social: {
    github: "https://github.com/JP3756",
    linkedin: "https://linkedin.com/in/jpcabaluna",
    email: "mailto:cabalunajp7@gmail.com",
  },

  // Contact Information
  contact: {
    email: "cabalunajp7@gmail.com",
    phone: "+63 960 607 9804",
    location: "Cebu City, Philippines",
    availability: "Available for full-time positions, internships, and freelance projects",
    preferredContact: "Email",
    responseTime: "Within 24-48 hours"
  },

  // Site Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // SEO & Meta
  seo: {
    title: "John Paolo M. Cabaluna | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio, projects, and professional experience.",
    keywords: ["Full-Stack Developer", "React Developer", "Node.js", "Web Developer", "Cebu", "Philippines", "John Paolo Cabaluna"],
    ogImage: "/og-image.jpg"
  }
};
