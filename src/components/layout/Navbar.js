import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes, css, ThemeContext } from 'styled-components';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { 
  FaSun, FaMoon, FaTimes, FaHome, FaUser, FaProjectDiagram, FaFileAlt, 
  FaEnvelope
} from 'react-icons/fa';
import { IoLanguage, IoChevronDown } from 'react-icons/io5';
import { LanguageContext } from '../../contexts/LanguageContext';
import useMediaQuery from '../../hooks/useMediaQuery';

// Constants
const MOBILE_BREAKPOINT = '768px';
const SCROLL_THRESHOLD = 30;
const BACK_TO_TOP_THRESHOLD = 500;
const HIDE_NAVBAR_THRESHOLD = 300;

// Enhanced Animations
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Navbar container with auto-hide on scroll down behavior
const NavContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ scrolled, isHidden }) => 
    isHidden ? '0.4rem 0' : (scrolled ? '0.5rem 0' : '0.8rem 0')};
  background-color: ${({ theme, scrolled }) => 
    scrolled ? `${theme.background}ee` : 'transparent'};
  box-shadow: ${({ scrolled, theme, isHidden }) => 
    isHidden ? 'none' : (scrolled ? `0 4px 30px ${theme.shadowColor}` : 'none')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(12px) saturate(180%)' : 'none'};
  border-bottom: ${({ scrolled, theme, isHidden }) => 
    isHidden ? 'none' : (scrolled ? `1px solid ${theme.border}33` : 'none')};
  transform: translateY(${({ isHidden }) => isHidden ? '-100%' : '0'});
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: ${({ scrolled }) => scrolled ? '0.4rem 0' : '0.6rem 0'};
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  height: ${({ scrolled }) => scrolled ? '50px' : '60px'};
  transition: height 0.3s ease;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: ${({ scrolled }) => scrolled ? '45px' : '50px'};
  }
`;

// Enhanced Logo with glitch effect on hover
const Logo = styled(motion(Link))`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme, scrolled }) => scrolled ? theme.primary : theme.text};
  text-decoration: none;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  display: inline-block;
  background: ${({ scrolled, theme }) => 
    scrolled ? 
    `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})` : 
    'none'};
  background-size: ${({ scrolled }) => scrolled ? '200% auto' : 'auto'};
  background-clip: ${({ scrolled }) => scrolled ? 'text' : 'none'};
  -webkit-background-clip: ${({ scrolled }) => scrolled ? 'text' : 'none'};
  -webkit-text-fill-color: ${({ scrolled }) => scrolled ? 'transparent' : 'inherit'};
  animation: ${({ scrolled }) => scrolled ? css`${shimmer} 3s linear infinite` : 'none'};
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background: ${({ theme, scrolled }) => 
      scrolled ? `linear-gradient(90deg, transparent, ${theme.primary}80, transparent)` : 'transparent'};
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.5rem;
  }
`;
const LogoHighlight = styled.span`
  color: ${({ theme }) => theme.primary};
`;

// Supercharged sidebar for mobile with better animations and accessibility
const NavLinks = styled(motion.nav)`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    position: fixed;
    top: 0;
    ${({ isRTL }) => isRTL ? 'left' : 'right'}: 0;
    width: 85%;
    max-width: 360px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => `linear-gradient(145deg, ${theme.backgroundAlt}f5, ${theme.background}f8)`};
    backdrop-filter: blur(20px);
    padding: 5rem 1rem 2rem;
    gap: 0.5rem;
    box-shadow: ${({ isRTL, theme }) => 
      isRTL ? `5px 0 25px ${theme.shadowColor}` : `-5px 0 25px ${theme.shadowColor}`};
    z-index: 100;
    overflow-y: auto;
    overflow-x: hidden;
    /* Improved scrollbar */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.primary}33 transparent`};
    
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => `${theme.primary}33`};
      border-radius: 10px;
    }
  }
`;

const SidebarHeader = styled.div`
  display: none;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1.5rem 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.border}22;
  }
`;

const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SidebarLogo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`};
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${css`${shimmer} 3s linear infinite`};
`;

