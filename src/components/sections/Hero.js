// src/components/sections/Hero.js
import React, { useContext, useRef, useEffect, useState, memo, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import logo from '../../assets/images/company-logo.png'; // Import the logo

// Enhanced particle effects
const generateParticle = (index, count) => {
  // Calculate properties with more variation
  const size = Math.random() * 10 + 2;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;
  
  // Create more varied positioning based on index
  const angle = (index / count) * Math.PI * 2;
  const radius = Math.random() * 50 + 30;
  const x = 50 + Math.cos(angle) * radius;
  const y = 50 + Math.sin(angle) * radius;
  
  return { size, duration, delay, x, y };
};

// Memoized Particles component with advanced effects
const Particles = memo(({ count = 30 }) => {
  // Generate particles with better distribution
  const particles = useMemo(() => {
    return [...Array(count)].map((_, i) => {
      const { size, duration, delay, x, y } = generateParticle(i, count);
      
      return (
        <Particle
          key={i}
          size={size}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
            filter: [
              'blur(2px)',
              'blur(0px)',
              'blur(2px)'
            ]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
          }}
          style={{ 
            left: `${x}%`, 
            top: `${y}%`,
            boxShadow: `0 0 ${size * 2}px rgba(var(--primary-rgb), 0.4)`
          }}
        />
      );
    });
  }, [count]);

  return <ParticlesContainer>{particles}</ParticlesContainer>;
});

// Staggered loading text animation for the subtitle
const TextReveal = ({ text, delay = 0, isColor = false, ...props }) => {
  const words = text.split(' ');
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }
            }
          }}
          className="word-wrapper"
          style={{ 
            display: 'inline-block',
            marginRight: '0.4em',
            marginBottom: '0.2em',
            color: isColor && i === 1 ? 'var(--primary)' : 'inherit'
          }}
        >
          {isColor && i === 1 ? (
            <ColoredAccent>{word}</ColoredAccent>
          ) : word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Enhanced 3D logo animation component
const Logo3D = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform rotation based on mouse position
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = useCallback((e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }, [isHovered, x, y]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Animate back to center
    x.set(0);
    y.set(0);
  }, [x, y]);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <motion.div 
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {!isLoaded && (
        <LogoSkeleton 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '10px'
          }} 
        />
      )}
      
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <EnhancedLogo
          ref={imageRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: 'translateZ(20px)'
          }}
          {...props}
        />
        
        {isLoaded && (
          <LogoShadow 
            style={{
              transform: 'translateZ(-20px) rotateX(90deg) translateY(40px) scale(0.8)',
              filter: 'blur(20px)',
              opacity: 0.4
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

// Keyframes animations
const pulse = keyframes`
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
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const wave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled components with enhanced animations
const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  will-change: transform, opacity;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding-top: 70px;
    align-items: flex-start;
    padding-bottom: 70px;
    min-height: calc(100vh - 40px);
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.07;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.primary}, transparent 70%);
    filter: blur(40px);
    top: -400px;
    ${({ isRTL }) => isRTL ? 'left: -200px' : 'right: -200px'};
    will-change: transform, opacity;
    animation: ${pulse} 15s infinite alternate;
    
    @media (max-width: 768px) {
      width: 500px;
      height: 500px;
      top: -250px;
      ${({ isRTL }) => isRTL ? 'left: -150px' : 'right: -150px'};
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.secondary}, transparent 70%);
    filter: blur(40px);
    bottom: -300px;
    ${({ isRTL }) => isRTL ? 'right: -100px' : 'left: -100px'};
    will-change: transform, opacity;
    animation: ${pulse} 18s infinite alternate-reverse;
    
    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
      bottom: -200px;
      ${({ isRTL }) => isRTL ? 'right: -100px' : 'left: -100px'};
    }
  }
`;

const HeroContainer = styled(motion.div)`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 3rem;
    margin-top: 40px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoContainer = styled(motion.div)`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 992px) {
    width: 80%;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    max-width: 300px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, ${({ theme }) => theme.primary}10 10%, transparent 70%);
    z-index: -1;
  }
`;

const EnhancedLogo = styled.img`
  max-width: 100%;
  height: auto;
  will-change: transform;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
  animation: ${float} 6s ease-in-out infinite;
  transform-style: preserve-3d;
`;

const LogoShadow = styled.div`
  width: 80%;
  height: 20px;
  background: ${({ theme }) => theme.primary};
  margin: 0 auto;
  border-radius: 50%;
  transform-origin: center center;
`;

const LogoSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.backgroundAlt},
    ${({ theme }) => theme.background},
    ${({ theme }) => theme.backgroundAlt}
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
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
    background-color: ${({ theme }) => theme.primary}30;
    z-index: -1;
    transform: skewX(-15deg);
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    height: 0.4em;
    background-color: ${({ theme }) => theme.primary}50;
    transform: skewX(-10deg);
  }
`;

const HeroGreeting = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  
  &::before {
    content: '';
    height: 2px;
    width: 40px;
    background: ${({ theme }) => theme.primary};
    
    @media (max-width: 768px) {
      width: 25px;
    }
  }
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 800;
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(1.3rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textAlt};
  line-height: 1.2;
  
  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 5vw, 1.8rem);
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  position: relative;
  padding-left: 20px;
  border-left: 3px solid;
  border-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  ) 1;
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding-left: 15px;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

