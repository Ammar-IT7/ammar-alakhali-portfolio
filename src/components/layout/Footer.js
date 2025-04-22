import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';

const FooterContainer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 3rem 0;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}, 
      ${({ theme }) => theme.primary}
    );
    background-size: 200% 100%;
    animation: gradientMove 8s linear infinite;
  }
  
  @keyframes gradientMove {
    0% {background-position: 0% 0%;}
    100% {background-position: 200% 0%;}
  }
`;

const FooterContent = styled(motion.div)`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled(motion.h3)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 2rem;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  ${props => props.isRTL && `
    &::after {
      left: auto;
      right: 0;
    }
  `}
  
  &:hover::after {
    width: 100%;
  }
`;

const FooterLink = styled(motion.a)`
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.isRTL ? 'auto' : '0'};
    right: ${props => props.isRTL ? '0' : 'auto'};
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(${props => props.isRTL ? '-5px' : '5px'});
    
    &::before {
      width: 100%;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.backgroundLight};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const Copyright = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textAlt};
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

const Footer = () => {
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } }
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer 
      ref={ref}
      style={{ opacity }}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <FooterContent 
        isRTL={isRTL}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <FooterSection variants={item}>
          <FooterTitle 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            {isRTL ? 'إينوفا ستوديو' : 'Enova Studio'}
          </FooterTitle>
          <motion.p variants={item}>{t('about.paragraph1')}</motion.p>
          <SocialLinks 
            isRTL={isRTL} 
            variants={item}
          >
            <SocialIcon 
              href="https://github.com/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com/ammaralakhali" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="mailto:enovastudio.ye@gmail.com" 
              whileHover={{ y: -5, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection variants={item}>
          <FooterTitle 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            {t('footer.links')}
          </FooterTitle>
          <FooterLink 
            href="/" 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ x: isRTL ? -5 : 5 }}
          >
            {t('nav.home')}
          </FooterLink>
          <FooterLink 
            href="/about" 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ x: isRTL ? -5 : 5 }}
          >
            {t('nav.about')}
          </FooterLink>
          <FooterLink 
            href="/projects" 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ x: isRTL ? -5 : 5 }}
          >
            {t('nav.projects')}
          </FooterLink>
          <FooterLink 
            href="/services" 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ x: isRTL ? -5 : 5 }}
          >
            {t('nav.services')}
          </FooterLink>
          <FooterLink 
            href="/contact" 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ x: isRTL ? -5 : 5 }}
          >
            {t('nav.contact')}
          </FooterLink>
        </FooterSection>

        <FooterSection variants={item}>
          <FooterTitle 
            isRTL={isRTL} 
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            {t('footer.contact')}
          </FooterTitle>
          <motion.p variants={item}>
            <motion.span 
              initial={{ color: "#777" }}
              whileHover={{ color: "#333" }}
            >
              Email:
            </motion.span> enovastudio.ye@gmail.com
          </motion.p>
          <motion.p variants={item}>
            <motion.span 
              initial={{ color: "#777" }}
              whileHover={{ color: "#333" }}
            >
              Location:
            </motion.span> Yemen , Sana`a
          </motion.p>
        </FooterSection>
      </FooterContent>
      <Copyright
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        © {currentYear} {isRTL ? 'إينوفا ستوديو' : 'Enova Studio'}. {t('footer.rights')}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;