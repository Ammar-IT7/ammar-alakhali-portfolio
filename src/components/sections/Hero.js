import React, { useContext, useRef, useEffect, useState, memo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import logo from '../../assets/images/company-logo.png';

// Advanced particle system with better performance
const Particles = memo(({ count = 30 }) => {
  const [particles, setParticles] = useState([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreference = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);
    
    // Generate optimized particles only if motion is allowed
    if (!mediaQuery.matches) {
      const newParticles = Array.from({ length: count }, (_, i) => {
        const size = Math.random() * 8 + 2;
        const angle = (i / count) * Math.PI * 2;
        const radius = Math.random() * 45 + 20;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const duration = Math.random() * 15 + 8;
        const delay = Math.random() * 5;
        
        return { id: i, size, x, y, duration, delay };
      });
      
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [count]);
  
  if (prefersReducedMotion || particles.length === 0) return null;
  
  return (
    <ParticlesContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          size={particle.size}
          style={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [0, -20, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            filter: [
              'blur(2px)',
              'blur(0px)',
              'blur(2px)'
            ]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </ParticlesContainer>
  );
});

// Enhanced text reveal animation
const TextReveal = ({ text, delay = 0, isColor = false, ...props }) => {
  const words = text.split(' ');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreference = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);
  
  if (prefersReducedMotion) {
    return (
      <div {...props}>
        {words.map((word, i) => (
          <span
            key={i}
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
          </span>
        ))}
      </div>
    );
  }
  
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
              transition: { 
                duration: 0.4, 
                ease: [0.2, 0.65, 0.3, 0.9],
                type: "spring",
                stiffness: 300,
                damping: 24
              }
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

// Advanced 3D interactive logo
const Logo3D = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Optimized transforms with springs for smoother motion
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), {
    stiffness: 300,
    damping: 30
  });
  
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), {
    stiffness: 300,
    damping: 30
  });
  
  const scale = useSpring(1, {
    stiffness: 200,
    damping: 20
  });
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreference = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionPreference);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);
  
  const handleMouseMove = useCallback((e) => {
    if (!isHovered || prefersReducedMotion) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center for more natural movement
    x.set((e.clientX - centerX) / 3);
    y.set((e.clientY - centerY) / 3);
  }, [isHovered, x, y, prefersReducedMotion]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Smoothly reset to center
    x.set(0);
    y.set(0);
    scale.set(1);
  }, [x, y, scale]);
  
  const handleMouseEnter = useCallback(() => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
      scale.set(1.05);
    }
  }, [scale, prefersReducedMotion]);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        perspective: '1200px',
        cursor: prefersReducedMotion ? 'default' : 'pointer'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
    >
      {!isLoaded && (
        <LogoSkeleton 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px'
          }} 
        />
      )}
      
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          scale: scale,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30 
        }}
      >
        <EnhancedLogo
          ref={imageRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: 'translateZ(30px)',
            filter: isHovered && !prefersReducedMotion ? 
              'drop-shadow(0 30px 40px rgba(0, 0, 0, 0))' : 
              'drop-shadow(0 20px 30px rgba(0, 0, 0, 0))',
            transition: 'filter 0.3s ease'
          }}
          {...props}
        />
        
        {isLoaded && !prefersReducedMotion && (
          <LogoShadow 
            style={{
              transform: 'translateZ(-40px) rotateX(90deg) translateY(60px) scale(0.7)',
              filter: 'blur(25px)',
              opacity: isHovered ? 0.6 : 0.4,
              transition: 'opacity 0.3s ease, filter 0.3s ease'
            }}
          />
        )}
      </motion.div>
      
      {/* Add interactive glow effect */}
      {isLoaded && !prefersReducedMotion && (
        <motion.div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '120%',
            height: '120%',
            borderRadius: '50%',
            background: `radial-gradient(circle at center, ${isHovered ? 'rgba(74, 37, 170, 0.2)' : 'rgba(74, 37, 170, 0.1)'} 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0.6,
            transition: 'background 0.3s ease, opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: -1
          }}
        />
      )}
    </motion.div>
  );
};

// Enhanced animations with better performance
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(1deg);
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
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

// Styled component with improved responsiveness and animations
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
  padding: min(120px, 12vh) 20px min(60px, 6vh);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  @media (max-width: 1200px) {
    padding: min(100px, 10vh) 24px min(60px, 6vh);
  }
  
  @media (max-width: 768px) {
    padding: min(80px, 8vh) 16px min(40px, 4vh);
    align-items: flex-start;
    min-height: calc(100vh - 40px);
  }
  
  @media (max-width: 480px) {
    padding: min(60px, 6vh) 12px min(30px, 3vh);
  }
  
  @media (max-height: 700px) {
    padding-top: max(40px, 6vh);
    min-height: auto;
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
    width: min(800px, 80vw);
    height: min(800px, 80vw);
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.primary}, transparent 70%);
    filter: blur(min(40px, 5vw));
    top: -400px;
    ${({ isRTL }) => isRTL ? 'left: -200px' : 'right: -200px'};
    will-change: transform, opacity;
    animation: ${pulse} 15s infinite alternate;
    
    @media (max-width: 1200px) {
      width: min(600px, 75vw);
      height: min(600px, 75vw);
      top: -300px;
      ${({ isRTL }) => isRTL ? 'left: -180px' : 'right: -180px'};
    }
    
    @media (max-width: 768px) {
      width: min(500px, 70vw);
      height: min(500px, 70vw);
      top: -250px;
      ${({ isRTL }) => isRTL ? 'left: -150px' : 'right: -150px'};
    }
    
    @media (max-width: 480px) {
      width: min(400px, 80vw);
      height: min(400px, 80vw);
      top: -200px;
      ${({ isRTL }) => isRTL ? 'left: -120px' : 'right: -120px'};
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: min(600px, 70vw);
    height: min(600px, 70vw);
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.secondary}, transparent 70%);
    filter: blur(min(40px, 5vw));
    bottom: -300px;
    ${({ isRTL }) => isRTL ? 'right: -100px' : 'left: -100px'};
    will-change: transform, opacity;
    animation: ${pulse} 18s infinite alternate-reverse;
    
    @media (max-width: 1200px) {
      width: min(500px, 65vw);
      height: min(500px, 65vw);
      bottom: -250px;
      ${({ isRTL }) => isRTL ? 'right: -120px' : 'left: -120px'};
    }
    
    @media (max-width: 768px) {
      width: min(400px, 60vw);
      height: min(400px, 60vw);
      bottom: -200px;
      ${({ isRTL }) => isRTL ? 'right: -100px' : 'left: -100px'};
    }
    
    @media (max-width: 480px) {
      width: min(300px, 65vw);
      height: min(300px, 65vw);
      bottom: -150px;
      ${({ isRTL }) => isRTL ? 'right: -80px' : 'left: -80px'};
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::after, &::before {
      animation: none;
    }
  }
`;

const HeroContainer = styled(motion.div)`
  width: 100%;
  max-width: min(1400px, 95vw);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  gap: min(30px, 3vw);
  
  @media (max-width: 1200px) {
    max-width: min(1100px, 95vw);
    gap: min(24px, 2.5vw);
  }
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: min(2.5rem, 5vh);
    margin-top: min(40px, 5vh);
  }
  
  @media (max-width: 768px) {
    gap: min(2rem, 4vh);
    margin-top: min(20px, 3vh);
  }
  
  @media (max-width: 480px) {
    gap: min(1.5rem, 3vh);
  }
`;

const LogoContainer = styled(motion.div)`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: min(500px, 50vh);
  aspect-ratio: 1/1;
  
  @media (max-width: 1200px) {
    flex: 0 0 45%;
    max-height: min(450px, 45vh);
  }
  
  @media (max-width: 992px) {
    width: 80%;
    max-width: min(400px, 80vw);
    max-height: min(400px, 40vh);
  }
  
  @media (max-width: 768px) {
    width: 70%;
    max-width: min(350px, 75vw);
    max-height: min(350px, 35vh);
  }
  
  @media (max-width: 480px) {
    width: 90%;
    max-width: min(280px, 80vw);
    max-height: min(280px, 30vh);
  }
  
  @media (max-height: 700px) {
    max-height: min(300px, 40vh);
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
  display: block;
  
  @media (max-width: 992px) {
    animation-duration: 5s;
  }
  
  @media (max-width: 480px) {
    animation-duration: 4s;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const LogoShadow = styled.div`
  width: 80%;
  height: 20px;
  background: ${({ theme }) => theme.primary};
  margin: 0 auto;
  border-radius: 50%;
  transform-origin: center center;
  
  @media (max-width: 480px) {
    height: 15px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const LogoSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.backgroundAlt},
    ${({ theme }) => theme.background},
    ${({ theme }) => theme.backgroundAlt}
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  
  @media (prefers-reduced-motion: reduce) {
    background: ${({ theme }) => theme.backgroundAlt};
    animation: none;
  }
`;

// Enhanced colored accent with interactive hover effect
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
  
  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

const HeroGreeting = styled(motion.div)`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
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
  
  @media (max-width: 480px) {
    margin-bottom: 0.7rem;
    gap: 10px;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
  }
`;

// Added text gradient animation
const gradientAnimation = keyframes`
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

const HeroName = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.primary}, 
    ${({ theme }) => theme.secondary}, 
    ${({ theme }) => theme.primary}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 800;
  animation: ${gradientAnimation} 8s ease infinite;
  
  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 7vw, 3rem);
    margin-bottom: 0.6rem;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-size: 100% 100%;
  }
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(1.3rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textAlt};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 2rem);
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 4vw, 1.8rem);
    margin-bottom: 1rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  position: relative;
  padding-left: ${props => props.isRTL ? '0' : '20px'};
  padding-right: ${props => props.isRTL ? '20px' : '0'};
  border-left: ${props => props.isRTL ? 'none' : '3px solid'};
  border-right: ${props => props.isRTL ? '3px solid' : 'none'};
  border-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  ) 1;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-left: ${props => props.isRTL ? '0' : '15px'};
    padding-right: ${props => props.isRTL ? '15px' : '0'};
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.8rem;
    padding-left: ${props => props.isRTL ? '0' : '12px'};
    padding-right: ${props => props.isRTL ? '12px' : '0'};
    font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
  
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

