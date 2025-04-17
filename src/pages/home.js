// src/pages/Home.js
import React, { useEffect, useRef, Suspense, lazy, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Hero from '../components/sections/Hero';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';

// Lazy load components with named exports for better debugging
const About = lazy(() => import('../components/sections/AboutSection')
  .then(module => ({ default: module.AboutSection })));
const Skills = lazy(() => import('../components/sections/Skills')
  .then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('../components/sections/ProjectsSection')
  .then(module => ({ default: module.ProjectsSection })));
const Contact = lazy(() => import('../components/sections/ContactSection')
  .then(module => ({ default: module.ContactSection })));

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const progressAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg, 
    ${({ theme }) => theme.primary}, 
    ${({ theme }) => theme.secondary}, 
    ${({ theme }) => theme.primary}
  );
  background-size: 200% 200%;
  animation: ${progressAnimation} 3s ease infinite;
  transform-origin: 0%;
  z-index: 1000;
  filter: drop-shadow(0 0 5px ${({ theme }) => theme.primary}80);
`;

const SectionWrapper = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 80px 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.background}, transparent);
    opacity: 0.7;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const LoadingBar = styled.div`
  width: min(200px, 80%);
  height: 6px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.backgroundAlt},
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.backgroundAlt}
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
    border-radius: 4px;
  }
`;

const LoadingText = styled.p`
  font-size: clamp(14px, 3vw, 16px);
  color: ${({ theme }) => theme.textAlt};
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  outline: none;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}80;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
`;

const Home = () => {
  const { scrollYProgress } = useScroll();
  const homeRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComponents, setLoadedComponents] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false
  });
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'var(--background)',
          flexDirection: 'column',
          gap: '30px'
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/logo.svg" 
            alt="Logo" 
            width="80" 
            height="80" 
            loading="eager"
          />
        </motion.div>
        <LoadingBar />
        <LoadingText>Loading amazing experiences...</LoadingText>
      </motion.div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Enova Studio | UI/UX Design & Web Development</title>
        <meta name="description" content="Enova Studio specializes in UI/UX design, logo creation, and website development with innovative solutions for businesses of all sizes." />
        <meta name="keywords" content="UI/UX design, web development, branding, digital solutions" />
        <meta property="og:title" content="Enova Studio | UI/UX Design & Web Development" />
        <meta property="og:description" content="Creative design studio specializing in UI/UX, logos, and websites" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enovastudio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4a25aa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/logo.svg" />
      </Helmet>
      
      <ProgressBar style={{ scaleX: scrollYProgress }} />
      
      <motion.div 
        ref={homeRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        
        <Suspense fallback={
          <LoadingFallback>
            <LoadingBar />
            <LoadingText>Loading content...</LoadingText>
          </LoadingFallback>
        }>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <About />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Skills />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Projects />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Contact />
            </SectionWrapper>
          </motion.div>
        </Suspense>
      </motion.div>
      
      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;