const CTAButton = styled(motion.div)`
  display: inline-block;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const buttonGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const CTASecondary = styled(Link)`
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  color: ${({ theme }) => theme.textAlt};
  text-decoration: none;
  position: relative;
  padding: 8px 16px;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &:hover {
    background: ${({ theme }) => theme.backgroundAlt};
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 4px;
    left: 16px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: calc(100% - 32px);
  }
  
  @media (max-width: 480px) {
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.backgroundAlt}50;
    
    &:hover {
      background: ${({ theme }) => theme.backgroundAlt};
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.8rem, 4vw, 2.4rem);
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.primary}
  );
  background-size: 200% auto;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${buttonGradient} 5s ease infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: translateX(-100%);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px ${({ theme }) => theme.primary}50;
    
    &::before {
      transform: translateX(100%);
      transition: transform 0.8s;
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
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
    font-weight: 500;
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
      will-change: transform, opacity;
      animation: ${wave} 1.5s infinite;
    }
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    
    p {
      font-size: 0.8rem;
    }
    
    .mouse {
      width: 20px;
      height: 32px;
      
      &::before {
        width: 3px;
        height: 6px;
      }
    }
  }
  
  @media (max-height: 700px) {
    display: none;
  }
`;

const HeroContent = styled(motion.div)`
  flex: 0 0 55%;
  text-align: ${({ isRTL }) => isRTL ? 'right' : 'left'};
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

// Enhanced Hero component
const Hero = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const ref = useRef(null);
  const controls = useAnimation();
  const [particleCount, setParticleCount] = useState(20);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Calculate optimal particle count based on device capability
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isLowEndDevice = navigator.hardwareConcurrency 
        ? navigator.hardwareConcurrency <= 4
        : true;
      
      if (width < 768 || isLowEndDevice) {
        setParticleCount(10);
      } else if (width < 1200) {
        setParticleCount(15);
      } else {
        setParticleCount(25);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Start animations when in view
  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.3
      }
    }
  };
  
  // Optimized subtitle text
  const subtitleWords = t('hero.subtitle');
  
  return (
    <HeroSection ref={ref}>
      <HeroBackground isRTL={isRTL} />
      <Particles count={particleCount} />
      
      <HeroContainer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent
          ref={ref1}
          isRTL={isRTL}
          variants={contentVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
        >
          <HeroGreeting
            isRTL={isRTL}
            variants={{
              hidden: { opacity: 0, x: isRTL ? 20 : -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            {t('hero.greeting')}
          </HeroGreeting>
          
          <HeroName
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7, 
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1.0] 
                }
              }
            }}
          >
            {t('hero.title')}
          </HeroName>
          
          <HeroTitle>
            <TextReveal 
              text={subtitleWords} 
              delay={0.5}
              isColor={true}
            />
          </HeroTitle>
          
          <HeroDescription
            isRTL={isRTL}
            variants={{
              hidden: { opacity: 0, x: isRTL ? 20 : -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.7, 
                  delay: 0.8,
                  ease: [0.25, 0.1, 0.25, 1.0] 
                }
              }
            }}
          >
            {t('hero.description')}
          </HeroDescription>
          
          <CTAContainer
            isRTL={isRTL}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7, 
                  delay: 1,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }
              }
            }}
          >
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledLink to="/projects">
                {isRTL ? (
                  <>
                    <FaArrowLeft />
                    {t('hero.cta')}
                  </>
                ) : (
                  <>
                    {t('hero.cta')}
                    <FaArrowRight />
                  </>
                )}
              </StyledLink>
            </CTAButton>
            
            <CTASecondary to="/about">
              {t('hero.learnMore') || 'Learn more about us'}
            </CTASecondary>
          </CTAContainer>
        </HeroContent>
        
        <LogoContainer
          ref={ref2}
          variants={logoVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
        >
          <Logo3D 
            src={logo} 
            alt="Enova Studio Logo" 
            width="400"
            height="400"
          />
        </LogoContainer>
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

export default React.memo(Hero);