// Enhanced button animations
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

const buttonShine = keyframes`
  0% {
    transform: translateX(-100%);
  }
  20%, 100% {
    transform: translateX(100%);
  }
`;

const CTASecondary = styled(Link)`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  color: ${({ theme }) => theme.textAlt};
  text-decoration: none;
  position: relative;
  padding: 10px 18px;
  transition: all 0.3s ease;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  
  &:hover {
    background: ${({ theme }) => theme.backgroundAlt};
    transform: translateY(-2px);
    color: ${({ theme }) => theme.text};
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 6px;
    left: 18px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: calc(100% - 36px);
  }
  
  @media (max-width: 768px) {
    padding: 9px 16px;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
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
    
    &::after {
      bottom: 5px;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &::after {
      transition: none;
    }
    
    &:hover {
      transform: none;
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
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${buttonGradient} 5s ease infinite;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform: translateX(-100%);
    animation: ${buttonShine} 3s 5s infinite;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 10px 25px -5px ${({ theme }) => theme.primary}50,
      0 5px 10px ${({ theme }) => theme.secondary}30;
  }
  
  svg {
    transition: transform 0.3s ease;
    z-index: 2;
  }
  
  span {
    z-index: 2;
  }
  
  &:hover svg {
    transform: translateX(${({ isRTL }) => isRTL ? '-4px' : '4px'});
  }
  
  @media (max-width: 768px) {
    padding: clamp(0.7rem, 2vw, 0.9rem) clamp(1.6rem, 4vw, 2rem);
    font-size: clamp(0.85rem, 2.5vw, 1rem);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1.5rem;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: background-color 0.3s;
    
    &::before {
      display: none;
    }
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
    
    svg {
      transition: none;
    }
    
    &:hover svg {
      transform: none;
    }
  }
`;

