// src/components/sections/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt,
  FaDatabase, FaDocker, FaAws, FaPython
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiRedux, SiNextdotjs } from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.backgroundAlt};
`;

const SkillsContent = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 1rem;
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

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  color: ${({ theme }) => theme.textAlt};
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.border};
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 3px;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <SkillsContainer id="skills" ref={ref}>
      <SkillsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm constantly learning and expanding my skill set. Here are the technologies I work with most frequently.
        </SectionSubtitle>
        
        <SkillCategories>
          <SkillCategory
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <CategoryTitle>Frontend Development</CategoryTitle>
            <SkillGrid>
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaReact /></SkillIcon>
                <SkillName>React</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '90%' } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaJs /></SkillIcon>
                <SkillName>JavaScript</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '95%' } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><SiTypescript /></SkillIcon>
                <SkillName>TypeScript</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '85%' } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaHtml5 /></SkillIcon>
                <SkillName>HTML5</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '98%' } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaCss3Alt /></SkillIcon>
                <SkillName>CSS3</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '92%' } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><SiRedux /></SkillIcon>
                <SkillName>Redux</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '88%' } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </ProgressBar>
              </SkillItem>
            </SkillGrid>
          </SkillCategory>
          
          <SkillCategory
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <CategoryTitle>Backend Development</CategoryTitle>
            <SkillGrid>
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaNodeJs /></SkillIcon>
                <SkillName>Node.js</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '88%' } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><SiMongodb /></SkillIcon>
                <SkillName>MongoDB</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '85%' } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaDatabase /></SkillIcon>
                <SkillName>SQL</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '80%' } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaPython /></SkillIcon>
                <SkillName>Python</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '75%' } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><SiNextdotjs /></SkillIcon>
                <SkillName>Next.js</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '82%' } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaGitAlt /></SkillIcon>
                <SkillName>Git</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '90%' } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </ProgressBar>
              </SkillItem>
            </SkillGrid>
          </SkillCategory>
          
          <SkillCategory
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <CategoryTitle>DevOps & Tools</CategoryTitle>
            <SkillGrid>
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaDocker /></SkillIcon>
                <SkillName>Docker</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '78%' } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaAws /></SkillIcon>
                <SkillName>AWS</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '75%' } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </ProgressBar>
              </SkillItem>
              
              <SkillItem variants={itemVariants} whileHover={{ y: -5 }}>
                <SkillIcon><FaGitAlt /></SkillIcon>
                <SkillName>CI/CD</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={inView ? { width: '70%' } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </ProgressBar>
              </SkillItem>
            </SkillGrid>
          </SkillCategory>
        </SkillCategories>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
