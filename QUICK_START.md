# Quick Start Guide - Updated Portfolio

## 🎯 What Changed?

Your portfolio has been significantly enhanced with:
- ✅ New Education section showcasing Don Bosco
- ✅ New Experience section highlighting leadership roles
- ✅ New Achievements section for recognition
- ✅ Enhanced skills with database proficiency
- ✅ Improved project descriptions
- ✅ Updated social media links (Facebook instead of Twitter)
- ✅ Resume download button in hero section
- ✅ Mission statement in About section

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd developer-portfolio
npm install
```

### 2. Start Development Server
```bash
# Start React app (Frontend)
npm start

# In a new terminal, start Express server (Backend)
npm run server

# OR run both simultaneously
npm run dev
```

The app will open at http://localhost:3000

### 3. Add Your Assets

#### Required Images:
Place these in the `/public` folder:

- **avatar.jpg** - Your professional photo (recommended: 400x400px)
- **resume.pdf** - Your resume/CV file

Place these in `/public/projects/`:
- **portfolio.jpg** - Screenshot of your portfolio
- **council.jpg** - Student council management system
- **outreach.jpg** - Community outreach tracker
- **taskmanager.jpg** - Task management app
- **elearning.jpg** - E-learning platform
- **blog.jpg** - Personal blog

> 💡 Tip: Use professional, high-quality images (at least 800x600px)

## 📝 Customize Your Content

All content is in one place: [src/data/portfolioData.js](src/data/portfolioData.js)

### Update Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your Tagline",
  email: "your.email@gmail.com",
  // ... other fields
}
```

### Update Skills
Adjust skill levels (0-100):
```javascript
skills: {
  languages: [
    { name: "JavaScript (ES6+)", level: 80 },
    // ... add or modify
  ],
  // ... other categories
}
```

### Update Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    liveUrl: "https://your-demo.com",
    githubUrl: "https://github.com/yourusername/repo",
    // ...
  }
]
```

### Update Social Links
```javascript
social: {
  github: "https://github.com/JP3756",
  linkedin: "https://linkedin.com/in/jpcabaluna",
  facebook: "https://facebook.com/jp.cabaluna",
  instagram: "https://instagram.com/yourusername", // Optional
  email: "mailto:your.email@gmail.com",
}
```

## 🎨 Customize Styling

### Colors
Edit [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your custom colors
  }
}
```

### Fonts
Edit [tailwind.config.js](tailwind.config.js):
```javascript
fontFamily: {
  display: ['Poppins', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

## 🔧 Configuration Files

### Key Files to Know:
- **src/data/portfolioData.js** - All your content
- **src/App.js** - Main component structure
- **tailwind.config.js** - Design tokens and styling
- **package.json** - Dependencies and scripts
- **server.js** - Backend for contact form

## 📱 Components Structure

```
src/components/
├── Hero.js           - Landing section with CTA
├── About.js          - About me section with mission
├── Education.js      - Educational background (NEW)
├── Experience.js     - Work/leadership experience (NEW)
├── Skills.js         - Technical & soft skills
├── Projects.js       - Project portfolio
├── Achievements.js   - Awards & recognition (NEW)
├── Contact.js        - Contact form
├── Footer.js         - Footer with links
└── Navbar.js         - Navigation bar
```

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages
```bash
# Update homepage in package.json
"homepage": "https://yourusername.github.io/portfolio"

# Deploy
npm run deploy
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository on Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for errors
npm run build

# If errors, update dependencies
npm update
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [AOS Animation](https://michalsnik.github.io/aos/)

## 🎯 Next Steps

1. ✅ Add your assets (images, resume)
2. ✅ Review and update content in portfolioData.js
3. ✅ Test all sections and links
4. ✅ Deploy to your preferred platform
5. ✅ Share with your network!

## 💡 Pro Tips

### For Best Results:
- Use high-quality images (compress with TinyPNG)
- Keep descriptions concise and impactful
- Update projects regularly with new work
- Test on multiple devices before deploying
- Share on LinkedIn for maximum visibility

### Content Writing Tips:
- Use action verbs (Built, Developed, Led, Created)
- Quantify achievements when possible
- Keep taglines under 15 words
- Focus on impact and results
- Show personality while staying professional

## 📧 Need Help?

Common issues and solutions:

**Q: Images not showing?**
A: Make sure images are in `/public` folder and paths match in portfolioData.js

**Q: Dark mode not working?**
A: Check ThemeContext.js and ensure dark: variants are in Tailwind classes

**Q: Contact form not sending?**
A: Configure email settings in server.js and .env file

**Q: Build fails?**
A: Check console for specific errors, often related to missing dependencies

## 🎉 You're All Set!

Your enhanced portfolio is ready to impress! Remember to:
- Keep it updated with new projects
- Adjust skill levels as you improve
- Add achievements as you earn them
- Share it proudly with your network

**Good luck with your portfolio!** 🚀

---

For detailed improvements, see [IMPROVEMENTS.md](IMPROVEMENTS.md)
For launch checklist, see [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)
