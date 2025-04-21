// src/components/sections/ProjectsSection.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes, FaFolder, FaSadTear } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';
import projects from '../../data/projects';

// Enhanced hook for responsive animations that respect user preferences
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    ...options
  });
  const controls = useAnimation();
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      
      // Add listener for preference changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMediaChange = (e) => {
        setPrefersReducedMotion(e.matches);
      };
      
      // Add listener with proper fallback for older browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleMediaChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleMediaChange);
      }
      
      // Cleanup
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleMediaChange);
        } else {
          // Fallback for older browsers
          mediaQuery.removeListener(handleMediaChange);
        }
      };
    }
  }, []);
  
  useEffect(() => {
    if (isInView) {
      controls.start(prefersReducedMotion ? "visibleNoAnimation" : "visible");
    }
  }, [isInView, controls, prefersReducedMotion]);
  
  return [ref, isInView, controls];
};

// Background animations
const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
// Subtle shine animation for card hover effects
const shineAnimation = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Floating animation for focus elements
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Modern container with improved spacing
const ProjectsContainer = styled(motion.section)`
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(6rem, 10vw, 10rem);
  width: min(92%, 1500px);
  margin: 0 auto;
  position: relative;
  overflow: visible;
`;

// Enhanced background elements with better layering
const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

// Improved geometry with better visual appeal
const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(clamp(30px, 5vw, 80px));
  opacity: 0.12;
  z-index: -1;
  
  &.top-right {
    background: ${({ theme }) => theme.primary || '#6c5ce7'};
    width: min(300px, 30vw);
    height: min(300px, 30vw);
    top: -50px;
    right: -50px;
  }
  
  &.bottom-left {
    background: ${({ theme }) => theme.secondary || '#6c5ce7'};
    width: min(250px, 25vw);
    height: min(250px, 25vw);
    bottom: min(-25px, -2.5vw);
    left: min(-25px, -2.5vw);
  }
  
  &.middle-center {
    background: ${({ theme }) => theme.textAlt || '#aaa'};
    width: min(400px, 40vw);
    height: min(400px, 40vw);
    top: 50%;
    left: 30%;
    transform: translateY(-50%);
    opacity: 0.05;
  }
`;

// Subtle grid for depth
const Grid = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-size: clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px);
  background-image: 
    linear-gradient(to right, ${({ theme }) => theme.border || '#ddd'} 1px, transparent 1px),
    linear-gradient(to bottom, ${({ theme }) => theme.border || '#ddd'} 1px, transparent 1px);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
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
  animation: ${gradientBg} 8s linear infinite;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  ${titleGradient}
  display: inline-block;
  position: relative;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 6px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    &::after {
      width: 80px;
      height: 4px;
      bottom: -10px;
    }
  }
`;

const SectionSubtitle = styled(motion.span)`
  display: block;
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
`;

const SectionDescription = styled(motion.p)`
  max-width: 850px;
  margin: 2.5rem auto 0;
  color: ${({ theme }) => theme.textAlt};
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.8;
  text-align: center;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    line-height: 1.6;
  }
`;


// Improved filter design with better accessibility
const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(0.6rem, 1.5vw, 1.2rem);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  position: relative;
  padding-bottom: 15px;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

// Animated indicator with improved transitions
const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 4px;
  background: linear-gradient(to right, ${({ theme }) => theme.primary || '#6c5ce7'}, ${({ theme }) => theme.secondary || '#6c5ce7'});
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
`;

// Enhanced buttons with better state visualization
const FilterButton = styled(motion.button)`
  background-color: transparent;
  color: ${({ active, theme }) => active ? (theme.primary || '#6c5ce7') : (theme.text || '#222')};
  border: none;
  border-radius: 30px;
  padding: clamp(0.7rem, 1.2vw, 0.9rem) clamp(1.2rem, 2vw, 2rem);
  font-size: clamp(0.9rem, 1.2vw, 1.05rem);
  font-weight: ${({ active }) => active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  box-shadow: ${({ active }) => active ? `0 5px 15px rgba(108, 92, 231, 0.15)` : 'none'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primary || '#6c5ce7'};
    opacity: 0.08;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 30px;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary || '#6c5ce7'};
    outline-offset: 2px;
  }
`;

// Improved search with better visual feedback
const SearchContainer = styled(motion.div)`
  position: relative;
  max-width: min(600px, 90%);
  margin: 0 auto clamp(3rem, 6vw, 5rem) auto;
