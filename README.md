# Francis Abainza's Portfolio Website 2025

A modern, responsive portfolio website built with Next.js 15, showcasing my web development projects, skills, and professional experience. This portfolio features a sleek dark theme with cyan accents, interactive components, and a comprehensive showcase of my work.

## 🚀 Live Demo

Visit the live website: [Portfolio Website](https://your-portfolio-url.com)

## ✨ Features

- **Modern Design**: Clean, professional layout with dark theme and cyan accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Project Showcase**: Detailed portfolio of web development projects
- **Technology Stack**: Comprehensive display of skills and technologies
- **Contact Information**: Easy access to contact details and social media
- **Resume Download**: PDF resume available for download
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Styling & UI
- **Tailwind CSS v4** - Latest version with enhanced features
- **Custom CSS** - Custom gradients and animations
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Turbopack** - Fast development builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website-2025.git
   cd portfolio-website-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding New Projects

1. Add project images to `public/works/`
2. Update the `works` array in `src/data/works.ts`:

```typescript
{
  title: "Your Project Title",
  description: "Project description",
  stack: ["Technology1", "Technology2"],
  url: "https://your-project-url.com",
  src: "/works/your-project-image.png",
  alt: "Description of your project image",
}
```

### Modifying Content

- **Home page**: Edit `src/app/page.tsx`
- **Projects page**: Edit `src/app/works/page.tsx`
- **Resume page**: Edit `src/app/resume/page.tsx`
- **Navigation**: Edit `src/components/main-navigation.tsx`

### Styling

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind CSS classes
- **Custom components**: Edit files in `src/components/ui/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📱 Features Overview

### Home Page
- Hero section with introduction
- About section with skills
- Interactive project slideshow
- Technology stack showcase
- Contact information and social links

### Works Page
- Grid layout of all projects
- Project cards with descriptions
- Technology stack for each project
- Direct links to live demos

### Resume Page
- PDF resume viewer
- Download functionality
- Professional presentation

## 🎯 Key Projects Showcased

1. **Last Minute Learner** - AI-powered study tool
2. **Exora** - Portfolio platform for creators
3. **Don't Say The Same Thing As Me** - AI-powered word game
4. **CPU Scheduling Calculator** - Educational tool
5. **Memory Game** - Interactive browser game
6. **Rock Paper Scissors** - Classic game implementation

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Francis Abainza**
- Email: francisabainza714@gmail.com
- Phone: (+63) 985 122 0427
- Location: San Pedro, Laguna, Philippines
- GitHub: [@FrancisAbainza](https://github.com/FrancisAbainza)
- LinkedIn: [Francis Abainza](https://www.linkedin.com/in/francis-abainza-8813a0282/)
- Facebook: [Francis Rafael Abainza](https://www.facebook.com/francisrafael.abainza/)

---

⭐ If you found this portfolio helpful, please give it a star!
