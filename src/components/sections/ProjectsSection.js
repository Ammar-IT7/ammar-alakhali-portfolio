// src/components/sections/ProjectsSection.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';
import projects from '../../data/projects';

// Custom hook for intersection observer animations
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, ...options });
  return [ref, isInView];
};

const ProjectsContainer = styled.section`
  padding: 6rem 0;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const GradientDecoration = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  z-index: -1;
  
  &.top-right {
    background: ${({ theme }) => theme.primary};
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
  }
  
  &.bottom-left {
    background: ${({ theme }) => theme.secondary || '#6c5ce7'};
    width: 300px;
    height: 300px;
    bottom: -50px;
    left: -50px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

const SectionDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.textAlt};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 10px; /* Add padding for the indicator */
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 3px;
  background: ${({ theme }) => theme.primary};
  border-radius: 3px;
`;

const FilterButton = styled(motion.button)`
  background-color: transparent;
  color: ${({ active, theme }) => active ? theme.primary : theme.text};
  border: none;
  border-radius: 30px;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: ${({ active }) => active ? '600' : '500'};
  cursor: pointer;
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
    background: ${({ theme }) => theme.primary};
    opacity: 0.1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
    border-radius: 30px;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled(motion.div)`
  position: relative;
  max-width: 500px;
  margin: 0 auto 4rem auto;
`;

const SearchInput = styled(motion.input)`
  width: 100%;
  padding: 1.2rem;
  padding-${props => props.isRTL ? 'right' : 'left'}: 3.5rem;
  border: 2px solid ${({ theme, focused }) => focused ? theme.primary : 'transparent'};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.isRTL ? 'right' : 'left'}: 1.2rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.textAlt};
  transition: color 0.3s ease;
  
  ${SearchContainer}:focus-within & {
    color: ${({ theme }) => theme.primary};
  }
`;

const ClearButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  ${props => props.isRTL ? 'left' : 'right'}: 1.2rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textAlt};
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 0, 0, 0.05);
  }
  
  &:focus {
    outline: none;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 2px; 
    background: linear-gradient(
      to bottom right, 
      ${({ theme }) => theme.primary}, 
      transparent
    ); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.13);
    
    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 0.7;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const ProjectCategory = styled.span`
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ theme }) => theme.primary};
  padding: 0.4rem 1rem;
  border-radius: 30px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  align-self: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 700;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.8rem;
  justify-content: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
`;

const TechItem = styled(motion.span)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: auto;
  justify-content: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(-100%);
      transition: transform 0.4s ease;
      z-index: -1;
    }
    
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      
      &::before {
        transform: translateX(0);
      }
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    
    &:hover {
      border-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateY(-2px);
  }
`;

const EmptyResults = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.textAlt};
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const EmptyIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    color: ${({ theme }) => theme.textAlt};
    font-size: 2rem;
  }
`;

const EmptyText = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EmptySuggestion = styled.p`
  font-size: 1rem;
