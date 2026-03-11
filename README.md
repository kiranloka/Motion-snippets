# Motion Snippets

A beautiful copy-paste library of text animations built with Motion React + Tailwind CSS.

![Motion Snippets](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square)
![Motion React](https://img.shields.io/badge/Motion-11-ff6b6b?style=flat-square)

## Features

- 🎨 **12+ Animation Presets** - Beautiful text animations ready to copy-paste
- 🔄 **Copy to Clipboard** - One-click copy for production-ready code
- 🌓 **Dark/Light Theme** - Toggle between themes with smooth transitions
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ⚡ **60fps Smooth** - All animations run at 60 frames per second
- 🎯 **Zero Dependencies** - Just copy and use in your project

## Animation Presets

1. Fade Up + Stagger - Elegant fade in with upward motion
2. Slide Left - Smooth slide from right to left
3. Drop from Top - Bouncy spring drop animation
4. Scale Pulse - Gentle scale with pulse effect
5. Typewriter - Classic typing effect
6. Reveal Underline - Text reveal with animated underline
7. 3D Rotate In - Three-dimensional rotation entrance
8. Glow Burst - Text with glowing effect
9. Wave - Gentle wave motion
10. Flip Cards - 3D flip animation
11. Gradient Chase - Moving gradient background
12. Blur Reveal - Smooth blur to clear transition

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd motion-snippets

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000/motion-snippets](http://localhost:3000/motion-snippets) in your browser.

## Usage

### 1. Copy an Animation

Click the "Copy" button on any card to copy the JSX code to your clipboard.

### 2. Use in Your Project

```tsx
import { motion } from 'motion/react'

// Paste the copied code
<motion.span
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-3xl font-bold"
>
  Your Text
</motion.span>
```

### 3. Customize

Modify the `initial`, `animate`, and `transition` properties to fit your needs. You can also add your own CSS classes.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Motion React 11** - Animation library for React
- **TypeScript** - Type-safe JavaScript
- **Inter Font** - Clean, modern typography

## Project Structure

```
motion-snippets/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Redirect to motion-snippets
│   ├── globals.css         # Global styles
│   └── motion-snippets/
│       └── page.tsx        # Main page
├── components/
│   ├── ui/
│   │   ├── theme-toggle.tsx    # Theme toggle button
│   │   └── copy-button.tsx     # Copy to clipboard button
│   ├── animations/
│   │   ├── text-preview-card.tsx  # Animation preview card
│   │   └── presets.ts            # Animation configurations
│   └── hero/
│       └── hero-section.tsx     # Hero section
└── lib/
    ├── utils.ts            # Utility functions (cn)
    └── theme.tsx           # Theme context provider
```

## Theme Customization

The color palette can be customized in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0f0f23',
        secondary: '#1e1b4b',
        accent: '#00f5d4',
      },
    },
  },
}
```

## License

MIT License - feel free to use in your projects!

---

Built with ❤️ using Motion React + Tailwind CSS
