// src/components/sections/ProjectsSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 6rem 0;
`;

const ProjectsContent = styled.div`
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
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.textAlt};
`;

const ProjectFilters = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  background-color: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.text};
  border: 1px solid ${({ active, theme }) => active ? theme.primary : theme.border};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ active, theme }) => active ? 'white' : theme.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.primary}; // Placeholder for actual image
  position: relative;
  overflow: hidden;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textAlt};
`;

const SeeMoreButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 3rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

// Mock project data (replace with your actual projects)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, shopping cart, and payment integration.",
    image: "ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "full-stack",
    github: "https://github.com/ammaralakhali/ecommerce-platform",
    demo: "https://ecommerce-demo.ammaralakhali.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects and deadlines with team collaboration features.",
    image: "task-app.jpg",
    tags: ["React", "Firebase", "Material UI"],
    category: "frontend",
    github: "https://github.com/ammaralakhali/task-manager",
    demo: "https://task-app.ammaralakhali.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecast application with location-based services and interactive maps.",
    image: "weather-app.jpg",
    tags: ["JavaScript", "API Integration", "CSS3"],
    category: "frontend",
    github: "https://github.com/ammaralakhali/weather-dashboard",
    demo: "https://weather.ammaralakhali.com"
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A custom CMS with user roles, content editing, and publishing workflows.",
    image: "cms.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    github: "https://github.com/ammaralakhali/content-cms",
    demo: "https://cms.ammaralakhali.com"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A messaging application with real-time updates, user presence, and file sharing.",
    image: "chat-app.jpg",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "full-stack",
    github: "https://github.com/ammaralakhali/real-time-chat",
    demo: "https://chat.ammaralakhali.com"
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description: "An application to track expenses, income, and financial goals with visual analytics.",
    image: "finance-app.jpg",
    tags: ["React", "Chart.js", "Firebase"],
    category: "frontend",
    github: "https://github.com/ammaralakhali/finance-tracker",
    demo: "https://finance.ammaralakhali.com"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [showAll, setShowAll] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects. Check out my GitHub for more.
        </SectionSubtitle>
        
        <ProjectFilters
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterButton 
            active={activeFilter === "all" ? 1 : 0}
            onClick={() => handleFilterChange("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          
          <FilterButton 
            active={activeFilter === "frontend" ? 1 : 0}
            onClick={() => handleFilterChange("frontend")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </FilterButton>
          
          <FilterButton 
            active={activeFilter === "backend" ? 1 : 0}
            onClick={() => handleFilterChange("backend")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </FilterButton>
          
          <FilterButton 
            active={activeFilter === "full-stack" ? 1 : 0}
            onClick={() => handleFilterChange("full-stack")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Stack
          </FilterButton>
        </ProjectFilters>
        
        <ProjectsGrid
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <ProjectImage>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    {project.title}
                  </div>
                  <ImageOverlay>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ImageOverlay>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {project.tags.map((tag, index) => (
                      <TechTag key={index}>
                        {tag === "React" && <FaReact />}
                        {tag === "Node.js" && <FaNodeJs />}
                        {tag === "MongoDB" && <FaDatabase />}
                        {tag}
                      </TechTag>
                    ))}
                  </TechStack>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
        
        {filteredProjects.length > 3 && (
          <SeeMoreButton
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "See More Projects"}
          </SeeMoreButton>
        )}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
