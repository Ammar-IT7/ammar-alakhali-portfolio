// src/components/sections/AboutSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 6rem 0;
`;

const AboutContent = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const AboutBio = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ExperienceIcon = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.95rem;
`;

const AboutStats = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const StatCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const StatTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 30, opacity: 0 },
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
    <AboutContainer id="about" ref={ref}>
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        
        <AboutGrid>
          <AboutInfo
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <AboutBio variants={itemVariants}>
              I'm a passionate software engineer with over 5 years of experience in developing
              high-quality web applications. My journey in software development began when I 
              built my first website during college, and since then, I've been constantly 
              expanding my knowledge and skills.
            </AboutBio>
            
            <AboutBio variants={itemVariants}>
              I specialize in JavaScript ecosystem, with expertise in React, Node.js, and modern web technologies.
              I love creating clean, efficient, and scalable solutions that solve real-world problems.
            </AboutBio>
            
            <ExperienceList>
              <ExperienceItem 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExperienceIcon>
                  <FaCode />
                </ExperienceIcon>
                <ExperienceTitle>Frontend Development</ExperienceTitle>
                <ExperienceDescription>
                  Creating responsive, accessible, and performant user interfaces using modern frameworks.
                </ExperienceDescription>
              </ExperienceItem>
              
              <ExperienceItem 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExperienceIcon>
                  <FaServer />
                </ExperienceIcon>
                <ExperienceTitle>Backend Development</ExperienceTitle>
                <ExperienceDescription>
                  Building robust APIs and services with focus on security and scalability.
                </ExperienceDescription>
              </ExperienceItem>
              
              <ExperienceItem 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExperienceIcon>
                  <FaDatabase />
                </ExperienceIcon>
                <ExperienceTitle>Database Design</ExperienceTitle>
                <ExperienceDescription>
                  Designing efficient database schemas for both SQL and NoSQL databases.
                </ExperienceDescription>
              </ExperienceItem>
              
              <ExperienceItem 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExperienceIcon>
                  <FaCloud />
                </ExperienceIcon>
                <ExperienceTitle>Cloud Services</ExperienceTitle>
                <ExperienceDescription>
                  Deploying and managing applications on cloud platforms like AWS and Azure.
                </ExperienceDescription>
              </ExperienceItem>
            </ExperienceList>
          </AboutInfo>
          
          <AboutStats
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <StatCard variants={itemVariants}>
              <StatTitle>Education</StatTitle>
              <StatList>
                <StatItem>
                  <strong>MSc in Computer Science</strong>
                  <span>2018 - 2020</span>
                </StatItem>
                <StatItem>
                  <strong>BSc in Software Engineering</strong>
                  <span>2014 - 2018</span>
                </StatItem>
                <StatItem>
                  <strong>Advanced Web Development Certification</strong>
                  <span>2017</span>
                </StatItem>
              </StatList>
            </StatCard>
            
            <StatCard variants={itemVariants}>
              <StatTitle>Work Experience</StatTitle>
              <StatList>
                <StatItem>
                  <strong>Senior Software Engineer</strong>
                  <span>2022 - Present</span>
                </StatItem>
                <StatItem>
                  <strong>Full Stack Developer</strong>
                  <span>2020 - 2022</span>
                </StatItem>
                <StatItem>
                  <strong>Frontend Developer</strong>
                  <span>2018 - 2020</span>
                </StatItem>
              </StatList>
            </StatCard>
            
            <StatCard variants={itemVariants}>
              <StatTitle>Interests</StatTitle>
              <StatList>
                <StatItem>Open Source Contribution</StatItem>
                <StatItem>Web Performance Optimization</StatItem>
                <StatItem>UI/UX Design</StatItem>
                <StatItem>Machine Learning</StatItem>
              </StatList>
            </StatCard>
          </AboutStats>
        </AboutGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
