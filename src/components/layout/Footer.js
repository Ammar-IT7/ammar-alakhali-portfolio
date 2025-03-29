
// src/components/layout/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const FooterLink = styled.a`
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textAlt};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Ammar Alakhali</FooterTitle>
          <p>Software Engineer specializing in full-stack development with a passion for creating efficient, scalable, and user-friendly applications.</p>
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="mailto:contact@ammaralakhali.com" 
              whileHover={{ y: -5 }}
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/resume">Resume</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <p>Email: contact@ammaralakhali.com</p>
          <p>Location: San Francisco, CA</p>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Ammar Alakhali. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;