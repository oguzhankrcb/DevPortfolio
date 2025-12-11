# 🚀 DevPortfolio - Modern Developer Portfolio

![image](https://github.com/user-attachments/assets/43aceb34-41e9-433a-9bef-3297cb564df7)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8.svg)](https://tailwindcss.com/)

[![Live 🔗](https://img.shields.io/badge/Live-karacabay.com-blue?style=for-the-badge&logo=linktree&logoColor=white)](https://karacabay.com)

## ✨ Features

DevPortfolio is a modern, fully customizable portfolio website built with Next.js and Tailwind CSS. It's designed to help developers showcase their skills, projects, and experience in a clean and professional way.

- 📱 **Fully Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Lightning-fast loading with Next.js optimizations
- 🧩 **Modular Design** - Easy to add, remove, or rearrange sections
- ⚙️ **Dynamic Configuration** - Update content without touching code
- 🎯 **SEO Friendly** - Built with best practices for search engine visibility
- 🔄 **Dynamic Section Backgrounds** - Automatic alternating background colors
- 🖼️ **Smart Image Handling** - Graceful fallbacks for missing images
- 💻 **Syntax Highlighting** - Beautiful code display in your projects
- 🧠 **TypeScript Support** - Full type safety for a robust development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: Custom React hooks
- **Deployment**: Vercel/Netlify ready

## 📋 Sections

The portfolio includes the following sections, all of which can be toggled on/off via configuration:

- 🏠 **Hero** - Eye-catching introduction with animated typing effect
- 👤 **About** - Your background, skills and achievements
- 🛠️ **Skills** - Visual representation of your technical expertise
- 💼 **Projects** - Showcase of your work with filtering capabilities
- 📈 **Experience** - Your professional journey in a timeline layout
- 📬 **Contact** - Form and information for potential employers or clients
- 👣 **Footer** - Social links, copyright and additional navigation

## 🔧 Configuration System

One of the core features of DevPortfolio is its **modular configuration system** that makes updating content incredibly easy:

```
src/
├── config/
│   ├── index.ts           # Central export point
│   ├── site.ts            # Main site config (section visibility, socials)
│   ├── heroConfig.ts      # Hero section text and button content
│   ├── aboutConfig.ts     # About section text, paragraphs and achievements
│   ├── skillsConfig.ts    # Skills with proficiency percentages
│   ├── projectsConfig.ts  # Project details, categories, and metadata
│   ├── experienceConfig.ts # Work experience entries
│   ├── contactConfig.ts   # Contact form placeholders and contact info
│   └── footerConfig.ts    # Footer text, links and copyright info
```

Simply edit these files to update your portfolio content without touching any component code!

## 🎨 Dynamic Section Backgrounds

DevPortfolio features an intelligent background system that:

- Tracks visible sections through the main page component
- Passes an 'isOdd' prop to each section based on its position
- Each section determines its background color based on this prop

This ensures that background colors alternate correctly (white/gray) even when some sections are hidden through the configuration.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/devportfolio.git
   cd devportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

## 🔄 Customization

### 1. Basic Information

Edit `src/config/site.ts` to update:
- Portfolio name and description
- Social media links
- Contact information
- Section visibility

### 2. Content Sections

Edit the corresponding config file to update each section:
- `heroConfig.ts` - Main headline and intro
- `aboutConfig.ts` - Your bio and achievements
- `skillsConfig.ts` - Technical skills and proficiency
- `projectsConfig.ts` - Your portfolio projects
- `experienceConfig.ts` - Work history
- `contactConfig.ts` - Contact form and details
- `footerConfig.ts` - Footer text and links

### 3. Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`.

## 💡 Smart Features

### Typing Animation
The hero section features a clean typing animation that automatically restarts after completion.

### Project Image Error Handling
The projects gallery includes smart image error handling - if an image fails to load, the image container is hidden rather than showing a broken image.

### Dynamic Configuration
All texts, URLs, and section settings can be controlled through configuration files, allowing for easy updates without digging into component code.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- Icons by [Heroicons](https://heroicons.com/)
- Inspired by modern developer portfolios and best design practices

---

## 🚧 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/oguzhankrcb/DevPortfolio/issues).