const SidebarGreeting = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const SidebarTagline = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.4;
`;

const SidebarSection = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: ${parseInt(MOBILE_BREAKPOINT) + 1}px) {
    display: none;
  }
`;

const SidebarSectionTitle = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 0.75rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  transform: ${({ isExpanded }) => isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

const NavItemsGroup = styled(motion.div)`
  width: 100%;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 1rem;
  }
`;

// Improved link item with badge support
const LinkItem = styled(motion.div)`
  position: relative;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    margin-bottom: 0.25rem;
  }
`;

const NavLink = styled(motion(Link))`
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
  color: ${({ theme, scrolled, active }) => 
    active ? theme.primary : (scrolled ? theme.text : theme.text)};
  letter-spacing: 0.5px;
  transition: color 0.3s ease, transform 0.3s ease, background 0.3s ease;
  border-radius: ${({ isMobile }) => isMobile ? '12px' : '8px'};
  
  &:hover {
    background: ${({ theme, isMobile, active }) => 
      !active && !isMobile ? `${theme.primary}11` : 'transparent'};
  }
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.05rem;
    padding: 0.9rem 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ isRTL }) => isRTL ? 'flex-end' : 'flex-start'};
    text-align: ${({ isRTL }) => isRTL ? 'right' : 'left'};
    border-radius: 12px;
    background: ${({ active, theme }) => active ? `${theme.primary}15` : 'transparent'};
    box-shadow: ${({ active, theme }) => active ? `0 4px 15px ${theme.shadowColor}20` : 'none'};
  }
`;

const LinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => 
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`};
  background-size: 200% auto;
  animation: ${css`${shimmer} 3s linear infinite`};
  border-radius: 4px;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const NavIcon = styled.span`
  margin-right: ${({ isRTL }) => isRTL ? '0' : '1rem'};
  margin-left: ${({ isRTL }) => isRTL ? '1rem' : '0'};
  font-size: 1.1rem;
  color: ${({ theme, active }) => active ? theme.primary : theme.textMuted};
  
  @media (min-width: ${parseInt(MOBILE_BREAKPOINT) + 1}px) {
    display: none;
  }
`;

// Badge for new features
const LinkBadge = styled.span`
  position: absolute;
  top: ${({ isMobile }) => isMobile ? '50%' : '0'};
  ${({ isRTL, isMobile }) => isRTL 
    ? `left: ${isMobile ? '15px' : '0'}` 
    : `right: ${isMobile ? '15px' : '0'}`};
  background: ${({ theme, variant }) => 
    variant === 'new' ? theme.secondary : theme.danger};
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  transform: ${({ isMobile }) => isMobile ? 'translateY(-50%)' : 'translateY(-50%)'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

// Enhanced controls container
const ControlsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background: ${({ theme, scrolled }) => scrolled ? `${theme.border}` : 'transparent'};
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
      display: none;
    }
  }
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 0.6rem;
  }
`;

// Updated controls container for sidebar
const SidebarControlsContainer = styled.div`
  display: none;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    width: 100%;
    padding: 1.5rem;
    margin-top: auto;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => `${theme.backgroundAlt}33`};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.border}22;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
`;

// Advanced control button with ripple effect
const ControlButton = styled(motion.button)`
  position: relative;
  background: ${({ active, theme }) => 
    active ? `linear-gradient(135deg, ${theme.primary}33, ${theme.secondary}33)` : 'transparent'};
  border: 1px solid ${({ theme, scrolled }) => 
    scrolled ? `${theme.border}33` : 'transparent'};
  color: ${({ theme, scrolled }) => scrolled ? theme.text : theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 12px;
  backdrop-filter: ${({ active }) => active ? 'blur(4px)' : 'none'};
  box-shadow: ${({ active, theme }) => 
    active ? `0 4px 15px ${theme.shadowColor}` : 'none'};
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => `${theme.primary}11`};
    opacity: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s ease-out, opacity 0.5s ease;
  }
  
  &:active::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: 0s;
  }
  
  &:hover {
    background: ${({ theme }) => 
      `linear-gradient(135deg, ${theme.primary}22, ${theme.secondary}22)`};
    transform: translateY(-2px);
    border-color: ${({ theme }) => `${theme.primary}33`};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px;
    font-size: 1rem;
  }
