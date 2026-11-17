# The Java Cup

# ☕ The JAVA CUP

A modern, responsive coffee shop website built with React + TypeScript + Vite.
Browse the menu, learn about us, and switch between Dark / Light mode.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

## ✨ Features

- **Home, About, Menu & Contact pages** with React Router
- **Dark / Light Theme Toggle** - saved in `localStorage`
- **Responsive Design** - works on mobile, tablet & desktop
- **Hamburger Menu** for mobile navigation
- **Modern UI** with custom CSS (no framework)

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM (HashRouter)
- Pure CSS

## 🚀 How To Run

```bash
# Install packages
npm install

# Run in development
npm run dev

# Build for production
npm run build


📁 Project Structurejavascriptsrc/
├── App.tsx              # Router + Navbar + Theme logic
├── main.tsx             # Entry point
├── css/
│   ├── main.css         # Main styles + body.light
│   ├── variables.css    # Colors & variables
│   ├── header.css       # Navbar
│   ├── footer.css       # Footer
│   ├── hero.css         # Hero section
│   ├── home.css         # Home page
│   ├── about.css        # About page
│   ├── products.css     # Menu page
│   ├── contact.css      # Contact page
│   └── responsive.css   # Mobile styles
└── pages/
    ├── home.tsx
    ├── About.tsx
    ├── Products.tsx
    └── Contact.tsx🌙 Theme Toggle
Click the 🌙 / ☀️ button in the navbar to switch themes.
Your choice is saved, so it stays even after refresh.
Logic in App.tsx:tsxuseEffect(() => {
  const t = document.getElementById('themeToggle')
  // ... toggle body.light + localStorage
}, [])And styles in css/main.css:cssbody.light { background: #fdf6ee !important; }👩‍💻 Author
Sara Al Wazir Hadidi
Built as a learning project for React + Vite.
📄 License
Free to use for learning.