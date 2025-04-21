// src/pages/Resume.js
import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';

const PageContainer = styled.div`
  padding-top: 5rem;
  direction: ${({ language }) => language === 'ar' ? 'rtl' : 'ltr'};
  text-align: ${({ language }) => language === 'ar' ? 'left' : 'left'};
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.textAlt};
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  
  svg {
    margin-${({ language }) => language === 'ar' ? 'left' : 'right'}: 0.5rem;
  }
`;

const ResumeContent = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const ResumeSection = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
`;

const SectionIcon = styled.span`
  font-size: 1.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding-${({ language }) => language === 'ar' ? 'left' : 'left'}: 1.5rem;
  border-${({ language }) => language === 'ar' ? 'left' : 'left'}: 2px solid ${({ theme }) => theme.border};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
    ${({ language }) => language === 'ar' ? 'left: -7px;' : 'left: -7px;'}
    top: 8px;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-direction: ${({ language }) => language === 'ar' ? 'row-reverse' : 'row'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: ${({ language }) => language === 'ar' ? 'flex-start' : 'flex-start'};
    gap: 0.5rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
`;

const ExperienceDate = styled.span`
  color: ${({ theme }) => theme.textAlt};
  font-weight: 500;
`;

const ExperienceCompany = styled.h4`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textAlt};
`;

const ExperienceList = styled.ul`
  padding-${({ language }) => language === 'ar' ? 'left' : 'left'}: 1.5rem;
  list-style-position: outside;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::before {
      content: '•';
      position: absolute;
      ${({ language }) => language === 'ar' ? 'left: -1.5rem;' : 'left: -1.5rem;'}
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillCategoryTitle = styled.h4`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

const SkillsList = styled.ul`
  padding-${({ language }) => language === 'ar' ? 'left' : 'left'}: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::before {
      content: '•';
      position: absolute;
      ${({ language }) => language === 'ar' ? 'left: -1.5rem;' : 'left: -1.5rem;'}
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Resume = () => {
  const { language, t } = useContext(LanguageContext);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      } 
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('resume.title')} | Enova Studio</title>
        <meta name="description" content="Enova Studio offers innovative web design, UI/UX, logo design, and app development services." />
        <meta name="keywords" content="Enova Studio, web design, UI/UX, logo design, app development" />
      </Helmet>
      <PageContainer language={language}>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('resume.title')}
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('resume.description')}
          </PageDescription>
          
          <DownloadButton 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            language={language}
          >
            <FaDownload /> {t('resume.download')}
          </DownloadButton>
        </PageHeader>
        
        <ResumeContent>
          <ResumeSection
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle language={language}>
              <SectionIcon><FaBriefcase /></SectionIcon> {t('resume.experience')}
            </SectionTitle>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Senior Software Engineer</ExperienceTitle>
                <ExperienceDate>2022 - Present</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>Tech Innovations Inc., San Francisco, CA</ExperienceCompany>
              <ExperienceDescription>
                Lead developer for enterprise-level web applications serving thousands of users daily.
              </ExperienceDescription>
              <ExperienceList language={language}>
                <li>Designed and implemented scalable microservices architecture using Node.js and Docker</li>
                <li>Optimized database queries resulting in 40% improved application performance</li>
                <li>Led a team of 5 developers, implementing Agile methodologies and CI/CD pipelines</li>
                <li>Reduced application load time by 60% through code optimization and caching strategies</li>
              </ExperienceList>
            </ExperienceItem>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Full Stack Developer</ExperienceTitle>
                <ExperienceDate>2020 - 2022</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>WebSolutions Agency, Seattle, WA</ExperienceCompany>
              <ExperienceDescription>
                Developed and maintained client websites and web applications across various industries.
              </ExperienceDescription>
              <ExperienceList language={language}>
                <li>Created responsive, cross-browser compatible web applications using React and Express</li>
                <li>Implemented authentication and authorization systems using JWT and OAuth</li>
                <li>Integrated third-party APIs and payment gateways (Stripe, PayPal)</li>
                <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces</li>
              </ExperienceList>
            </ExperienceItem>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Frontend Developer</ExperienceTitle>
                <ExperienceDate>2018 - 2020</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>Digital Creations, Boston, MA</ExperienceCompany>
              <ExperienceDescription>
                Specialized in building interactive user interfaces for web applications.
              </ExperienceDescription>
              <ExperienceList language={language}>
                <li>Developed responsive websites using HTML5, CSS3, and JavaScript (ES6+)</li>
                <li>Built and maintained React components following best practices</li>
                <li>Ensured cross-browser compatibility and implemented accessibility standards</li>
                <li>Collaborated with back-end developers for API integration</li>
              </ExperienceList>
            </ExperienceItem>
          </ResumeSection>
          
          <ResumeSection
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle language={language}>
              <SectionIcon><FaGraduationCap /></SectionIcon> {t('resume.education')}
            </SectionTitle>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Master of Science in Computer Science</ExperienceTitle>
                <ExperienceDate>2018 - 2020</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>Stanford University, Stanford, CA</ExperienceCompany>
              <ExperienceDescription>
                Specialized in Software Engineering and Distributed Systems.
              </ExperienceDescription>
              <ExperienceList language={language}>
                <li>GPA: 3.8/4.0</li>
                <li>Master's Thesis: "Optimizing Performance in Distributed Web Applications"</li>
                <li>Relevant Coursework: Advanced Algorithms, Cloud Computing, Machine Learning</li>
              </ExperienceList>
            </ExperienceItem>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Bachelor of Science in Software Engineering</ExperienceTitle>
                <ExperienceDate>2014 - 2018</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>University of California, Berkeley, CA</ExperienceCompany>
              <ExperienceDescription>
                Graduated with honors.
              </ExperienceDescription>
              <ExperienceList language={language}>
                <li>GPA: 3.7/4.0</li>
                <li>Senior Project: "Real-time Collaborative Code Editor"</li>
                <li>Relevant Coursework: Data Structures, Operating Systems, Database Management</li>
              </ExperienceList>
            </ExperienceItem>
          </ResumeSection>
          
          <ResumeSection
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle language={language}>
              <SectionIcon><FaCertificate /></SectionIcon> {t('resume.certifications')}
            </SectionTitle>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>AWS Certified Solutions Architect</ExperienceTitle>
                <ExperienceDate>2021</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>Amazon Web Services</ExperienceCompany>
            </ExperienceItem>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>Google Cloud Professional Developer</ExperienceTitle>
                <ExperienceDate>2020</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>Google Cloud</ExperienceCompany>
            </ExperienceItem>
            
            <ExperienceItem language={language}>
              <ExperienceHeader language={language}>
                <ExperienceTitle>MongoDB Certified Developer</ExperienceTitle>
                <ExperienceDate>2019</ExperienceDate>
              </ExperienceHeader>
              <ExperienceCompany>MongoDB University</ExperienceCompany>
            </ExperienceItem>
          </ResumeSection>
          
          <ResumeSection
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle language={language}>
              <SectionIcon><FaCode /></SectionIcon> {t('resume.skills')}
            </SectionTitle>
            
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>HTML5 & CSS3</li>
                  <li>SQL</li>
                </SkillsList>
              </SkillCategory>
              
              <SkillCategory>
                <SkillCategoryTitle>Frontend</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>Sass/SCSS</li>
                  <li>Tailwind CSS</li>
                </SkillsList>
              </SkillCategory>
              
              <SkillCategory>
                <SkillCategoryTitle>Backend</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>GraphQL</li>
                  <li>REST API Design</li>
                  <li>Django</li>
                </SkillsList>
              </SkillCategory>
              
              <SkillCategory>
                <SkillCategoryTitle>Databases</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                </SkillsList>
              </SkillCategory>
              
              <SkillCategory>
                <SkillCategoryTitle>DevOps & Tools</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>AWS Services</li>
                  <li>CI/CD Pipelines</li>
                </SkillsList>
              </SkillCategory>
              
              <SkillCategory>
                <SkillCategoryTitle>Other</SkillCategoryTitle>
                <SkillsList language={language}>
                  <li>Agile Methodologies</li>
                  <li>Test-Driven Development</li>
                  <li>RESTful Services</li>
                  <li>Microservice Architecture</li>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
          </ResumeSection>
        </ResumeContent>
      </PageContainer>
    </>
  );
};

export default Resume;