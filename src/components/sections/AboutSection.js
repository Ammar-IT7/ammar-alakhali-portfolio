// src/components/sections/AboutSection.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import Lottie from 'lottie-react';
import myAboutAnimation from '../../assets/animations/about.json';

const AboutContainer = styled.section`
  padding: 6rem 0;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  
  .circle-1, .circle-2, .dots, .squiggly {
    position: absolute;
    opacity: 0.3;
  }
  
  .circle-1 {
    width: 30vw;
    height: 30vw;
    max-width: 500px;
    max-height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => `${theme.primary}20`} 0%, transparent 70%);
    top: -15%;
    right: -10%;
    filter: blur(80px);
  }
  
  .circle-2 {
    width: 25vw;
    height: 25vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => `${theme.secondary}20`} 0%, transparent 70%);
    bottom: -10%;
    left: -10%;
    filter: blur(60px);
  }
  
  .dots {
    top: 20%;
    right: 5%;
    width: 180px;
    height: 180px;
    background-image: radial-gradient(${({ theme }) => `${theme.textAlt}30`} 2px, transparent 2px);
    background-size: 20px 20px;
    opacity: 0.2;
  }
  
  .squiggly {
    bottom: 15%;
    left: 5%;
    width: 150px;
    height: 80px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 C 30 20, 70 0, 100 10' stroke='%23888' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    background-size: 100px 20px;
    background-repeat: repeat-x;
    opacity: 0.15;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const imageFrameAnimation = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 0) rotate(0.5deg); }
  50% { transform: translate(5px, 5px) rotate(0deg); }
  75% { transform: translate(0, 5px) rotate(-0.5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${({ theme }) => theme.primary};
    top: -20px;
    ${props => props.isRTL ? 'right' : 'left'}: -20px;
    z-index: -1;
    border-radius: 20px;
    animation: ${imageFrameAnimation} 8s ease-in-out infinite;
    transition: all 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border: 3px dashed ${({ theme }) => theme.secondary};
    border-radius: 50%;
    bottom: -40px;
    ${props => props.isRTL ? 'left' : 'right'}: -30px;
    z-index: -1;
    opacity: 0.6;
    animation: spin 20s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto 3rem;
  }
  
  &:hover::before {
    transform: translate(${props => props.isRTL ? '-10px' : '10px'}, 10px);
    border-color: ${({ theme }) => theme.secondary};
  }
`;

const LottieWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.cardBg || 'rgba(255, 255, 255, 0.03)'};
  backdrop-filter: blur(15px);
  transition: all 0.5s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const AboutContent = styled.div`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const AboutHeading = styled(motion.h2)`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: clamp(2rem, 4vw, 2.4rem);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    bottom: -10px;
    left: 0;
    border-radius: 2px;
  }
`;

const AboutDescription = styled(motion.p)`
  margin-bottom: 2.5rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.8;
  position: relative;
  z-index: 1;
  
  strong, em {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    ${props => props.isRTL ? 'margin-right' : 'margin-left'}: auto;
    ${props => props.isRTL ? 'margin-left' : 'margin-right'}: auto;
  }
`;

const glowEffect = keyframes`
  0% { box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 0 25px ${({ theme }) => `${theme.primary}40`}; }
  100% { box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.8rem 1.5rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.cardBg || 'rgba(255, 255, 255, 0.03)'};
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    transition: all 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    animation: ${glowEffect} 2s infinite;
    
    &::before {
      left: 150%;
    }
  }
`;

const countAnimation = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StatValue = styled.h3`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  opacity: 0;
  animation: ${countAnimation} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-weight: 500;
  font-size: 1rem;
  opacity: 0.9;
`;

const buttonHover = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const buttonRipple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const AboutButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary}, ${({ theme }) => theme.primary});
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 6px 20px ${({ theme }) => `${theme.primary}30`};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    animation: ${buttonRipple} 1s;
    opacity: 0;
  }
  
  &:hover {
    animation: ${buttonHover} 2s infinite;
    box-shadow: 0 8px 25px ${({ theme }) => `${theme.primary}50`};
    transform: translateY(-3px);
  }
`;

const ButtonIcon = styled(motion.span)`
  display: inline-flex;
`;

const AboutSection = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const statsRef = useRef(null);
  const contentRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const statsControls = useAnimation();
  const contentControls = useAnimation();
  
  const [rippleCount, setRippleCount] = useState(0);
  const [ripples, setRipples] = useState([]);

  // Create ripple effect on button click
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: rippleCount,
    };
    
    setRipples([...ripples, newRipple]);
    setRippleCount(rippleCount + 1);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };
  
  // Scroll animation for the Lottie container
  const { scrollYProgress } = useScroll();
  const lottieRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const lottieScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  
  useEffect(() => {
    if (isStatsInView) {
      statsControls.start('visible');
    }
    
    if (isContentInView) {
      contentControls.start('visible');
    }
  }, [isStatsInView, isContentInView, statsControls, contentControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const statCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <AboutContainer>
      <BackgroundElements>
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="dots" />
        <div className="squiggly" />
      </BackgroundElements>
      
      <AboutGrid>
        <AboutImageContainer
          isRTL={isRTL}
          initial={{ opacity: 0, x: isRTL ? 80 : -80, rotateY: isRTL ? 15 : -15 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: { 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ rotateZ: lottieRotate, scale: lottieScale }}
        >
          <LottieWrapper>
            <Lottie 
              animationData={myAboutAnimation} 
              loop={true}
              style={{ width: '100%' }}
            />
          </LottieWrapper>
        </AboutImageContainer>
        
        <AboutContent
          ref={contentRef}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={contentControls}
          isRTL={isRTL}
        >
          <AboutHeading variants={itemVariants}>
            {t('about.title')}
          </AboutHeading>
          
          <AboutDescription variants={itemVariants}>
            {t('about.paragraph1')}
          </AboutDescription>
          
          <AboutDescription variants={itemVariants}>
            {t('about.paragraph2')}
          </AboutDescription>
          
          <StatsGrid 
            ref={statsRef}
            animate={statsControls}
            initial="hidden"
            variants={containerVariants}
            isRTL={isRTL}
          >
            {[
              { value: "5+", label: t('about.yearsExperience'), delay: "0.3s" },
              { value: "20+", label: t('about.projectsCompleted'), delay: "0.5s" },
              { value: "15+", label: t('about.clientsSatisfied'), delay: "0.7s" }
            ].map((stat, index) => (
              <StatItem 
                key={index}
                custom={index}
                variants={statCardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 }
                }}
              >
                <StatValue delay={stat.delay}>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
          
          <AboutButton
            href="/resume"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={createRipple}
          >
            {ripples.map(ripple => (
              <span 
                key={ripple.id} 
                className="ripple"
                style={{ top: ripple.y, left: ripple.x }}
              />
            ))}
            Download CV
            <ButtonIcon
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V16M12 16L8 12M12 16L16 12M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ButtonIcon>
          </AboutButton>
        </AboutContent>
      </AboutGrid>
    </AboutContainer>
  );
};

export default AboutSection;