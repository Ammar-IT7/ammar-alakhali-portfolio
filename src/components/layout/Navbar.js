// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.background : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadow : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundAlt};
    padding: 6rem 2rem;
    transition: right 0.3s ease;
    gap: 2rem;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const NavLink = styled(motion.div)`
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(15deg);
  }
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/">Ammar Alakhali</Logo>

        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavLinks isOpen={isMenuOpen}>
          <NavLink 
            active={location.pathname === '/' ? 1 : 0}
            whileHover={{ y: -3 }}
          >
            <Link to="/" onClick={closeMenu}>Home</Link>
          </NavLink>
          
          <NavLink 
            active={location.pathname === '/about' ? 1 : 0}
            whileHover={{ y: -3 }}
          >
            <Link to="/about" onClick={closeMenu}>About</Link>
          </NavLink>
          
          <NavLink 
            active={location.pathname === '/projects' ? 1 : 0}
            whileHover={{ y: -3 }}
          >
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
          </NavLink>
          
          <NavLink 
            active={location.pathname === '/resume' ? 1 : 0}
            whileHover={{ y: -3 }}
          >
            <Link to="/resume" onClick={closeMenu}>Resume</Link>
          </NavLink>
          
          <NavLink 
            active={location.pathname === '/contact' ? 1 : 0}
            whileHover={{ y: -3 }}
          >
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </NavLink>
        </NavLinks>

        <ThemeToggle onClick={toggleTheme}>
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;