// src/components/sections/AboutSection.js
import React, { useContext, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import myImage from '../../assets/profile.jpg';

const AboutContainer = styled.section`
  padding: 6rem 0;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    height: 50%;
    width: 50%;
    top: -15%;
    right: -15%;
    background: radial-gradient(circle, ${({ theme }) => `${theme.primary}15`} 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    filter: blur(80px);
  }
  
  &::after {
    content: '';
    position: absolute;
    height: 40%;
    width: 40%;
    bottom: -10%;
    left: -10%;
    background: radial-gradient(circle, ${({ theme }) => `${theme.secondary}15`} 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    filter: blur(60px);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const imageFrameAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(5px, 0); }
  50% { transform: translate(5px, 5px); }
  75% { transform: translate(0, 5px); }
  100% { transform: translate(0, 0); }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid ${({ theme }) => theme.primary};
    top: -20px;
    ${props => props.isRTL ? 'right' : 'left'}: -20px;
    z-index: -1;
    border-radius: 15px;
    animation: ${imageFrameAnimation} 8s ease-in-out infinite;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border: 4px solid ${({ theme }) => theme.secondary};
    border-radius: 50%;
    bottom: -40px;
    ${props => props.isRTL ? 'left' : 'right'}: -30px;
    z-index: -1;
    opacity: 0.6;
  }
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
  
  &:hover::before {
    transform: translate(${props => props.isRTL ? '-10px' : '10px'}, 10px);
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: saturate(1.05);
  
  &:hover {
    transform: scale(1.02);
    filter: saturate(1.2) contrast(1.05);
  }
`;

const AboutContent = styled.div`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  position: relative;
`;

const AboutHeading = styled(motion.h2)`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 2.4rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    bottom: -10px;
    left: 0;
    border-radius: 2px;
  }
`;

const AboutDescription = styled(motion.p)`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
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
  gap: 2rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    ${props => props.isRTL ? 'margin-right' : 'margin-left'}: auto;
    ${props => props.isRTL ? 'margin-left' : 'margin-right'}: auto;
  }
`;

const glowEffect = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 0 20px ${({ theme }) => `${theme.primary}30`}; }
  100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.cardBg || '#ffffff05'};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    animation: ${glowEffect} 2s infinite;
  }
`;

const countAnimation = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StatValue = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  animation: ${countAnimation} 0.5s forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-weight: 500;
  font-size: 0.95rem;
`;

const buttonHover = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2.2rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary}, ${({ theme }) => theme.primary});
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 15px ${({ theme }) => `${theme.primary}40`};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    animation: ${buttonHover} 2s infinite;
    box-shadow: 0 6px 20px ${({ theme }) => `${theme.primary}60`};
    transform: translateY(-2px);
    
    &::after {
      transform: scaleX(1.5) scaleY(1.6);
      opacity: 0;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: scale(0);
    border-radius: 50%;
    transform-origin: center;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    pointer-events: none;
  }
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s ease;
  
  ${AboutButton}:hover & {
    transform: translateX(4px);
  }
`;

const AboutSection = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const statsControls = useAnimation();
  
  useEffect(() => {
    if (isStatsInView) {
      statsControls.start('visible');
    }
  }, [isStatsInView, statsControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const statCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AboutContainer>
      <AboutGrid>
        <AboutImageContainer
          isRTL={isRTL}
          initial={{ opacity: 0, x: isRTL ? 50 : -50, rotateY: isRTL ? 10 : -10 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: { 
              duration: 0.8, 
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutImage 
            src={myImage} 
            alt="Ammar Alakhali" 
            loading="lazy"
          />
        </AboutImageContainer>
        
        <AboutContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
              { value: "5+", label: t('about.yearsExperience'), delay: "0.1s" },
              { value: "20+", label: t('about.projectsCompleted'), delay: "0.2s" },
              { value: "15+", label: t('about.clientsSatisfied'), delay: "0.3s" }
            ].map((stat, index) => (
              <StatItem 
                key={index}
                custom={index}
                variants={statCardVariants}
              >
                <StatValue delay={stat.delay}>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
          
          <AboutButton
            href="/resume"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
            <ButtonIcon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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