# Architectural Aluminium Website

A premium, world-class website for Zimbabwe's leading aluminium fabrication company built with React, Vite, Tailwind CSS, Framer Motion, and more.

## 🚀 Features

- **Modern Design**: Luxury aesthetic with black/silver/gold colour palette
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimised**: Page-level SEO with React Helmet Async
- **Search**: Global search functionality (Cmd/Ctrl + K)
- **Dark Theme**: Elegant dark theme with metallic accents
- **Cookie Consent**: GDPR-compliant cookie consent modal
- **Fast**: Optimised Vite build for quick loading

## 📄 Pages

1. **Home** - Hero section, services preview, featured projects, testimonials
2. **About** - Company history, team, values, certifications
3. **Services** - Detailed service offerings with interactive tabs
4. **Projects** - Portfolio showcase with filtering
5. **Gallery** - Masonry/grid image gallery with lightbox
6. **Careers** - Job listings with expandable details
7. **News** - Blog/news articles with categories and pagination
8. **Contact** - Contact form, map, and information
9. **404** - Custom not found page

## 🛠 Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Router DOM
- Lucide React (icons)
- Sonner (toast notifications)
- React Helmet Async (SEO)

## 🎨 Design System

### Colours
- **arch-black**: #0a0a0a
- **arch-charcoal**: #1a1a1a
- **arch-graphite**: #2a2a2a
- **arch-silver**: #c0c0c0
- **arch-gold**: #d4af37
- **arch-yellow**: #f5b800

### Fonts
- **Display**: Syne
- **Body**: Outfit
- **Mono**: Space Mono

## 📦 Installation

\`\`\`bash
# Extract the project
unzip architectural-aluminium-website.zip
cd architectural-aluminium

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 📂 Project Structure

\`\`\`
architectural-aluminium/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   │   ├── AnimatedComponents.jsx
│   │   ├── Footer.jsx
│   │   ├── Modals.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SearchModal.jsx
│   │   └── SEO.jsx
│   ├── context/         # React context
│   │   └── SearchContext.jsx
│   ├── data/            # Content data
│   │   └── content.js
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   │   ├── About.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── News.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── utils/           # Utility functions
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
\`\`\`

## 🔧 Customisation

### Replacing Images
All placeholder images use Unsplash. Replace with actual company images by:
1. Adding images to \`src/assets/\`
2. Updating image imports/URLs in components
3. Comments in code indicate vision for each image placement

### Updating Content
Edit \`src/data/content.js\` to update:
- Company information
- Services
- Projects
- Team members
- Testimonials
- Contact details

### Modifying Styles
- Global styles: \`src/index.css\`
- Component styles: Individual component files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ for Architectural Aluminium Zimbabwe
