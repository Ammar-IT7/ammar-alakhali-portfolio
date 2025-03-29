// src/components/sections/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 5rem;
  }
`;

const HeroInfo = styled(motion.div)`
  flex: 1;
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const ImageFrame = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary}; // Placeholder for actual image
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1.5rem;
  
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const Role = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem auto;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary}22, 
    ${({ theme }) => theme.secondary}11
  );
  
  &.shape1 {
    width: 400px;
    height: 400px;
    top: -100px;
    left: -100px;
    filter: blur(100px);
  }
  
  &.shape2 {
    width: 300px;
    height: 300px;
    bottom: -50px;
    right: -50px;
    filter: blur(80px);
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroContainer id="hero">
      <BackgroundShape className="shape1" />
      <BackgroundShape className="shape2" />
      
      <HeroContent>
        <HeroInfo
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>Hello there, I'm</Greeting>
          <Name variants={itemVariants}>
            Ammar <span>Alakhali</span>
          </Name>
          <Role variants={itemVariants}>
            Software Engineer & Full Stack Developer
          </Role>
          <Description variants={itemVariants}>
            I specialize in building exceptional digital experiences with focus on performance,
            scalability, and user experience. My expertise spans across frontend and backend technologies.
          </Description>
          
          <ButtonContainer variants={itemVariants}>
            <Link to="/projects">
              <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Projects <FaArrowRight />
              </PrimaryButton>
            </Link>
            <SecondaryButton 
              href="/resume" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </SecondaryButton>
          </ButtonContainer>
          
          <SocialContainer variants={itemVariants}>
            <SocialIcon 
              href="https://github.com/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialContainer>
        </HeroInfo>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ImageFrame 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image>
              AA
            </Image>
          </ImageFrame>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
