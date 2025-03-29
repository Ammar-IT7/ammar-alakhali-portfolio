// src/pages/Home.js
import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/AboutSection';
import Projects from '../components/sections/ProjectsSection';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/ContactSection';
import { Helmet } from 'react-helmet';

const Home = () => {
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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;