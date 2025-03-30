// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/AboutSection';
import Projects from '../components/sections/ProjectsSection';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/ContactSection';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  transform-origin: 0%;
  z-index: 1000;
`;

const Home = () => {
  const { scrollYProgress } = useScroll();
  const homeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ammar Alakhali | Software Engineer</title>
        <meta name="description" content="Ammar Alakhali is a software engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies." />
        <meta name="keywords" content="Ammar Alakhali, software engineer, web developer, full stack, React, Node.js" />
        <meta property="og:title" content="Ammar Alakhali | Software Engineer" />
        <meta property="og:description" content="Software Engineer specializing in full-stack development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ammar-it7.github.io/ammar-alakhali-portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ammar Alakhali | Software Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in full-stack development" />
      </Helmet>
      
      <ProgressBar style={{ scaleX: scrollYProgress }} />
      
      <div ref={homeRef}>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
};

export default Home;