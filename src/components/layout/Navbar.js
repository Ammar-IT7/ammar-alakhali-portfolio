import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { LanguageContext } from '../../contexts/LanguageContext';

// Glassmorphism effect for the navbar
const NavContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ scrolled }) => scrolled ? '0.8rem 0' : '1.2rem 0'};
  background-color: ${({ theme, scrolled }) => 
    scrolled ? `${theme.background}cc` : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? `0 4px 30px ${theme.shadowColor}` : 'none'};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px) saturate(180%)' : 'none'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.border}33` : 'none'};
  
  @media (max-width: 768px) {
    padding: ${({ scrolled }) => scrolled ? '0.6rem 0' : '1rem 0'};
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(motion(Link))`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme, scrolled }) => scrolled ? theme.primary : theme.text};
  text-decoration: none;
  position: relative;
  z-index: 2;
  background: ${({ scrolled, theme }) => 
    scrolled ? 
    `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` : 
    'none'};
  background-clip: ${({ scrolled }) => scrolled ? 'text' : 'none'};
  -webkit-background-clip: ${({ scrolled }) => scrolled ? 'text' : 'none'};
  -webkit-text-fill-color: ${({ scrolled }) => scrolled ? 'transparent' : 'inherit'};
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const LogoHighlight = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    ${({ isRTL }) => isRTL ? 'left' : 'right'}: 0;
    width: 75%;
    max-width: 350px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => `linear-gradient(145deg, ${theme.backgroundAlt}ee, ${theme.background}f8)`};
    backdrop-filter: blur(15px);
    padding: 5rem 1.5rem;
    gap: 2.5rem;
    box-shadow: ${({ isRTL, theme }) => 
      isRTL ? `5px 0 25px ${theme.shadowColor}` : `-5px 0 25px ${theme.shadowColor}`};
    z-index: 1;
    transform: translateX(${({ isOpen, isRTL }) => 
      isOpen ? '0' : (isRTL ? '-100%' : '100%')});
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }
`;

const LinkItem = styled(motion.div)`
  position: relative;
`;

const NavLink = styled(motion(Link))`
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0.3rem;
  text-decoration: none;
  color: ${({ theme, scrolled, active }) => 
    active ? theme.primary : (scrolled ? theme.text : theme.text)};
  letter-spacing: 0.5px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    width: 100%;
    display: block;
    text-align: center;
    border-radius: 12px;
    background: ${({ active, theme }) => active ? `${theme.primary}22` : 'transparent'};
  }
`;

const LinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => 
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`};
  border-radius: 4px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ControlsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const ControlButton = styled(motion.button)`
  background: ${({ active, theme }) => 
    active ? `linear-gradient(135deg, ${theme.primary}33, ${theme.secondary}33)` : 'none'};
  border: none;
  color: ${({ theme, scrolled }) => scrolled ? theme.text : theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  backdrop-filter: ${({ active }) => active ? 'blur(4px)' : 'none'};
  box-shadow: ${({ active, theme }) => 
    active ? `0 4px 15px ${theme.shadowColor}` : 'none'};
  
  &:hover {
    background: ${({ theme }) => 
      `linear-gradient(135deg, ${theme.primary}33, ${theme.secondary}33)`};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 1rem;
  }
`;

const ThemeToggle = styled(ControlButton)``;
const LanguageToggle = styled(ControlButton)``;

const LanguageIndicator = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0.5rem;
`;

const MenuIcon = styled(ControlButton)`
  display: none;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 0;
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

// Progress indicator for scrolling
const ProgressBar = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  background: ${({ theme }) => 
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`};
  transform-origin: 0%;
  z-index: 1001;
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const { scrollYProgress } = useScroll();

  // Check if mobile on initial render
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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

  // Close menu when clicking outside
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

  const logoVariants = {
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

  const linkVariants = {
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

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <NavContainer 
      scrolled={scrolled}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <NavContent ref={navRef}>
        <Logo 
          to="/" 
          scrolled={scrolled}
          variants={logoVariants}
          whileHover="hover"
          whileTap="tap"
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

        <MenuIcon 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          scrolled={scrolled}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.4 }}
          active={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <AnimatePresence>
          {isMenuOpen && (
            <Overlay 
              isOpen={isMenuOpen}
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        <NavLinks 
          isOpen={isMenuOpen} 
          isRTL={isRTL}
        >
          {[
            { path: '/', label: t('nav.home') },
            { path: '/about', label: t('nav.about') },
            { path: '/projects', label: t('nav.projects') },
            { path: '/resume', label: t('nav.resume') },
            { path: '/contact', label: t('nav.contact') }
          ].map((link, i) => (
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
                onClick={closeMenu}
                active={location.pathname === link.path}
                scrolled={scrolled}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {link.label}
                {location.pathname === link.path && !isMobile && (
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

        <ControlsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <LanguageToggle 
            onClick={toggleLanguage} 
            aria-label="Toggle language"
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
            aria-label="Toggle theme"
            scrolled={scrolled}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate={
              currentTheme === 'light' 
                ? { rotate: [0, 15, 0], scale: [1, 1.1, 1] } 
                : { rotate: [0, -15, 0], scale: [1, 1.1, 1] }
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
  );
};

export default Navbar;