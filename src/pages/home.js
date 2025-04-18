// src/pages/Home.js
import React, { useEffect, useRef, Suspense, lazy, useState, useCallback, useContext } from 'react';
import { motion, useScroll, AnimatePresence, useSpring, useTransform, useInView, useMotionValueEvent } from 'framer-motion';
import Hero from '../components/sections/Hero';
import { Helmet } from 'react-helmet';
import styled, { keyframes, css } from 'styled-components';
import { LanguageContext } from '../contexts/LanguageContext';
import { debounce } from 'lodash';

// Lazy load components with named exports for better debugging
const About = lazy(() => import('../components/sections/AboutSection'));
const Skills = lazy(() => import('../components/sections/Skills'));
const Projects = lazy(() => import('../components/sections/ProjectsSection'));
const Contact = lazy(() => import('../components/sections/ContactSection'));

// Optimized animations with better performance
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const progressAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulseLight = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.03); }
  100% { opacity: 0.6; transform: scale(1); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Advanced progress bar with glow and gradient
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
  filter: drop-shadow(0 0 8px ${({ theme }) => theme.primary}90);
  will-change: transform;
  transform: scaleX(var(--scaleX, 0));
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    filter: blur(3px);
    opacity: 0.8;
  }
`;

const SectionWrapper = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: clamp(60px, 8vh, 100px) 0;
  isolation: isolate;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.background}, transparent);
    opacity: 0.8;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: clamp(40px, 5vh, 60px) 0;
  }
`;

// Enhanced loading components with animations
const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 85%;
  max-width: 400px;
  padding: 32px;
  background: ${({ theme }) => `${theme.backgroundAlt}40`};
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 1px 1px rgba(255, 255, 255, 0.1) inset;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transform-style: preserve-3d;
  perspective: 1000px;
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
  animation: ${pulseLight} 2.5s infinite ease-in-out;
`;

const LoadingIconContainer = styled(motion.div)`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`;

const LoadingProgress = styled.div`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => `${theme.backgroundAlt}90`};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  
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
    transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 15px ${({ theme }) => theme.primary}60;
  }
`;

const LoadingPercentage = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-top: 15px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 2px 10px ${({ theme }) => theme.primary}40;
`;