`;

// Accessible search input with better focus states
const SearchInput = styled(motion.input)`
  width: 100%;
  padding: clamp(1.2rem, 2vw, 1.5rem);
  padding-${props => props.isRTL ? 'right' : 'left'}: clamp(3.5rem, 5vw, 4rem);
  border: 2px solid ${({ theme, focused }) => focused ? (theme.primary || '#6c5ce7') : 'rgba(108, 92, 231, 0.1)'};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.backgroundAlt || '#f8f9fa'};
  color: ${({ theme }) => theme.text || '#222'};
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  box-shadow: ${({ focused }) => focused ? '0 8px 25px rgba(0, 0, 0, 0.1)' : '0 5px 15px rgba(0, 0, 0, 0.05)'};
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || '#6c5ce7'};
    box-shadow: 0 10px 30px rgba(108, 92, 231, 0.15);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textAlt || '#888'};
    opacity: 0.7;
  }
`;

// Enhanced search icon with animations
const SearchIcon = styled(motion.div)`
  position: absolute;
  top: 50%;
  ${props => props.isRTL ? 'right' : 'left'}: clamp(1.2rem, 2vw, 1.5rem);
  transform: translateY(-50%);
  color: ${({ theme, focused }) => focused ? (theme.primary || '#6c5ce7') : (theme.textAlt || '#888')};
  transition: color 0.3s ease;
  font-size: clamp(1rem, 1.3vw, 1.2rem);
`;

// Improved clear button with better tap target
const ClearButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  ${props => props.isRTL ? 'left' : 'right'}: clamp(1.2rem, 2vw, 1.5rem);
  transform: translateY(-50%);
  background: rgba(108, 92, 231, 0.1);
  border: none;
  color: ${({ theme }) => theme.textAlt || '#888'};
  cursor: pointer;
  width: clamp(28px, 3vw, 32px);
  height: clamp(28px, 3vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: ${({ theme }) => theme.primary || '#6c5ce7'};
    background: rgba(108, 92, 231, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary || '#6c5ce7'};
    outline-offset: 2px;
  }
`;

// Modern responsive grid with improved layout
const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  width: 100%;
`;

// Enhanced project card with modern design patterns
const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundAlt || '#f8f9fa'};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-10px);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px; 
    background: linear-gradient(
      to bottom right, 
      ${({ theme }) => theme.primary || '#6c5ce7'}, 
      ${({ theme }) => theme.secondary || '#6c5ce7'},
      transparent,
      transparent
    ); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

// Improved image container with better overflow handling
const ProjectImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: clamp(180px, 25vw, 250px);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0.6;
    transition: opacity 0.5s ease;
    z-index: 1;
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 0.8;
  }
`;

// Enhanced image handling with better loading
const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform;
  
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

// Improved overlay with better accessibility
const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1rem, 2vw, 1.8rem);
  z-index: 2;
`;

// Enhanced content container with better text hierarchy
const ProjectContent = styled(motion.div)`
  padding: clamp(1.5rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

// Improved category pill design
const ProjectCategory = styled(motion.span)`
  color: white;
  font-size: clamp(0.7rem, 1vw, 0.85rem);
  font-weight: 700;
  background: ${({ theme }) => theme.primary || '#6c5ce7'};
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  align-self: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
  backdrop-filter: blur(5px);
  transform: translateY(100%);
  opacity: 0;
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
`;

// Modern typography with improved scaling
const ProjectTitle = styled(motion.h3)`
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 700;
  transition: color 0.4s ease;
  
  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.primary || '#6c5ce7'};
  }
`;

// Improved description with better spacing
const ProjectDescription = styled(motion.p)`
  color: ${({ theme }) => theme.textAlt || '#888'};
  margin-bottom: 1.8rem;
  flex-grow: 1;
  line-height: 1.7;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
`;

// Enhanced tech stack display
const ProjectTech = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 0.8vw, 0.8rem);
  margin-bottom: clamp(1.5rem, 2vw, 2rem);
  justify-content: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
`;

// Improved tech item with better hover states
const TechItem = styled(motion.span)`
  background-color: ${({ theme }) => theme.background || '#fff'};
  color: ${({ theme }) => theme.text || '#222'};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: clamp(0.75rem, 0.9vw, 0.85rem);
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  ${ProjectCard}:hover & {
    animation-delay: calc(var(--i) * 0.1s);
  }
`;

// Enhanced link container with better spacing
const ProjectLinks = styled(motion.div)`
  display: flex;
  gap: clamp(0.8rem, 1.5vw, 1.2rem);
  margin-top: auto;
  justify-content: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
  
  @media (max-width: 480px) {
    flex-direction: ${props => props.isRTL ? 'column-reverse' : 'column'};
    gap: 0.8rem;
  }
