// src/pages/About.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import AboutSection from '../components/sections/AboutSection';
import Skills from '../components/sections/Skills';

const PageContainer = styled.div`
  padding-top: 5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textAlt};
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Me | Ammar Alakhali</title>
        <meta name="description" content="Learn more about Ammar Alakhali's background, skills, and experience as a software engineer." />
        <meta name="keywords" content="Ammar Alakhali, software engineer, full stack, about, skills, experience" />
      </Helmet>
      <PageContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
        </PageHeader>
        
        <AboutSection />
        <Skills />
      </PageContainer>
    </>
  );
};

export default About;
