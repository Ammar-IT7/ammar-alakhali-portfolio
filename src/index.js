// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Preload critical fonts
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Tajawal:wght@400;500;700&display=swap';
fontPreload.as = 'style';
document.head.appendChild(fontPreload);

// Load the fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = fontPreload.href;
document.head.appendChild(fontLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Register service worker for offline capability
serviceWorkerRegistration.register();

// Measure performance
reportWebVitals(console.log);