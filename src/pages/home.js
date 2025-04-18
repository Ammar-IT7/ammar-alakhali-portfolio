// src/pages/Home.js
import React, { useEffect, useRef, Suspense, lazy, useState, useCallback, useContext } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Hero from '../components/sections/Hero';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';
import { LanguageContext } from '../contexts/LanguageContext';

// Lazy load components with named exports for better debugging
const About = lazy(() => import('../components/sections/AboutSection'));
const Skills = lazy(() => import('../components/sections/Skills'));
const Projects = lazy(() => import('../components/sections/ProjectsSection'));
const Contact = lazy(() => import('../components/sections/ContactSection'));

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const progressAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
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
  will-change: transform;
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

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 85%;
  max-width: 400px;
  padding: 30px;
  background: ${({ theme }) => `${theme.backgroundAlt}30`};
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.p`
  font-size: clamp(15px, 3vw, 18px);
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
`;

const LoadingSubtext = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textAlt};
  margin: 0;
  text-align: center;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const LoadingProgress = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => `${theme.backgroundAlt}80`};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress || 0}%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    border-radius: 20px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const LoadingPercentage = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-top: 15px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transform-origin: center;
  
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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const { t } = useContext(LanguageContext);
  
  // Set initial loading message using translation
  useEffect(() => {
    setLoadingMessage(t('home.loading.preparing'));
  }, [t]);
  
  // Track loading progress with dynamic messages
  useEffect(() => {
    let timer;
    let progress = 0;
    
    const incrementProgress = () => {
      if (progress < 100) {
        // More natural progress increment with slowdown at the end
        const increment = progress < 60 
          ? Math.random() * 12 
          : progress < 85 
            ? Math.random() * 6 
            : Math.random() * 2;
            
        progress += increment;
        
        // Update loading message based on progress
        if (progress < 20) setLoadingMessage(t('home.loading.preparing'));
        else if (progress < 40) setLoadingMessage(t('home.loading.loadingElements'));
        else if (progress < 60) setLoadingMessage(t('home.loading.settingAnimations'));
        else if (progress < 80) setLoadingMessage(t('home.loading.optimizing'));
        else if (progress < 95) setLoadingMessage(t('home.loading.almostReady'));
        else setLoadingMessage(t('home.loading.finalTouches'));
        
        if (progress > 100) progress = 100;
        setLoadingProgress(progress);
        
        if (progress < 100) {
          // Variable timing for more natural loading feel
          const delay = 100 + Math.random() * 220 + (progress > 85 ? 400 : 0);
          timer = setTimeout(incrementProgress, delay);
        } else {
          setTimeout(() => setIsLoading(false), 500);
        }
      }
    };
    
    timer = setTimeout(incrementProgress, 400);
    
    return () => {
      clearTimeout(timer);
    };
  }, [t]);
  
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
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
          padding: '20px'
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <LoadingContainer>
            <LoadingText>{loadingMessage}</LoadingText>
            <LoadingProgress progress={loadingProgress} />
            <LoadingPercentage>{Math.round(loadingProgress)}%</LoadingPercentage>
            <LoadingSubtext>
              {loadingProgress < 100 
                ? t('home.loading.pleaseWait')
                : t('home.loading.readyToLaunch')
              }
            </LoadingSubtext>
          </LoadingContainer>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
        <meta name="keywords" content={t('home.meta.keywords')} />
        <meta property="og:title" content={t('home.meta.ogTitle')} />
        <meta property="og:description" content={t('home.meta.ogDescription')} />
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
            <LoadingContainer>
              <LoadingText>{t('home.loading.loadingContent')}</LoadingText>
              <LoadingProgress progress={70} />
              <LoadingPercentage>70%</LoadingPercentage>
              <LoadingSubtext>{t('home.loading.almostThere')}</LoadingSubtext>
            </LoadingContainer>
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
            aria-label={t('home.scrollToTop')}
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