`;

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  // Filter button refs for indicator positioning
  const filterRefs = useRef({});
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  
  // Scroll animation refs
  const [headerRef, headerInView] = useScrollAnimation();
  const [filtersRef, filtersInView] = useScrollAnimation();
  const [searchRef, searchInView] = useScrollAnimation();
  
  // Update active indicator position when filter changes or window resizes
  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = filterRefs.current[filter];
      
      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton;
        setActiveIndicatorWidth(offsetWidth);
        setActiveIndicatorLeft(offsetLeft);
      }
    };
    
    updateIndicator();
    
    // Add resize listener to update indicator position on window resize
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    // Focus on the search input after clearing
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
      searchInput.focus();
    }
  };

  const filteredProjects = projects.filter(project => {
    // Apply category filter
    const categoryMatch = filter === 'all' || project.category === filter;
    
    // Apply search filter (case insensitive)
    const searchLower = searchTerm.toLowerCase();
    const searchMatch = !searchTerm || 
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchLower)
      );
    
    return categoryMatch && searchMatch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };
  
  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const cardHoverVariants = {
    hover: {
      y: -12,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <ProjectsContainer id="projects">
      {/* Decorative elements */}
      <GradientDecoration className="top-right" />
      <GradientDecoration className="bottom-left" />
      
      <SectionHeader ref={headerRef}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            type: "spring",
            stiffness: 100
          }}
        >
          {t('projects.title')}
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('projects.description')}
        </SectionDescription>
      </SectionHeader>

      <FilterContainer 
        ref={filtersRef}
        initial={{ opacity: 0, y: 20 }}
        animate={filtersInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
            {['all', 'web', 'mobile', 'backend'].map((category) => (
          <FilterButton 
            key={category}
            active={filter === category} 
            onClick={() => handleFilterChange(category)}
            ref={el => filterRefs.current[category] = el}
            whileTap={{ scale: 0.95 }}
            aria-pressed={filter === category}
          >
            {t(`projects.categories.${category}`) || category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
        
        {/* Only render the indicator when we have valid measurements */}
        {activeIndicatorWidth > 0 && (
          <ActiveIndicator 
            initial={false}
            animate={{ 
              width: activeIndicatorWidth, 
              x: activeIndicatorLeft 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          />
        )}
      </FilterContainer>

      <SearchContainer 
        ref={searchRef}
        initial={{ opacity: 0, y: 20 }}
        animate={searchInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SearchInput 
          type="text" 
          placeholder={t('projects.searchPlaceholder') || "Search projects..."}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          isRTL={isRTL}
          dir={isRTL ? 'rtl' : 'ltr'}
          focused={searchFocused}
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          aria-label="Search projects"
        />
        <SearchIcon isRTL={isRTL}>
          <FaSearch aria-hidden="true" />
        </SearchIcon>
        
        {searchTerm && (
          <ClearButton 
            onClick={clearSearch} 
            isRTL={isRTL}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Clear search"
          >
            <FaTimes aria-hidden="true" />
          </ClearButton>
        )}
      </SearchContainer>

      <AnimatePresence mode="wait">
        <ProjectsGrid
          as={motion.div}
          key={`${filter}-${searchTerm}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                variants={{
                  ...itemVariants,
                  ...cardHoverVariants
                }}
                whileHover="hover"
              >
                <ProjectImageContainer>
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                  />
                  <ImageOverlay>
                    <ProjectCategory isRTL={isRTL}>
                      {t(`projects.categories.${project.category}`) || project.category}
                    </ProjectCategory>
                  </ImageOverlay>
                </ProjectImageContainer>
                
                <ProjectContent isRTL={isRTL}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTech isRTL={isRTL}>
                    {project.technologies.map((tech, index) => (
                      <TechItem 
                        key={index}
                        variants={techItemVariants}
                        whileHover={{ 
                          y: -5, 
                          backgroundColor: 'rgba(var(--primary-rgb), 0.1)' 
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                      >
                        {tech}
                      </TechItem>
                    ))}
                  </ProjectTech>
                  
                  <ProjectLinks isRTL={isRTL}>
                    {project.demoUrl && (
                      <ProjectLink 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" /> {t('projects.viewProject')}
                      </ProjectLink>
                    )}
                    
                    {project.codeUrl && (
                      <ProjectLink 
                        href={project.codeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`View ${project.title} code`}
                      >
                        <FaGithub aria-hidden="true" /> {t('projects.viewCode')}
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))
          ) : (
            <EmptyResults
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <EmptyIcon 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <FaSearch aria-hidden="true" />
              </EmptyIcon>
              <EmptyText>{t('projects.noResults') || "No projects found"}</EmptyText>
              <EmptySuggestion>
                {t('projects.adjustSearch') || "Try adjusting your search or filter criteria"}
              </EmptySuggestion>
            </EmptyResults>
          )}
        </ProjectsGrid>
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default ProjectsSection;