// Enhanced scroll to top button with hover effects
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
  box-shadow: 
    0 5px 20px rgba(0, 0, 0, 0.15),
    0 3px 6px ${({ theme }) => theme.primary}40;
  outline: none;
  transform-origin: center;
  overflow: hidden;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:hover {
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    box-shadow: 
      0 7px 25px rgba(0, 0, 0, 0.2),
      0 5px 12px ${({ theme }) => theme.primary}50;
  }
  
  &:hover svg {
    transform: translateY(-3px);
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
  
  @media (prefers-reduced-motion: reduce) {
    &::before {
      display: none;
    }
    
    transition: background 0.3s ease;
    
    &:hover svg {
      transform: none;
    }
  }
`;

// Floating elements to enhance visual interest
const FloatingElement = styled(motion.div)`
  position: absolute;
  background: linear-gradient(
    135deg,
    ${({ theme }) => `${theme.primary}10`},
    ${({ theme }) => `${theme.secondary}05`}
  );
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
  pointer-events: none;
  opacity: 0.4;
  will-change: transform;
  animation: ${floatAnimation} ${props => props.duration || 10}s infinite ease-in-out;
  animation-delay: ${props => props.delay || 0}s;
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

// Page transition wrapper with enhanced animations
const PageTransition = styled(motion.div)`
  display: contents;
`;

const Home = () => {
  const { scrollYProgress } = useScroll();
  const homeRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const { t } = useContext(LanguageContext);
  const [floatingElements, setFloatingElements] = useState([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Smoothed progress for better animation
  const smoothProgress = useSpring(0, { 
    damping: 30, 
    stiffness: 300,
    restDelta: 0.001
  });
  
  // Use transform to update progress bar's CSS variable
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    smoothProgress.set(latest);
  });
  
  // Set initial loading message using translation
  useEffect(() => {
    setLoadingMessage(t('home.loading.preparing'));
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreference = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [t]);
  
  // Generate floating elements for visual interest
  useEffect(() => {
    if (!prefersReducedMotion) {
      const elements = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        width: Math.random() * 200 + 100,
        height: Math.random() * 200 + 100,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 5
      }));
      setFloatingElements(elements);
    } else {
      setFloatingElements([]);
    }
  }, [prefersReducedMotion]);
  
  // Track loading progress with dynamic messages and realistic timing
  useEffect(() => {
    let timer;
    let progress = 0;
    
    const incrementProgress = () => {
      if (progress < 100) {
        // More natural progress increment with variable speeds and realistic pauses
        const increment = progress < 60 
          ? Math.random() * 8 + 2
          : progress < 85 
            ? (Math.random() * 3 + 1) * (Math.random() > 0.7 ? 0.2 : 1) // Occasional slowdowns
            : Math.random() * 1.5;
            
        progress += increment;
        
        // More granular loading messages based on progress
        if (progress < 15) setLoadingMessage(t('home.loading.preparing'));
        else if (progress < 30) setLoadingMessage(t('home.loading.loadingElements'));
        else if (progress < 45) setLoadingMessage(t('home.loading.settingAnimations'));
        else if (progress < 60) setLoadingMessage(t('home.loading.optimizing'));
        else if (progress < 75) setLoadingMessage(t('home.loading.almostReady'));
        else if (progress < 90) setLoadingMessage(t('home.loading.finalTouches'));
        else setLoadingMessage(t('home.loading.readyToLaunch'));
        
        if (progress > 100) progress = 100;
        setLoadingProgress(progress);
        
        if (progress < 100) {
          // Variable timing with realistic slowdowns at specific progress points
          let delay = 100 + Math.random() * 180;
          
          // Simulate processing pauses at specific points
          if (progress > 30 && progress < 35) delay += 400;
          if (progress > 60 && progress < 65) delay += 300;
          if (progress > 85) delay += 500;
          
          timer = setTimeout(incrementProgress, delay);
        } else {
          // Delay final completion for more realism
          setTimeout(() => setIsLoading(false), 800);
        }
      }
    };
    
    // Initial delay to simulate initial application setup
    timer = setTimeout(incrementProgress, 600);
    
    return () => {
      clearTimeout(timer);
    };
  }, [t]);
  
  // Optimized scroll handler with debounce
  const handleScroll = useCallback(
    debounce(() => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
    }, 100, { leading: true }),
    []
  );
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  // Enhanced animation variants with smoother timing
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
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
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Generate loading icon SVG
  const LoadingIcon = () => (
    <LoadingIconContainer
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M30 5L37.7128 21.9463L55.9808 25.3688L42.9904 38.0537L46.7256 55.6312L30 47.5L13.2744 55.6312L17.0096 38.0537L4.01924 25.3688L22.2872 21.9463L30 5Z"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="4" y1="5" x2="56" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4a25aa" />
            <stop offset="1" stopColor="#5e4adb" />
          </linearGradient>
        </defs>
      </svg>
    </LoadingIconContainer>
  );

  // Enhanced loading screen with subtle animations
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
          padding: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {!prefersReducedMotion && floatingElements.map(element => (
          <FloatingElement
            key={element.id}
            style={{
              width: element.width + 'px',
              height: element.height + 'px',
              top: element.top,
              left: element.left
            }}
            duration={element.duration}
            delay={element.delay}
          />
        ))}
        
        <LoadingContainer
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            transformStyle: 'preserve-3d',
            transform: prefersReducedMotion ? 'none' : 'rotateX(10deg)' 
          }}
        >
          <LoadingIcon />
          <LoadingText>{loadingMessage}</LoadingText>
          <LoadingProgress progress={loadingProgress} />
          <LoadingPercentage>
            <motion.span
              key={Math.round(loadingProgress)}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(loadingProgress)}%
            </motion.span>
          </LoadingPercentage>
          
          <LoadingSubtext>
            {loadingProgress < 100 
              ? t('home.loading.pleaseWait')
              : t('home.loading.readyToLaunch')
            }
          </LoadingSubtext>
        </LoadingContainer>
      </motion.div>
    );
  }

  return (
    <PageTransition
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
      
      {/* Progress bar with useTransform for better performance */}
      <ProgressBar style={{ scaleX: smoothProgress }} />
      
      {/* Background floating elements for visual interest */}
      {!prefersReducedMotion && floatingElements.map(element => (
        <FloatingElement
          key={element.id}
          style={{
            width: element.width + 'px',
            height: element.height + 'px',
            top: element.top,
            left: element.left,
            position: 'fixed'
          }}
          duration={element.duration}
          delay={element.delay}
        />
      ))}
      
      <motion.div 
        ref={homeRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        
        <Suspense fallback={
          <LoadingFallback>
            <LoadingContainer
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <LoadingIcon />
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
              viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            >
              <About />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            >
              <Skills />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            >
              <Projects />
            </SectionWrapper>
            
            <SectionWrapper
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
            >
              <Contact />
            </SectionWrapper>
          </motion.div>
        </Suspense>
      </motion.div>
      
      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
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
    </PageTransition>
  );
};

export default Home;