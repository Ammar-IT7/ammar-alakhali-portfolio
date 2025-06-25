// src/App.js
import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/error/ErrorBoundary';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageContainer = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: calc(100vh - 160px); /* Account for navbar and footer */
`;

// Wrapper component to access language context
function AppContent() {
  const { language } = useContext(LanguageContext);
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.add('theme-transition');
  };
  
  useEffect(() => {
    // Apply theme class to body for additional styling opportunities
    document.body.className = theme;
    document.body.classList.add('theme-transition');
    
    // Set the dir attribute based on language
    const isRTL = language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Cleanup transition class after animation completes
    const transitionTimeout = setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
    
    return () => clearTimeout(transitionTimeout);
  }, [theme, language]);

  // Create theme with current RTL state
  const currentTheme = {
    ...(theme === 'light' ? lightTheme : darkTheme),
    isRTL: language === 'ar'
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router basename="/">
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <ErrorBoundary>
          <PageContainer>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </PageContainer>
        </ErrorBoundary>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;