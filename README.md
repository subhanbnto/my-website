# Subhan Hanif - Portfolio Website

A modern, interactive portfolio website showcasing my work as a Full Stack Developer, Web Developer, and Software Engineer. Built with React, Vite, and Node.js, featuring smooth animations, responsive design, and a functional contact form with email integration.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)

## 🎨 Features

- **Modern Design**: Dark theme with vibrant purple/cyan gradient accents inspired by code editors
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile, tablet, and desktop
- **Animated Background**: Particle system with connecting lines and floating gradient orbs
- **Typewriter Effect**: Dynamic typing animation in the hero section cycling through roles
- **Smooth Scrolling**: Seamless navigation between sections with active section highlighting
- **Glassmorphism**: Modern glass-effect cards throughout the website
- **Contact Form**: Functional contact form with backend email integration using Zoho Mail
- **Testimonials Carousel**: Horizontal scrolling testimonials section with auto-scroll
- **Skills Visualization**: Interactive skill bars with progress indicators and icons
- **Project Showcase**: Featured projects with detailed descriptions and tech stacks

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Framer Motion 12.28.1** - Animation library
- **React Icons 5.5.0** - Icon library
- **CSS3** - Custom styling with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.18.2** - Web framework
- **Nodemailer 6.9.7** - Email service integration
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.3.1** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Zoho Mail account (for contact form functionality)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhanbnto/my-website.git
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (optional, for API URL)
   ```bash
   # Create .env file in root directory
   VITE_API_URL=http://localhost:3001
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Zoho Mail**
   - Log in to your Zoho account
   - Go to [App Passwords](https://accounts.zoho.com/home#security/app-passwords)
   - Generate a new App Password
   - Copy the generated password

4. **Create `.env` file**
   ```bash
   # Copy the example file
   cp env.example .env
   ```
   
   Update `.env` with your Zoho Mail credentials:
   ```env
   PORT=3001
   EMAIL_HOST=smtp.zohocloud.ca
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=your-email@subhan.ca
   EMAIL_PASS=your-app-password-here
   CONTACT_EMAIL=info@subhan.ca
   SEND_CONFIRMATION=true
   ```

5. **Start backend server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3001`

## 🛠️ Development

### Running Both Servers

You'll need two terminal windows:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```

### Available Scripts

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Backend
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run test-email` - Test email configuration

## 📁 Project Structure

```
my-website/
├── public/                 # Static assets
│   ├── my.svg             # Custom favicon
│   ├── profile.png        # Profile picture
│   └── resume.pdf         # Resume file
│
├── server/                # Backend server
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   ├── .env              # Environment variables (not in git)
│   └── .gitignore        # Server gitignore
│
├── src/                   # Frontend source code
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── AnimatedBackground.jsx  # Particle background
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Experience.jsx # Work experience
│   │   ├── Footer.jsx    # Footer
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Projects.jsx  # Featured projects
│   │   ├── Skills.jsx    # Technical skills
│   │   └── Testimonials.jsx  # Client testimonials
│   ├── App.jsx           # Main app component
│   ├── App.css           # App styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
│
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Frontend dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Color Scheme

The website uses a custom dark theme with vibrant accents:

- **Primary Background**: `#0a0a0f` (Dark)
- **Secondary Background**: `#12121a`
- **Accent Purple**: `#8b5cf6`
- **Accent Cyan**: `#06b6d4`
- **Accent Pink**: `#ec4899`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa`

## 📝 Sections

1. **Home** - Hero section with typewriter effect and introduction
2. **About** - Personal background, education, and highlights with profile picture
3. **Experience** - Professional work experience timeline (6 positions)
4. **Projects** - Featured projects with descriptions and tech stacks
5. **Skills** - Technical skills organized by category with progress bars
6. **Testimonials** - Client testimonials with ratings in horizontal scroll
7. **Contact** - Contact form with email integration and social links

## 🔧 Configuration

### Frontend Environment Variables

Create `.env` in the root directory:
```env
VITE_API_URL=http://localhost:3001
```

For production, update to your backend server URL.

### Backend Environment Variables

Create `server/.env`:
```env
PORT=3001
EMAIL_HOST=smtp.zohocloud.ca
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=your-email@subhan.ca
EMAIL_PASS=your-zoho-app-password
CONTACT_EMAIL=info@subhan.ca
SEND_CONFIRMATION=true
```

## 🚀 Deployment

### Frontend Deployment

Build for production:
```bash
npm run build
```

The `dist` folder contains the production-ready files. Deploy to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **Any static hosting**: Upload the `dist` folder contents

### Backend Deployment

Deploy the `server` folder to:
- **Heroku**: Add a Procfile and deploy
- **Railway**: Connect your repo and set environment variables
- **Render**: Deploy as a web service
- **DigitalOcean**: Use App Platform or Droplet
- **AWS/Google Cloud/Azure**: Deploy to their respective platforms

**Important**: Set all environment variables in your hosting platform's dashboard.

## 📧 Contact Form Setup

The contact form requires Zoho Mail configuration:

1. **Generate App Password**
   - Go to: https://accounts.zoho.com/home#security/app-passwords
   - Generate a new App Password
   - Use this in `EMAIL_PASS` (not your regular password)

2. **Enable POP/IMAP**
   - Go to: https://mail.zoho.com
   - Settings → Mail → POP/IMAP Access
   - Enable "POP/IMAP Access"

3. **Test Configuration**
   ```bash
   cd server
   npm run test-email
   ```

## 🎯 Customization

### Update Personal Information

- **Profile Picture**: Replace `public/profile.png`
- **Resume**: Replace `public/resume.pdf`
- **Favicon**: Replace `public/my.svg`
- **About Section**: Edit `src/components/About.jsx`
- **Experience**: Update `src/components/Experience.jsx`
- **Projects**: Modify `src/components/Projects.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Testimonials**: Update `src/components/Testimonials.jsx`
- **Contact Info**: Modify `src/components/Contact.jsx` and `src/components/Hero.jsx`

### Change Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-purple: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-pink: #ec4899;
  /* ... */
}
```

## 🐛 Troubleshooting

### Contact Form Not Working

1. Check backend server is running
2. Verify `.env` file has correct Zoho credentials
3. Ensure you're using an App Password (not regular password)
4. Test email configuration: `cd server && npm run test-email`

### Build Errors

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```

### Port Already in Use

Change the port in `vite.config.js` or `server/.env`

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Subhan Hanif**
- Website: [Portfolio](https://subhanhanif.dev)
- Email: info@subhan.ca
- LinkedIn: [subhanhanif521](https://www.linkedin.com/in/subhanhanif521/)
- GitHub: [@subhanbnto](https://github.com/subhanbnto)

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you find this project helpful, please consider giving it a star!
