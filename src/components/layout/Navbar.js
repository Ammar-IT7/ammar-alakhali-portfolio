import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaLanguage } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';

const NavContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? `${theme.background}ee` : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadow : 'none'};
  transition: all 0.4s ease;
  z-index: 1000;
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(15px)' : 'none'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.border}` : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(motion(Link))`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme, scrolled }) => scrolled ? theme.primary : theme.text};
  text-decoration: none;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}
    );
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    ${({ isRTL }) => isRTL ? 'left' : 'right'}: 0;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundAlt};
    padding: 6rem 2rem;
    gap: 2.5rem;
    box-shadow: ${({ theme }) => theme.shadow};
    transform: translateX(${({ isOpen, isRTL }) => 
      isOpen ? '0' : (isRTL ? '-100%' : '100%')});
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 1;
  }
`;

const LinkItem = styled(motion.div)`
  position: relative;
`;

const NavLink = styled(motion(Link))`
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  text-decoration: none;
  color: ${({ theme, scrolled, active }) => 
    active ? theme.primary : (scrolled ? theme.text : theme.text)};
`;

const LinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme, scrolled }) => scrolled ? theme.text : theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}22`};
  }
`;

const LanguageToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme, scrolled }) => scrolled ? theme.text : theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}22`};
  }
`;

const MenuIcon = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme, scrolled }) => scrolled ? theme.text : theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1001;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}22`};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LanguageIndicator = styled.span`
  font-size: 0.9rem;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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

  const closeMenu = () => setIsMenuOpen(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15,
        mass: 1 
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: i => ({ 
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 300 
      }
    })
  };

  return (
    <NavContainer 
      scrolled={scrolled}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavContent>
        <Logo 
          to="/" 
          scrolled={scrolled}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === 'en' ? 'Ammar Alakhali' : 'عمار الأخالي'}
        </Logo>

        <MenuIcon 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          scrolled={scrolled}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
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
          theme={{ ...currentTheme, isRTL }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
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
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <NavLink 
                to={link.path} 
                onClick={closeMenu}
                active={location.pathname === link.path}
                scrolled={scrolled}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <LinkIndicator
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </NavLink>
            </LinkItem>
          ))}
        </NavLinks>

        <ControlsContainer>
          <LanguageToggle 
            onClick={toggleLanguage} 
            aria-label="Toggle language"
            scrolled={scrolled}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLanguage />
            <LanguageIndicator>{language.toUpperCase()}</LanguageIndicator>
          </LanguageToggle>
          
          <ThemeToggle 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            scrolled={scrolled}
            whileHover={{ 
              scale: 1.1, 
              rotate: currentTheme === 'light' ? 45 : -45 
            }}
            whileTap={{ scale: 0.9 }}
          >
            {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
        </ControlsContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;