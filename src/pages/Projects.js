// src/pages/Projects.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProjectsSection from '../components/sections/ProjectsSection';

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

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Ammar Alakhali</title>
        <meta name="description" content="Explore Ammar Alakhali's portfolio of software development projects including web applications, mobile apps, and more." />
        <meta name="keywords" content="Ammar Alakhali, projects, portfolio, web development, software engineering" />
      </Helmet>
      <PageContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my work, projects and contributions in the world of software development.
          </PageDescription>
        </PageHeader>
        
        <ProjectsSection />
      </PageContainer>
    </>
  );
};

export default Projects;