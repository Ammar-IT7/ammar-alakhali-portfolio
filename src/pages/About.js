// src/pages/About.js
import React, { useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Lazy load components for better initial load performance
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const Skills = lazy(() => import('../components/sections/Skills'));

const PageContainer = styled.div`
  padding-top: 5rem;
  overflow: hidden;
  position: relative;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 80% 10%, 
    ${({ theme }) => `${theme.primary}10`} 0%, 
    transparent 50%
  );
  z-index: -1;
  filter: blur(80px);
  will-change: transform;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: clamp(3rem, 10vw, 5rem) 0 clamp(2rem, 8vw, 4rem);
  position: relative;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 1.5rem;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.primary}, 
    ${({ theme }) => theme.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}
    );
    border-radius: 4px;
  }
`;

const PageDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textAlt};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  padding: 0 1.5rem;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  
  svg {
    margin-top: 8px;
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  color: ${({ theme }) => theme.textAlt};
  font-size: 1rem;
`;

const About = () => {
  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll reset
    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    
    return () => cancelAnimationFrame(raf);
  }, []);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <>
      <Helmet>
        <title>About Me | Ammar Alakhali</title>
        <meta name="description" content="Learn more about Ammar Alakhali's background, skills, and experience as a software engineer." />
        <meta name="keywords" content="Ammar Alakhali, software engineer, full stack, about, skills, experience" />
      </Helmet>
      <PageContainer>
        <BackgroundGradient />
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            About Me
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know my background, skills, and what drives me as a software engineer.
          </PageDescription>
          
          <ScrollIndicator
            style={{ opacity, y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span>Scroll to discover</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                repeatType: "loop" 
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </motion.svg>
          </ScrollIndicator>
        </PageHeader>
        
        <Suspense fallback={<LoadingFallback>Loading content...</LoadingFallback>}>
          <AboutSection />
          <Skills />
        </Suspense>
      </PageContainer>
    </>
  );
};

export default About;