`;

// Larger control button for sidebar
const SidebarControlButton = styled(ControlButton)`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 14px;
    background: ${({ theme, active }) => 
      active ? `linear-gradient(135deg, ${theme.primary}33, ${theme.secondary}33)` : 
      `${theme.background}99`};
    border: 1px solid ${({ theme }) => theme.border}33;
  }
`;

// Enhanced theme toggle
const ThemeToggle = styled(ControlButton)`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme, currentTheme }) => 
      currentTheme === 'dark' ? 
      `radial-gradient(circle at 70% 30%, ${theme.primary}33, transparent 70%)` : 
      `radial-gradient(circle at 30% 70%, ${theme.secondary}33, transparent 70%)`};
    opacity: 0.8;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
`;

const LanguageToggle = styled(ControlButton)`
  position: relative;
`;

const LanguageIndicator = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0.5rem;
  letter-spacing: 0.5px;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => `${theme.primary}33`};
`;

// Enhanced menu button with advanced animation
const MenuIcon = styled(ControlButton)`
  display: none;
  z-index: 1001;
  border-radius: 12px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
`;

// New hamburger animation
const HamburgerIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: transform 0.25s ease-in-out, top 0.25s ease-in-out, opacity 0.25s ease-in-out;
  }
  
  span:nth-child(1) {
    top: ${({ isOpen }) => isOpen ? '9px' : '2px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(135deg)' : 'none'};
  }
  
  span:nth-child(2) {
    top: 9px;
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }
  
  span:nth-child(3) {
    top: ${({ isOpen }) => isOpen ? '9px' : '16px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(-135deg)' : 'none'};
  }
`;

// Improved overlay with blur effect
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)'};
  backdrop-filter: blur(5px);
  z-index: 99;
  display: none;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

// Enhanced Progress indicator for scrolling
const ProgressBar = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  background: ${({ theme }) => 
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`};
  background-size: 200% auto;
  animation: ${css`${shimmer} 3s linear infinite`};
  transform-origin: 0%;
  z-index: 1001;
`;

// Mini progress indicator on mobile
const MiniProgressIndicator = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => 
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`};
  background-size: 200% auto;
  animation: ${css`${shimmer} 3s linear infinite`};
  transform-origin: 0%;
  z-index: 1002;
  
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: ${({ scrolled }) => scrolled ? 'block' : 'none'};
  }
`;

// Mobile active indicator
const MobileActiveIndicator = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 75%;
  border-radius: 4px;
  z-index: 1;
  ${({ isRTL }) => isRTL ? 'right: 0' : 'left: 0'};
  top: 12.5%;
  background: ${({ theme }) => 
    `linear-gradient(to bottom, ${theme.primary}, ${theme.secondary})`};
`;

// Social links in sidebar
const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: ${({ theme }) => `${theme.background}cc`};
  border: 1px solid ${({ theme }) => theme.border}33;
  color: ${({ theme }) => theme.textMuted};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => `${theme.primary}22`};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

