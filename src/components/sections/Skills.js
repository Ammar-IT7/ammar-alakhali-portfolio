import React, { useContext, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, 
  FaDatabase, FaAws, FaDocker, FaGit 
} from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiNextdotjs, SiMongodb, 
  SiPostgresql, SiGraphql, SiExpress 
} from 'react-icons/si';

// Background animations
const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const SkillsContainer = styled.section`
  padding: 8rem 0;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary}50,
      ${({ theme }) => theme.secondary}50,
      transparent
    );
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => `${theme.primary}10`} 0%, transparent 70%);
  filter: blur(50px);
  z-index: -1;
  opacity: 0.7;
  
  &.top-right {
    top: -50px;
    right: -100px;
  }
  
  &.bottom-left {
    bottom: -50px;
    left: -100px;
    background: radial-gradient(circle, ${({ theme }) => `${theme.secondary}10`} 0%, transparent 70%);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const titleGradient = css`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.primary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientBg} 6s linear infinite;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 1.5rem;
  font-size: 2.8rem;
  ${titleGradient}
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const SectionDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Tab = styled(motion.button)`
  background: ${props => props.isActive 
    ? `linear-gradient(45deg, 
        ${props.theme.primary}80, 
        ${props.theme.secondary}80)`
    : props.theme.backgroundAlt};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: ${props => props.isActive ? '600' : '500'};
  color: ${props => props.isActive ? 'white' : props.theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${props => props.isActive 
    ? `0 5px 15px ${props.theme.primary}30` 
    : '0 2px 5px rgba(0,0,0,0.1)'};
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.isActive 
      ? `0 8px 20px ${props.theme.primary}40` 
      : '0 5px 10px rgba(0,0,0,0.1)'};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 10px 25px ${({ theme }) => `${theme.primary}30`};
  }
  100% {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => `${theme.backgroundAlt}CC`};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 2.2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-12px);
    animation: ${glowAnimation} 3s infinite;
    
    &::before {
      opacity: 1;
    }
  }
`;

const CategoryIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary}20,
    ${({ theme }) => theme.secondary}20
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed ${({ theme }) => theme.primary}50;
    animation: ${pulse} 4s infinite ease-in-out;
  }
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const CategoryTitle = styled.h3`
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.4rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.primary}50;
    bottom: -8px;
    left: 0;
    border-radius: 2px;
  }
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  background: ${({ theme }) => `${theme.background}AA`};
  border: 1px solid ${({ theme }) => theme.primary}20;
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
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
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary}20,
      ${({ theme }) => theme.secondary}20
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  svg {
    margin-${props => props.isRTL ? 'left' : 'right'}: 0.6rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    z-index: 1;
  }
  
  span {
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px ${({ theme }) => theme.primary}20;
    
    &::before {
      opacity: 1;
    }
    
    svg {
      animation: ${float} 1s infinite ease-in-out;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.background};
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  border-radius: 3px;
`;

const Skills = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  // Skill categories with data
  const skillsData = {
    frontend: {
      icon: <FaReact />,
      title: t('skills.frontend'),
      skills: [
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'Redux', icon: <SiRedux />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3 />, level: 90 }
      ]
    },
    backend: {
      icon: <FaNodeJs />,
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Express', icon: <SiExpress />, level: 85 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
        { name: 'RESTful APIs', icon: <FaJs />, level: 95 }
      ]
    },
    database: {
      icon: <FaDatabase />,
      title: t('skills.database'),
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MySQL', icon: <FaDatabase />, level: 75 },
        { name: 'Redis', icon: <FaDatabase />, level: 70 }
      ]
    },
    other: {
      icon: <FaAws />,
      title: t('skills.other'),
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 75 },
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Git', icon: <FaGit />, level: 90 }
      ]
    }
  };

  // Filter skills based on active tab
  const filteredSkills = activeTab === 'all' 
    ? Object.entries(skillsData)
    : Object.entries(skillsData).filter(([key]) => key === activeTab);

  return (
    <SkillsContainer ref={sectionRef}>
      <BackgroundDecoration className="top-right" />
      <BackgroundDecoration className="bottom-left" />
      
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t('skills.title')}
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('skills.description')}
        </SectionDescription>
      </SectionHeader>

      <TabContainer>
        <Tab
          isActive={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Skills
        </Tab>
        
        {Object.entries(skillsData).map(([key, { icon, title }]) => (
          <Tab
            key={key}
            isActive={activeTab === key}
            onClick={() => setActiveTab(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {React.cloneElement(icon)} {title}
          </Tab>
        ))}
      </TabContainer>

      <AnimatePresence mode="wait">
        <SkillsGrid
          key={activeTab}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {filteredSkills.map(([key, category]) => (
            <SkillCategory 
              key={key}
              variants={itemVariants}
            >
              <CategoryIconWrapper>
                {category.icon}
              </CategoryIconWrapper>
              <CategoryTitle isRTL={isRTL}>
                {category.title}
              </CategoryTitle>
              <SkillsList
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill, index) => (
                  <SkillItem 
                    key={index} 
                    variants={skillItemVariants} 
                    isRTL={isRTL}
                    custom={index}
                  >
                    {skill.icon} <span>{skill.name}</span>
                    <ProgressBar>
                      <ProgressFill 
                        variants={progressVariants}
                        custom={skill.level}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </AnimatePresence>
    </SkillsContainer>
  );
};

export default Skills;