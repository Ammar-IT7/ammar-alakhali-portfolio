// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { useState, useEffect, useContext } from 'react';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Wrapper component to access language context
function AppContent() {
  const { language } = useContext(LanguageContext);
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'dark'
  );
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    // Apply theme class to body for additional styling opportunities
    document.body.className = theme;
    
    // Set the dir attribute based on language
    const isRTL = language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [theme, language]);

  // Create theme with current RTL state
  const currentTheme = {
    ...(theme === 'light' ? lightTheme : darkTheme),
    isRTL: language === 'ar'
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router basename="/ammar-alakhali-portfolio">
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
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