// Back to top button
const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px ${({ theme }) => theme.shadowColor};
  z-index: 90;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.shadowColor};
  }
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    navigation: true
  });
  
  const navRef = useRef(null);
  const location = useLocation();
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const isRTL = language === 'ar';
  const { scrollYProgress, scrollY } = useScroll();
  const preferReducedMotion = useReducedMotion();
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT})`);
  
  // Track scroll direction to auto-hide navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > HIDE_NAVBAR_THRESHOLD && latest > lastScrollY) {
      // Scrolling down
      setIsHidden(true);
    } else {
      // Scrolling up
      setIsHidden(false);
    }
    
    // Show back to top button when scrolled down enough
    setShowBackToTop(latest > BACK_TO_TOP_THRESHOLD);
    
    setLastScrollY(latest);
  });

  // Check if mobile on initial render and on resize
  useEffect(() => {
    setIsMobile(isMobileView);
  }, [isMobileView]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants with reduced motion support
  const logoVariants = preferReducedMotion ? {} : {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const linkVariants = preferReducedMotion ? {} : {
    hover: {
      scale: 1.05,
      x: isRTL ? -4 : 4,
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const buttonVariants = preferReducedMotion ? {} : {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.9 }
  };

  // Enhanced sidebar animations
  const sidebarVariants = preferReducedMotion ? {} : {
    hidden: { 
      x: isRTL ? '-100%' : '100%',
      opacity: 0.3
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    exit: { 
      x: isRTL ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const sidebarItemVariants = preferReducedMotion ? {} : {
    hidden: { 
      opacity: 0,
      x: isRTL ? -20 : 20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const navPages = [
    { path: '/', label: t('nav.home'), icon: <FaHome />, badge: null },
    { path: '/about', label: t('nav.about'), icon: <FaUser />, badge: null },
    // { path: '/projects', label: t('nav.projects'), icon: <FaProjectDiagram />, badge: null },
    // { path: '/resume', label: t('nav.resume'), icon: <FaFileAlt />, badge: null },
    { path: '/contact', label: t('nav.contact'), icon: <FaEnvelope />, badge: { text: t('common.new'), variant: 'new' } }
  ];

  return (
    <>
      <NavContainer 
        scrolled={scrolled}
        isHidden={isHidden && !isMenuOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <MiniProgressIndicator 
          scrolled={scrolled}
          style={{ scaleX: scrollYProgress }}
        />
      
        <NavContent ref={navRef} scrolled={scrolled}>
        <MenuIcon 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            scrolled={scrolled}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMenuOpen}
            active={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </MenuIcon>
          <Logo 
            to="/" 
            scrolled={scrolled}
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label={t('nav.goHome')}
          >
            {language === 'en' ? (
              <>
                <LogoHighlight>E</LogoHighlight>nova
                <LogoHighlight> S</LogoHighlight>tudio
              </>
            ) : (
              <>
                <LogoHighlight>إ</LogoHighlight>ينوفا
                <LogoHighlight> س</LogoHighlight>توديو
              </>
            )}
          </Logo>

          <AnimatePresence>
            {isMenuOpen && (
              <Overlay 
                isOpen={isMenuOpen}
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                isDark={theme.isDark}
              />
            )}
          </AnimatePresence>

          {/* Desktop links */}
          {!isMobile && (
            <NavLinks role="navigation" aria-label={t('nav.mainNavigation')}>
              {navPages.map((link, i) => (
                <LinkItem 
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.1 * i,
                      duration: 0.3 
                    }
                  }}
                >
                  <NavLink 
                    to={link.path} 
                    active={location.pathname === link.path ? 1 : 0} // Using numbers for boolean props
                    scrolled={scrolled}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    isRTL={isRTL}
                    isMobile={false}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.label}
                    {link.badge && (
                      <LinkBadge
                        variant={link.badge.variant}
                        isMobile={false}
                        isRTL={isRTL}
                      >
                        {link.badge.text}
                      </LinkBadge>
                    )}
                    {location.pathname === link.path && (
                      <LinkIndicator
                        layoutId="navIndicator"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30 
                        }}
                      />
                    )}
                  </NavLink>
                </LinkItem>
              ))}
            </NavLinks>
          )}

          {/* Mobile sidebar with enhanced animations and features */}
          <AnimatePresence>
            {isMobile && isMenuOpen && (
              <NavLinks 
                as={motion.nav}
                isOpen={isMenuOpen} 
                isRTL={isRTL}
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                role="navigation"
                aria-label={t('nav.mainNavigation')}
              >
                <SidebarHeader>
                  <SidebarBrand>
                    <SidebarLogo>
                      {language === 'en' ? (
                        <>
                          E<span>nova</span> S<span>tudio</span>
                        </>
                      ) : (
                        <>
                          إ<span>ينوفا</span> س<span>توديو</span>
                        </>
                      )}
                    </SidebarLogo>
                  </SidebarBrand>
                  <SidebarGreeting>
                    {t('sidebar.greeting')}
                  </SidebarGreeting>
                  <SidebarTagline>
                    {t('sidebar.tagline')}
                  </SidebarTagline>
                </SidebarHeader>

                <SidebarSection>
                  <SidebarSectionTitle>
                    {t('sidebar.navigation')}
                    <SectionToggle 
                      onClick={() => toggleSection('navigation')} 
                      isExpanded={expandedSections.navigation}
                      aria-expanded={expandedSections.navigation}
                      aria-label={expandedSections.navigation ? t('sidebar.collapseNavigation') : t('sidebar.expandNavigation')}
                    >
                      <IoChevronDown size={14} />
                    </SectionToggle>
                  </SidebarSectionTitle>
                  
                  <AnimatePresence>
                    {expandedSections.navigation && (
                      <NavItemsGroup
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {navPages.map((link, i) => (
                          <LinkItem 
                            key={link.path}
                            variants={sidebarItemVariants}
                          >
                            <NavLink 
                              to={link.path} 
                              onClick={closeMenu}
                              active={location.pathname === link.path ? 1 : 0} // Using numbers for boolean props
                              scrolled={scrolled}
                              variants={linkVariants}
                              whileHover="hover"
                              whileTap="tap"
                              isRTL={isRTL}
                              isMobile={true}
                              aria-current={location.pathname === link.path ? "page" : undefined}
                            >
                              <NavIcon 
                                isRTL={isRTL} 
                                active={location.pathname === link.path ? 1 : 0} // Using numbers for boolean props
                              >
                                {link.icon}
                              </NavIcon>
                              {link.label}
                              {link.badge && (
                                <LinkBadge
                                  variant={link.badge.variant}
                                  isMobile={true}
                                  isRTL={isRTL}
                                >
                                  {link.badge.text}
                                </LinkBadge>
                              )}
                              {location.pathname === link.path && (
                                <MobileActiveIndicator isRTL={isRTL} layoutId="mobileActiveIndicator" />
                              )}
                            </NavLink>
                          </LinkItem>
                        ))}
                      </NavItemsGroup>
                    )}
                  </AnimatePresence>
                </SidebarSection>

                <SidebarControlsContainer>
                  <SidebarControlButton 
                    onClick={toggleLanguage}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label={t('nav.switchLanguage')}
                  >
                    <IoLanguage />
                    <LanguageIndicator>{language.toUpperCase()}</LanguageIndicator>
                  </SidebarControlButton>
                  
                  <SidebarControlButton 
                    onClick={toggleTheme}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    currentTheme={currentTheme}
                    animate={
                      currentTheme === 'light' 
                        ? { rotate: [0, 15, 0], scale: [1, 1.1, 1] } 
                        : { rotate: [0, -15, 0], scale: [1, 1.1, 1] }
                    }
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut" 
                    }}
                    aria-label={currentTheme === 'light' ? t('nav.switchToDarkMode') : t('nav.switchToLightMode')}
                  >
                    {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
                  </SidebarControlButton>
                </SidebarControlsContainer>
                
                <SocialLinks>
                  <SocialLink 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaUser />
                  </SocialLink>
                </SocialLinks>
              </NavLinks>
            )}
          </AnimatePresence>

          <ControlsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <LanguageToggle 
              onClick={toggleLanguage} 
              aria-label={t('nav.switchLanguage')}
              scrolled={scrolled}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <IoLanguage />
              <LanguageIndicator>{language.toUpperCase()}</LanguageIndicator>
            </LanguageToggle>
            
            <ThemeToggle 
              onClick={toggleTheme} 
              aria-label={currentTheme === 'light' ? t('nav.switchToDarkMode') : t('nav.switchToLightMode')}
              scrolled={scrolled}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              currentTheme={currentTheme}
              animate={
                preferReducedMotion ? {} :
                (currentTheme === 'light' 
                  ? { rotate: [0, 15, 0], scale: [1, 1.1, 1] } 
                  : { rotate: [0, -15, 0], scale: [1, 1.1, 1] })
              }
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
            >
              {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
            </ThemeToggle>
          </ControlsContainer>
          
          {scrolled && (
            <ProgressBar
              style={{ scaleX: scrollYProgress }}
            />
          )}
        </NavContent>
      </NavContainer>
      
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <BackToTopButton
            onClick={handleBackToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            aria-label={t('nav.backToTop')}
          >
            <FaTimes style={{ transform: 'rotate(45deg)' }} />
          </BackToTopButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;