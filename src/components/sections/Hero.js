// src/components/sections/Hero.js
import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';

// Animated particles component
const Particles = ({ count = 30 }) => {
  return (
    <ParticlesContainer>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 8 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <Particle
            key={i}
            size={size}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
            style={{ 
              left: `${x}%`, 
              top: `${y}%` 
            }}
          />
        );
      })}
    </ParticlesContainer>
  );
};

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

// Main Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.07;
  
  &::after {
    content: '';
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.primary}, transparent 70%);
    filter: blur(30px);
    top: -400px;
    ${({ isRTL }) => isRTL ? 'left: -200px' : 'right: -200px'};
    animation: pulse 15s infinite alternate;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.secondary}, transparent 70%);
    filter: blur(30px);
    bottom: -300px;
    ${({ isRTL }) => isRTL ? 'right: -100px' : 'left: -100px'};
    animation: pulse 18s infinite alternate-reverse;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }
`;

const HeroContainer = styled(motion.div)`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: ${({ isRTL }) => isRTL ? 'flex-end' : 'flex-start'};
  text-align: ${({ isRTL }) => isRTL ? 'right' : 'left'};
  position: relative;
  z-index: 2;
`;

const ColoredAccent = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.3em;
    bottom: 0.1em;
    left: 0;
    background-color: ${({ theme }) => theme.primary}20;
    z-index: -1;
    transform: skewX(-15deg);
  }
`;

const HeroGreeting = styled(motion.div)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  
  &::before {
    content: '';
    height: 2px;
    width: 40px;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    top: 50%;
    ${({ isRTL }) => isRTL ? 'right: -50px' : 'left: -50px'};
  }
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
  position: relative;
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textAlt};
  
  & span {
    display: inline-block;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 70%;
    top: 15%;
    ${({ isRTL }) => isRTL ? 'right: -15px' : 'left: -15px'};
    background: linear-gradient(to bottom, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    border-radius: 4px;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const CTAButton = styled(motion.div)`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

const CTASecondary = styled(Link)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textAlt};
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(100%);
      transition: transform 0.8s;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  
  p {
    margin-bottom: 8px;
    opacity: 0.8;
  }
  
  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.textAlt};
    border-radius: 20px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: ${({ theme }) => theme.primary};
      border-radius: 4px;
      animation: scrollAnimation 1.5s infinite;
    }
  }
  
  @keyframes scrollAnimation {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(15px);
    }
  }
`;

const Hero = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const ref = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({ target: ref });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const titleAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Split subtitle into words
  const subtitleWords = t('hero.subtitle').split(' ');
  
  return (
    <HeroSection ref={ref}>
      <HeroBackground isRTL={isRTL} />
      <Particles count={20} />
      
      <HeroContainer 
        isRTL={isRTL}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ opacity, scale }}
      >
        <HeroGreeting
          isRTL={isRTL}
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.greeting')}
        </HeroGreeting>
        
        <HeroName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('hero.title')}
        </HeroName>
        
        <HeroTitle
          variants={titleAnimation}
          initial="hidden"
          animate="visible"
        >
          {subtitleWords.map((word, index) => (
            <motion.span 
              key={index} 
              variants={letterAnimation}
              style={{ marginRight: '10px' }}
            >
              {index === 1 ? <ColoredAccent>{word}</ColoredAccent> : word}
            </motion.span>
          ))}
        </HeroTitle>
        
        <HeroDescription
          isRTL={isRTL}
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {t('hero.description')}
        </HeroDescription>
        
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledLink to="/projects">
              {t('hero.cta')}
              {isRTL ? <FaArrowLeft style={{ marginRight: '8px' }} /> : <FaArrowRight style={{ marginLeft: '8px' }} />}
            </StyledLink>
          </CTAButton>
          
          <CTASecondary to="/about">
            {t('hero.learnMore') || 'Learn more about me'}
          </CTASecondary>
        </CTAContainer>
      </HeroContainer>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p>{t('hero.scroll') || 'Scroll down'}</p>
        <div className="mouse"></div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;