`;

// Modern link design with enhanced accessibility
const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.2rem, 1.5vw, 1.5rem);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
  
  &.primary {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary || '#6c5ce7'},
      ${({ theme }) => theme.secondary || '#6c5ce7'}
    );
    color: white;
    box-shadow: 0 4px 10px rgba(108, 92, 231, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateX(-100%);
      transition: transform 0.7s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 14px rgba(108, 92, 231, 0.3);
      
      &::before {
        transform: translateX(100%);
        animation: ${shineAnimation} 1.5s infinite;
      }
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.text || '#222'};
    border: 1px solid ${({ theme }) => theme.border || '#ddd'};
    
    &:hover {
      color: ${({ theme }) => theme.primary || '#6c5ce7'};
      border-color: ${({ theme }) => theme.primary || '#6c5ce7'};
      background: rgba(108, 92, 231, 0.05);
      transform: translateY(-3px);
    }
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary || '#6c5ce7'};
    outline-offset: 3px;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: ${props => props.isRTL ? 'translateX(-4px)' : 'translateX(4px)'};
  }
`;

// Enhanced empty state with better visual feedback
const EmptyResults = styled(motion.div)`
  text-align: center;
  padding: clamp(4rem, 6vw, 6rem) clamp(1.5rem, 2vw, 2rem);
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.textAlt || '#888'};
  background-color: ${({ theme }) => theme.backgroundAlt || '#f8f9fa'};
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 2vw, 2rem);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(108, 92, 231, 0.05),
      transparent
    );
    top: 0;
    left: -100%;
    animation: ${shineAnimation} 4s infinite linear;
  }
`;

// Improved empty state icon
const EmptyIcon = styled(motion.div)`
  width: clamp(80px, 10vw, 100px);
  height: clamp(80px, 10vw, 100px);
  background: ${({ theme }) => theme.background || '#fff'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${floatAnimation} 4s ease-in-out infinite;
  
  svg {
    color: ${({ theme }) => theme.textAlt || '#888'};
    font-size: clamp(2rem, 2.5vw, 2.5rem);
  }
`;

// Enhanced empty text with better typography
const EmptyText = styled(motion.h4)`
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

// Enhanced suggestion with improved readability
const EmptySuggestion = styled(motion.p)`
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  max-width: 500px;
`;

// Modern reset button with improved design
const ResetButton = styled(motion.button)`
  margin-top: 1rem;
  background: var(--primary, #6c5ce7);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    top: 0;
    left: -100%;
    transition: 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
  }
