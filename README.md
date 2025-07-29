# Hill Icon Website

A modern, responsive website for Hill Icon - a premium accommodation, transport, and tour service provider in Skardu, Pakistan.

## 🏔️ About Hill Icon

Hill Icon provides exceptional services in the breathtaking Skardu region, offering:
- **Premium Accommodation**: Luxury rooms with mountain views
- **Reliable Transport**: Professional drivers and vehicles for all terrains
- **Guided Tours**: Expert-led tours to natural wonders and cultural sites

## 🚀 Features

- **Modern Design**: Clean, minimalistic black and white aesthetic
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Booking**: WhatsApp integration for seamless inquiries
- **Service Pages**: Detailed information about rooms, transport, and tours
- **Contact Integration**: Multiple ways to get in touch
- **Smooth Navigation**: Intuitive user experience with scroll effects

## 🛠️ Technology Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router DOM** for navigation
- **CSS3** with custom properties and modern layouts
- **Responsive Design** with mobile-first approach

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
