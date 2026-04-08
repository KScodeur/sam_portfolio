# KScodeur Portfolio

A modern, responsive portfolio website built with Next.js, featuring multi-language support (EN/FR/ES), smooth animations, and a sleek design.

![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13, React 18, and Tailwind CSS
- **Multi-language Support**: English (default), French, and Spanish translations
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Performance Optimized**: SWC minification and React Strict Mode enabled
- **Modern UI**: Dark theme with accent colors and particle effects
- **Interactive Components**: Animated sliders, hover effects, and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 13.4
- **UI Library**: React 18.2
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.18
- **Icons**: React Icons 4.8
- **Internationalization**: next-i18next 15.4
- **Slider Components**: Swiper 9.4
- **Particle Effects**: react-tsparticles 2.9

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sam_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## 🌍 Multi-language Support

This portfolio supports three languages:
- **English** (default)
- **French**
- **Spanish**

Language files are located in `public/locales/` directory. To add or modify translations, edit the corresponding `common.json` files.

### Changing Language

Users can switch languages using the language selector in the navigation menu. The default language is English, but this can be changed in `next-i18next.config.js`:

```javascript
module.exports = {
  i18n: {
    defaultLocale: 'en', // Change to 'fr' or 'es' for default language
    locales: ['en', 'fr', 'es'],
  },
}
```

## 📁 Project Structure

```
sam_portfolio/
├── components/          # React components
│   ├── Avatar.js
│   ├── Header.js
│   ├── Nav.js
│   ├── ServiceSlider.js
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── about/
│   ├── services/
│   ├── work/
│   └── contact/
├── public/             # Static assets
│   └── locales/        # Translation files
│       ├── en/
│       ├── fr/
│       └── es/
├── styles/             # Global styles
├── next-i18next.config.js  # i18next configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: '#131424',    // Main background color
  secondary: '#393A47',  // Secondary color
  accent: '#F13024',     // Accent/highlight color
}
```

### Content

- **Personal Information**: Update your name, title, and description in the translation files
- **Services**: Modify service offerings in `pages/services/index.js` and translation files
- **Projects**: Add your work in `pages/work/index.js` and `components/WorkSlider.js`
- **Contact**: Update contact information and social links in `components/Socials.js`

## 🚀 Build and Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can also be deployed to:
- Netlify
- AWS Amplify
- Any Node.js hosting service

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork it and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**KScodeur** - Full Stack Web Developer
