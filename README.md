# Mahmoud Mohsen - Android Developer Portfolio

A modern, responsive portfolio website showcasing my skills and experience as an Android Developer. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Interactive Project Gallery**: Click on project cards to view full-screen image galleries with swipe navigation
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Modern UI/UX**: Clean, professional design with Material Design principles
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessibility**: Semantic HTML and proper ARIA labels for screen readers
- **Touch/Swipe Support**: Mobile-friendly gallery navigation

## 📁 Project Structure

```
My Portfolio/
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── main.css           # Main CSS file (imports all others)
│   ├── variables.css      # CSS custom properties
│   ├── base.css           # Base styles and typography
│   ├── navbar.css         # Navigation styles
│   ├── hero.css           # Hero section styles
│   ├── components.css     # Reusable component styles
│   ├── skills.css         # Skills section styles
│   ├── projects.css       # Projects section styles
│   ├── contact.css        # Contact section styles
│   ├── footer.css         # Footer styles
│   ├── animations.css     # Keyframe animations
│   └── responsive.css     # Responsive design styles
├── js/                     # JavaScript files
│   ├── main.js            # Main JavaScript file
│   ├── theme.js           # Theme toggle functionality
│   ├── navigation.js      # Navigation and smooth scroll
│   └── gallery.js         # Interactive project gallery functionality
├── assets/                 # Static assets
│   ├── images/            # Images and photos
│   └── documents/         # PDF documents (CV, certificates)
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Font Awesome**: Icons library
- **Google Fonts**: Inter and JetBrains Mono fonts

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Blue)
- **Secondary**: #06b6d4 (Cyan)
- **Accent**: #f59e0b (Amber)
- **Success**: #10b981 (Emerald)

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700)
- **Monospace Font**: JetBrains Mono (400, 500)

### Spacing
- **Base Unit**: 1rem (16px)
- **Radius**: 12px (small), 16px (medium), 24px (large)

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Customize**
   - Update personal information in `index.html`
   - Replace images in `assets/images/`
   - Update documents in `assets/documents/`
   - Modify colors in `css/variables.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Personal introduction
3. **Education**: Academic background and certificates
4. **Experience**: Professional experience and internships
5. **Skills**: Technical skills and technologies
6. **Projects**: Featured projects with interactive galleries
7. **Contact**: Contact information and social links

## 🖼️ Interactive Project Gallery

The portfolio features an interactive gallery system for showcasing project screenshots:

### Features
- **Click to Open**: Click anywhere on a project card to open the full gallery
- **Keyboard Navigation**: Use arrow keys (← →) to navigate between images
- **Touch/Swipe Support**: Swipe left/right on mobile devices
- **Indicator Navigation**: Click dots at the bottom to jump to specific images
- **Easy Close**: Press Escape or click outside the modal to close
- **Responsive Design**: Works perfectly on all screen sizes

### How to Add New Projects with Gallery
1. Add a project card with the `project-card-enhanced` class
2. Include a `data-images` attribute with an array of image URLs
3. Add preview thumbnails in the `project-gallery-preview` div
4. The gallery will automatically work with the provided images

## 🔧 Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Create corresponding CSS in appropriate file
3. Update navigation links

### Modifying Colors
Edit the CSS custom properties in `css/variables.css`:

```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    /* ... other variables */
}
```

### Adding Animations
Add new keyframes in `css/animations.css`:

```css
@keyframes yourAnimation {
    from { /* start state */ }
    to { /* end state */ }
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Contact

- **Email**: mahmoudmohsen12344@gmail.com
- **LinkedIn**: [Mahmoud Mohsen](https://www.linkedin.com/in/mahmoud-mohsen-28b35722a/)
- **GitHub**: [@Mahmoud12344](https://github.com/Mahmoud12344)
- **Phone**: +20 106 848 8364

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Icons8](https://icons8.com/) for additional icons
- Material Design principles for UI/UX inspiration

---

**Made with ❤️ by Mahmoud Mohsen**