`;

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      
      // Add listener for preference changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMediaChange = (e) => {
        setPrefersReducedMotion(e.matches);
      };
      
      // Add listener with proper fallback for older browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleMediaChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleMediaChange);
      }
      
      // Cleanup
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleMediaChange);
        } else {
          // Fallback for older browsers
          mediaQuery.removeListener(handleMediaChange);
        }
      };
    }
  }, []);
  
  // Filter button refs for indicator positioning
  const filterRefs = useRef({});
  const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
  const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
  
  // Intersection observers for scroll animations
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const headerControls = useAnimation();
  const [filtersRef, filtersControls] = useScrollAnimation();
  const [searchRef, searchControls] = useScrollAnimation();
  const [gridRef] = useScrollAnimation({ amount: 0.1 });
  
  useEffect(() => {
    if (headerInView) {
      headerControls.start(prefersReducedMotion ? "visibleNoAnimation" : "visible");
    }
  }, [headerInView, headerControls, prefersReducedMotion]);
  // Update active indicator position when filter changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = filterRefs.current[filter];
      
      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton;
        setActiveIndicatorWidth(offsetWidth);
        setActiveIndicatorLeft(offsetLeft);
      }
    };
    
    // Initial update
    updateIndicator();
    
    // Set up a small timeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateIndicator, 50);
    
    // Add resize listener
    const handleResize = () => {
      updateIndicator();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    // Focus search input after clearing
    if (typeof document !== 'undefined') {
      const searchInput = document.querySelector('input[type="text"]');
      if (searchInput) {
        searchInput.focus();
      }
    }
  };

  // Apply filters and search
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
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    visibleNoAnimation: {
      opacity: 1,
      transition: { duration: 0.5 }
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
        damping: 15
      }
    },
    visibleNoAnimation: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
    },
    visibleNoAnimation: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Background animation
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.12,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    },
    visibleNoAnimation: {
      scale: 1, 
      opacity: 0.12,
      transition: { duration: 0.5 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <ProjectsContainer id="projects" ref={gridRef}>
      {/* Background elements */}
      <BackgroundElements>
        <Circle 
          className="top-right" 
          variants={circleVariants}
          initial="hidden"
          animate={prefersReducedMotion ? "visibleNoAnimation" : ["visible", "pulse"]}
        />
        <Circle 
          className="bottom-left" 
          variants={circleVariants}
          initial="hidden"
          animate={prefersReducedMotion ? "visibleNoAnimation" : ["visible", "pulse"]}
          transition={{ delay: 0.3 }}
        />
        <Circle 
          className="middle-center" 
          variants={circleVariants}
          initial="hidden"
          animate={prefersReducedMotion ? "visibleNoAnimation" : ["visible", "pulse"]}
          transition={{ delay: 0.6 }}
        />
        <Grid 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.2 }}
        />
      </BackgroundElements>

      {/* Section Header */}
      <SectionHeader ref={headerRef}>
      <SectionSubtitle
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    visibleNoAnimation: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }}
  initial="hidden"
  animate={headerControls}
>
  {t('projects.subtitle')}
</SectionSubtitle>

<SectionTitle
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } },
    visibleNoAnimation: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }}
  initial="hidden"
  animate={headerControls}
>
  {t('projects.title')}
</SectionTitle>

<SectionDescription
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
    visibleNoAnimation: { opacity: 1, transition: { duration: 0.5 } }
  }}
  initial="hidden"
  animate={headerControls}
>
  {t('projects.description')}
</SectionDescription>
      </SectionHeader>

      {/* Filters */}
      <FilterContainer 
        ref={filtersRef}
        initial={{ opacity: 0, y: 20 }}
        animate={filtersControls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }
          },
          visibleNoAnimation: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        {['all', 'web', 'mobile', 'backend'].map((category) => (
          <FilterButton 
            key={category}
            active={filter === category} 
            onClick={() => handleFilterChange(category)}
            ref={el => filterRefs.current[category] = el}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 0.98 : 0.95 }}
            aria-pressed={filter === category}
          >
            {t(`projects.categories.${category}`) || category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
        
        {/* Active indicator - fixed to show properly */}
        {activeIndicatorWidth > 0 && (
          <ActiveIndicator 
            initial={false}
            animate={{ 
              width: activeIndicatorWidth, 
              left: activeIndicatorLeft,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }
            }}
          />
        )}
      </FilterContainer>

      {/* Search */}
      <SearchContainer 
        ref={searchRef}
        initial={{ opacity: 0, y: 20 }}
        animate={searchControls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              stiffness: 100
            }
          },
          visibleNoAnimation: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        <SearchIcon 
          isRTL={isRTL}
          focused={searchFocused}
          animate={{ scale: searchFocused && !prefersReducedMotion ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <FaSearch aria-hidden="true" />
        </SearchIcon>
        
        <SearchInput 
          type="text" 
          placeholder={t('projects.searchPlaceholder') || "Search projects by name, description or technology..."}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          isRTL={isRTL}
          dir={isRTL ? 'rtl' : 'ltr'}
          focused={searchFocused}
          transition={{ duration: 0.3 }}
          aria-label="Search projects"
        />
        
        <AnimatePresence>
          {searchTerm && (
            <ClearButton 
              onClick={clearSearch} 
              isRTL={isRTL}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
              whileTap={{ scale: prefersReducedMotion ? 0.98 : 0.9 }}
              aria-label="Clear search"
              transition={{ duration: 0.2 }}
            >
              <FaTimes aria-hidden="true" />
            </ClearButton>
          )}
        </AnimatePresence>
      </SearchContainer>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
      <ProjectsGrid
        as={motion.div}
        key="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={prefersReducedMotion ? "visibleNoAnimation" : "visible"}
      >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                variants={itemVariants}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  duration: 0.4
                }}
              >
                <ProjectImageContainer>
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30 40 L70 40 L70 60 L30 60 Z' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%23999999'%3ENo Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <ImageOverlay>
                    <ProjectCategory isRTL={isRTL}>
                      {t(`projects.categories.${project.category}`) || project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </ProjectCategory>
                  </ImageOverlay>
                </ProjectImageContainer>
                
                <ProjectContent isRTL={isRTL}>
                  <ProjectTitle>
                    {project.title}
                  </ProjectTitle>
                  
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>
                  
                  <ProjectTech isRTL={isRTL}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechItem 
                        key={techIndex}
                        variants={techItemVariants}
                        style={{ "--i": techIndex }}
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
                        isRTL={isRTL}
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" /> {t('projects.viewProject') || "View Project"}
                      </ProjectLink>
                    )}
                    
                    {project.codeUrl && (
                      <ProjectLink 
                        href={project.codeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary"
                        isRTL={isRTL}
                        aria-label={`View ${project.title} code`}
                      >
                        <FaGithub aria-hidden="true" /> {t('projects.viewCode') || "View Code"}
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
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <EmptyIcon>
                <FaSadTear aria-hidden="true" />
              </EmptyIcon>
              <EmptyText>
                {t('projects.noResults') || "No projects found"}
              </EmptyText>
              <EmptySuggestion>
                {t('projects.adjustSearch') || "Try adjusting your search or filter criteria"}
              </EmptySuggestion>
              
              <ResetButton
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                whileTap={{ scale: prefersReducedMotion ? 0.98 : 0.95 }}
              >
                <FaFolder /> Reset Filters
              </ResetButton>
            </EmptyResults>
          )}
        </ProjectsGrid>
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default ProjectsSection;