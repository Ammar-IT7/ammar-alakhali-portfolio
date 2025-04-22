// src/pages/Projects.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProjectsSection from '../components/sections/ProjectsSection';
import { Particles } from 'react-particles';
import { loadSlim } from "tsparticles-slim";

// Dynamic background with 3D perspective
const PageContainer = styled(motion.div)`
  padding-top: 6rem;
  min-height: 100vh;
  position: relative;
  perspective: 1000px;
  overflow: visible; /* This should be 'visible', not 'hidden' */
  isolation: isolate;
  z-index: 0; 
`;
// Enhanced particles container with responsive adjustments
const ParticlesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; // This seems correct already
  pointer-events: none;
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

// Visual elements to add depth
const BackgroundGradient = styled(motion.div)`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle at 30% 20%, 
    rgba(108, 92, 231, 0.05) 0%, 
    rgba(0, 0, 0, 0) 60%
  );
  z-index: -2;
  pointer-events: none;
  transform-origin: center center;
`;

const Projects = () => {
  const containerRef = useRef(null);
  // Added state to track window size
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Enhanced particle configuration with better performance
  const particlesInit = async (engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  };

  const particlesOptions = {
    particles: {
      number: {
        value: windowWidth < 768 ? 20 : 40,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#6c5ce7"
      },
      opacity: {
        value: 0.2,
        random: true,
        anim: {
          enable: true,
          speed: 0.2
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2
        }
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        out_mode: "out",
        bounce: false
      },
      links: {
        enable: windowWidth >= 768,
        distance: 150,
        color: "#6c5ce7",
        opacity: 0.1,
        width: 1
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.3
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true,
    fps_limit: 60
  };
  
  // Subtle parallax effect based on mouse movement
  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      // Get container dimensions
      const { width, height } = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container center
      const x = (e.clientX - width / 2) / width;
      const y = (e.clientY - height / 2) / height;
      
      // Apply subtle transform to background gradient
      const gradient = containerRef.current.querySelector('[data-gradient]');
      if (gradient) {
        gradient.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Modify scroll behavior - add a delay to ensure header is properly loaded
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Change from 'smooth' to 'auto' to prevent animation issues
      });
    }, 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Enova Studio</title>
        <meta name="description" content="Enova Studio offers innovative web design, UI/UX, logo design, and app development services." />
        <meta name="keywords" content="Enova Studio, web design, UI/UX, logo design, app development" />
        <meta property="og:title" content="Projects | Enova Studio" />
        <meta property="og:description" content="Explore Enova Studio's portfolio of softwares and designs projects." />
        <meta name="twitter:title" content="Projects | Enova Studio" />
        <meta name="twitter:description" content="Explore Enova Studio's portfolio of softwares and designs projects." />
      </Helmet>
      
      <PageContainer 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 0.8, ease: 'easeOut' }
        }}
      >
        <ParticlesWrapper>
          <AnimatePresence mode="wait">
            <motion.div
              key="particles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>
          </AnimatePresence>
        </ParticlesWrapper>
        
        <BackgroundGradient 
          data-gradient
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 1.5 }
          }}
        />
        
        <ProjectsSection />
      </PageContainer>
    </>
  );
};

export default Projects;