// Enhanced scroll indicator with animations
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textAlt};
  font-size: 1rem;
  
  p {
    margin-bottom: 12px;
    opacity: 0.8;
    font-weight: 500;
  }
  
  .mouse {
    width: 28px;
    height: 44px;
    border: 2px solid ${({ theme }) => theme.textAlt};
    border-radius: 20px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 10px;
      background: ${({ theme }) => theme.primary};
      border-radius: 4px;
      will-change: transform, opacity;
      animation: ${wave} 1.5s infinite;
    }
  }
  
  @media (max-width: 992px) {
    bottom: 20px;
    
    p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 768px) {
    bottom: 15px;
    
    p {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
    
    .mouse {
      width: 24px;
      height: 38px;
      
      &::before {
        width: 4px;
        height: 8px;
      }
    }
  }
  
  @media (max-width: 480px) {
    p {
      display: none;
    }
    
    .mouse {
      width: 22px;
      height: 34px;
    }
  }
  
  @media (max-height: 700px) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .mouse::before {
      animation: none;
    }
  }
`;

const HeroContent = styled(motion.div)`
  flex: 0 0 55%;
  text-align: ${({ isRTL }) => isRTL ? 'right' : 'left'};
  
  @media (max-width: 1200px) {
    flex: 0 0 50%;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Enhanced Hero component with performance optimizations
const Hero = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const ref = useRef(null);
  const controls = useAnimation();
  const [particleCount, setParticleCount] = useState(20);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Calculate optimal particle count based on device capability and viewport
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isLowEndDevice = navigator.hardwareConcurrency 
        ? navigator.hardwareConcurrency <= 4
        : true;
      
      // Check battery status if available
      const isBatteryLow = 'getBattery' in navigator 
        ? navigator.getBattery().then(battery => battery.level < 0.2)
        : Promise.resolve(false);
      
      isBatteryLow.then(lowBattery => {
        if (prefersReducedMotion) {
          setParticleCount(0); // No particles for reduced motion
        } else if (lowBattery || (width < 768 && isLowEndDevice)) {
          setParticleCount(8); // Minimal particles for low-end devices
        } else if (width < 768 || isLowEndDevice) {
          setParticleCount(12);
        } else if (width < 1200) {
          setParticleCount(18);
        } else {
          setParticleCount(25);
        }
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion]);
  
  // Start animations when in view
  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  // Animation variants with reduced motion support
  const contentVariants = {
    hidden: { opacity: 0, x: isRTL ? 30 : -30 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1,
        when: "beforeChildren"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.4 : 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: prefersReducedMotion ? 0.1 : 0.2
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
        isRTL={isRTL}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.5 : 0.8 }}
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
              hidden: { opacity: 0, x: isRTL ? 15 : -15 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: prefersReducedMotion ? 0.3 : 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            {t('hero.greeting')}
          </HeroGreeting>
          
          <HeroName
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: prefersReducedMotion ? 0.4 : 0.7, 
                  delay: prefersReducedMotion ? 0.1 : 0.15,
                  ease: [0.25, 0.1, 0.25, 1.0],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }
              }
            }}
          >
            {t('hero.title')}
          </HeroName>
          
          <HeroTitle>
            <TextReveal 
              text={subtitleWords} 
              delay={prefersReducedMotion ? 0.2 : 0.4}
              isColor={true}
            />
          </HeroTitle>
          
          <HeroDescription
            isRTL={isRTL}
            variants={{
              hidden: { opacity: 0, x: isRTL ? 15 : -15 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: prefersReducedMotion ? 0.4 : 0.7, 
                  delay: prefersReducedMotion ? 0.3 : 0.6,
                  ease: [0.25, 0.1, 0.25, 1.0] 
                }
              }
            }}
          >
            {t('hero.description')}
          </HeroDescription>
          
          <CTAContainer
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: prefersReducedMotion ? 0.4 : 0.7, 
                  delay: prefersReducedMotion ? 0.4 : 0.8,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }
              }
            }}
          >
            <CTAButton
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <StyledLink to="/projects">
                {isRTL ? (
                  <>
                    <FaArrowLeft />
                    <span>{t('hero.cta')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('hero.cta')}</span>
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
        transition={{ delay: prefersReducedMotion ? 0.5 : 1.2, duration: prefersReducedMotion ? 0.4 : 0.8 }}
      >
        <p>{t('hero.scroll') || 'Scroll down'}</p>
        <div className="mouse"></div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default React.memo(Hero);