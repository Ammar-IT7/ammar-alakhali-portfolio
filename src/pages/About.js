// src/pages/About.js
import React, { useEffect, lazy, Suspense, memo } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Lazy load components with Suspense boundaries
const AboutSection = lazy(() => import('../components/sections/AboutSection'));

const PageContainer = styled.div`
  padding-top: 5rem;
  overflow: hidden;
  position: relative;
  containment: content;
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
  transform: translateZ(0);
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
    // Use IntersectionObserver for smoother scroll reset
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Me | Ammar Alakhali</title>
        <meta name="description" content="Learn more about Ammar Alakhali's background, skills, and experience as a software engineer." />
        <meta name="keywords" content="Ammar Alakhali, software engineer, full stack, about, skills, experience" />
      </Helmet>
      <PageContainer>
        <BackgroundGradient />
        <Suspense fallback={<LoadingFallback>Loading content...</LoadingFallback>}>
          <AboutSection />
        </Suspense>
      </PageContainer>
    </>
  );
};

export default memo(About);