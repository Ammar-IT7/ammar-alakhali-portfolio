import React, { useContext, useState, useRef, useEffect } from 'react';
import styled, { keyframes, css, ThemeContext } from 'styled-components';
import { motion, useInView, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import Lottie from 'lottie-react'; // Make sure to install: npm install lottie-react
import { 
  FaLaptopCode, FaPalette, FaCode, FaChartLine, FaMobileAlt, FaRocket,
  FaArrowRight, FaArrowLeft, FaShoppingCart, FaCog, FaRegLightbulb
} from 'react-icons/fa';
import { 
  SiAdobexd, SiAdobephotoshop, SiFigma, SiWordpress, SiShopify, 
  SiReact, SiAngular, SiVuedotjs
} from 'react-icons/si';

// Import animations
import webDesignAnim from '../../assets/animations/web-design.json'; // Replace with actual paths
import uiUxAnim from '../../assets/animations/ui-ux.json';
import logoAnim from '../../assets/animations/logo.json';
import marketingAnim from '../../assets/animations/marketing.json';
import mobileAnim from '../../assets/animations/mobile.json';
import ecommerceAnim from '../../assets/animations/ecommerce.json';

// Background animations
const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;


const rotateSlowly = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ServicesContainer = styled.section`
  padding: 8rem 0;
  width: 95%;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  direction: ${props => props.isRTL ? 'rtl' : 'ltr'};
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  
  @media (max-width: 768px) {
    padding: 6rem 0;
    width: 90%;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.primary}50,
      ${({ theme }) => theme.secondary}50,
      transparent
    );
  }
`;

const CanvasBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.2;
  pointer-events: none;
`;

const ParticlesDot = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '8px'};
  height: ${props => props.size || '8px'};
  border-radius: 50%;
  background: ${props => props.color || `${props.theme.primary}20`};
  filter: blur(1px);
  z-index: -1;
  opacity: 0.6;
  pointer-events: none;
`;

const ShapesDecoration = styled.div`
  position: absolute;
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  border: 2px dashed ${({ theme, color }) => color || `${theme.primary}30`};
  border-radius: ${props => props.shape === 'circle' ? '50%' : '0'};
  transform: rotate(${props => props.rotation || '0deg'});
  z-index: -1;
  opacity: 0.4;
  pointer-events: none;
  animation: ${rotateSlowly} ${props => props.duration || '120s'} linear infinite ${props => props.reverse ? 'reverse' : ''};
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || props.size || '80px'};
    height: ${props => props.mobileSize || props.size || '80px'};
  }
`;

const BackgroundGradient = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '500px'};
  height: ${props => props.size || '500px'};
  border-radius: 50%;
  background: radial-gradient(circle, ${({ theme, color }) => `${color || theme.primary}10`} 0%, transparent 70%);
  filter: blur(80px);
  z-index: -1;
  opacity: ${props => props.opacity || '0.6'};
  pointer-events: none;
  
  &.floating {
    animation: ${float} ${props => props.duration || '15s'} infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || (parseInt(props.size) * 0.7) + 'px'};
    height: ${props => props.mobileSize || (parseInt(props.size) * 0.7) + 'px'};
  }
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

const CategoryScrollContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 3rem;
  
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.primary}50 transparent;
  
  &::-webkit-scrollbar {
    height: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary}50;
    border-radius: 10px;
  }
`;

const CategorySelection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: nowrap;
  width: max-content;
  min-width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 0.7rem;
    padding: 0 0.5rem;
  }
`;

const CategoryButton = styled(motion.button)`
  background: ${props => props.isActive 
    ? `linear-gradient(45deg, ${props.theme.primary}, ${props.theme.secondary})`
    : 'transparent'};
  border: 2px solid ${props => props.isActive 
    ? 'transparent' 
    : `${props.theme.primary}40`};
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  color: ${props => props.isActive ? 'white' : props.theme.text};
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  box-shadow: ${props => props.isActive 
    ? `0 8px 20px ${props.theme.primary}30` 
    : 'none'};
  
  svg {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    
    svg {
      font-size: 1rem;
    }
  }
`;

const ServicesWrapper = styled(motion.div)`
  position: relative;
  min-height: 650px;
  
  @media (max-width: 768px) {
    min-height: 500px;
  }
`;

const ServiceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => `${theme.backgroundAlt}EE`};
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.primary}05, 
      ${({ theme }) => theme.secondary}10);
    z-index: -1;
  }
`;

const CardHeader = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
  height: 200px;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary}20, 
    ${({ theme }) => theme.secondary}20);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .animation-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CardBody = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 2;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ServiceIconWrapper = styled(motion.div)`
  width: 90px;
  height: 90px;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 15px 25px ${({ theme }) => theme.primary}30;
  align-self: ${props => props.isRTL ? 'flex-end' : 'flex-start'};
  
  svg {
    font-size: 3.2rem;
    color: white;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 35px;
    border: 2px dashed white;
    opacity: 0.3;
    animation: ${pulse} 3s infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    border-radius: 25px;
    
    svg {
      font-size: 2.8rem;
    }
    
    &::before {
      width: 95px;
      height: 95px;
      border-radius: 30px;
    }
  }
`;

const ServiceTag = styled.span`
  position: absolute;
  top: 1.5rem;
  ${props => props.isRTL ? 'left: 1.5rem;' : 'right: 1.5rem;'}
  background: ${({ theme }) => `${theme.secondary}20`};
  color: ${({ theme }) => theme.secondary};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  z-index: 3;
`;

const ServiceTitle = styled(motion.h3)`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  font-weight: 700;
  line-height: 1.3;
  position: relative;
  display: inline-block;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    bottom: -10px;
    ${props => props.isRTL ? 'right: 0;' : 'left: 0;'};
    border-radius: 2px;
  }
`;

const ServiceDescription = styled(motion.p)`
  color: ${({ theme }) => theme.textAlt};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.75;
  margin-bottom: 2.2rem;
  flex-grow: 1;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const FeaturesWrapper = styled(motion.div)`
  margin-top: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  ${'' /* ${props => props.isRTL && 'flex-direction: row-reverse;'} */}
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  
  .feature-bullet {
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary}40,
      ${({ theme }) => theme.secondary}40
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin-${props => props.isRTL ? 'left' : 'right'}: 0.8rem;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.primary},
        ${({ theme }) => theme.secondary}
      );
    }
  }
  
  .feature-text {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textAlt};
  }
  
  @media (max-width: 480px) {
    .feature-bullet {
      min-width: 20px;
      height: 20px;
      
      &::before {
        width: 8px;
        height: 8px;
      }
    }
    
    .feature-text {
      font-size: 0.9rem;
    }
  }
`;

const CardFooter = styled.div`
  padding: 0 2.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1.5rem 1.5rem;
    flex-direction: ${props => props.responsiveVertical ? 'column' : 'row'};
    align-items: ${props => props.responsiveVertical ? 'flex-start' : 'center'};
  }
`;

const CardDivider = styled(motion.div)`
  height: 1px;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.primary}30,
    ${({ theme }) => theme.secondary}30,
    transparent
  );
  margin: 0.5rem 0 2rem;
`;

const LearnMoreButton = styled(motion.button)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary}50;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  flex-direction: ${props => props.isRTL ? 'row-reverse' : 'row'};
  
  svg {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.isRTL ? 'right' : 'left'}: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.primary}30;
    
    svg {
      transform: ${props => props.isRTL ? 'translateX(-5px)' : 'translateX(5px)'};
    }
    
    &::before {
      ${props => props.isRTL ? 'right' : 'left'}: 0;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    width: ${props => props.fullWidthOnMobile ? '100%' : 'auto'};
    justify-content: ${props => props.fullWidthOnMobile ? 'center' : 'flex-start'};
  }
`;

const TechnologyList = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: ${props => props.isRTL ? 'flex-start' : 'flex-end'};
  
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
  
  @media (max-width: 480px) {
    justify-content: ${props => props.centerOnMobile ? 'center' : 'flex-start'};
    width: ${props => props.fullWidthOnMobile ? '100%' : 'auto'};
  }
`;

const TechBadge = styled(motion.div)`
  background: ${({ theme }) => theme.background}90;
  border: 1px solid ${({ theme }) => theme.primary}20;
  border-radius: 4px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArrowButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ArrowButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.primary}30;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.primary}30;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &:hover {
      background: ${({ theme }) => theme.backgroundAlt};
      color: ${({ theme }) => theme.text};
    }
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const PaginationIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const PageDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active 
    ? `linear-gradient(to right, ${props.theme.primary}, ${props.theme.secondary})` 
    : props.theme.textAlt + '30'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: ${props => !props.active && 'scale(1.2)'};
  }
`;

// 3D Card Tilt Effect Component - with better mobile handling
const TiltCard = ({ children, sensitivity = 50, disabled = false }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);
  
  const handleMouseMove = (e) => {
    if (disabled || isMobile) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / sensitivity);
    y.set((e.clientY - centerY) / sensitivity);
  };
  
  const handleMouseLeave = () => {
    if (disabled || isMobile) return;
    
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: !disabled && !isMobile ? rotateX : 0,
        rotateY: !disabled && !isMobile ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: !disabled && !isMobile ? 1.03 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Mobile device detection with proper window check
const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768;
  }
  return false;
};

const Services = () => {
  const { language, t } = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const isRTL = language === 'ar';
  const sectionRef = useRef(null);
  const categoryScrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileView, setMobileView] = useState(false);
  const itemsPerPage = mobileView ? 1 : (window.innerWidth <= 1200 ? 2 : 3);

  // Generate animation loop for background canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setMobileView(isMobile());
    };
    
    checkMobile();
    
    const handleResize = () => {
      checkMobile();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Scroll selected category into view
  useEffect(() => {
    if (categoryScrollRef.current && activeCategory !== 'all') {
      const categoryButton = categoryScrollRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (categoryButton) {
        const scrollContainer = categoryScrollRef.current;
        const scrollLeft = categoryButton.offsetLeft - scrollContainer.clientWidth / 2 + categoryButton.clientWidth / 2;
        
        scrollContainer.scrollTo({
          left: isRTL ? -scrollLeft : scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory, isRTL]);

  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const particlesArray = [];
      for (let i = 0; i < 30; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 4,
          color: Math.random() > 0.5 ? 'primary' : 'secondary'
        });
      }
      setParticles(particlesArray);
    };

    generateParticles();
  }, []);

  // Update canvas animation on theme changes
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Setup canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Draw network effect
    let nodes = [];
    const nodeCount = Math.min(Math.floor(window.innerWidth / 100), 30);
    
    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      });
    }
    
    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce at edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme.text + '15';
        ctx.fill();
      });
      
      // Draw connections
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach(nodeB => {
          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + 
            Math.pow(nodeA.y - nodeB.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `${theme.primary}${Math.floor((1 - distance / 100) * 15).toString(16)}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    initial: (custom) => ({
      x: `${custom.x}%`,
      y: `${custom.y}%`,
      opacity: 0.4
    }),
    animate: (custom) => ({
      x: [
        `${custom.x}%`, 
        `${custom.x + (Math.random() * 15 - 7.5)}%`,
        `${custom.x}%`
      ],
      y: [
        `${custom.y}%`,
        `${custom.y + (Math.random() * 15 - 7.5)}%`,
        `${custom.y}%`
      ],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  // Categories data with translations
  const categories = [
    { id: 'all', name: t('services.categories.all'), icon: <FaRocket /> },
    { id: 'webDesign', name: t('services.categories.webDesign'), icon: <FaLaptopCode /> },
    { id: 'uiUx', name: t('services.categories.uiUx'), icon: <FaPalette /> },
    { id: 'logo', name: t('services.categories.logo'), icon: <SiFigma /> },
    { id: 'marketing', name: t('services.categories.marketing'), icon: <FaChartLine /> },
    { id: 'mobile', name: t('services.categories.mobile'), icon: <FaMobileAlt /> },
    { id: 'ecommerce', name: t('services.categories.ecommerce'), icon: <FaShoppingCart /> }
  ];
  
  // Services data with translations
  const servicesData = [
    {
      id: 'webDesign',
      icon: <FaLaptopCode />,
      lottieAnimation: webDesignAnim,
      title: t('services.webDesign'),
      tag: t('services.tags.bestSeller'),
      description: t('services.webDesignDesc'),
      features: t('services.features.webDesign', { returnObjects: true }),
      technologies: [
        <SiReact key="react" />,
        <SiAngular key="angular" />,
        <SiVuedotjs key="vue" />,
        <SiWordpress key="wordpress" />
      ]
    },
    {
      id: 'uiUx',
      icon: <FaPalette />,
      lottieAnimation: uiUxAnim,
      title: t('services.uiUx'),
      tag: t('services.tags.popular'),
      description: t('services.uiUxDesc'),
      features: t('services.features.uiUx', { returnObjects: true }),
      technologies: [
        <SiFigma key="figma" />,
        <SiAdobexd key="xd" />,
        <SiAdobephotoshop key="photoshop" />
      ]
    },
    {
      id: 'logo',
      icon: <SiFigma />,
      lottieAnimation: logoAnim,
      title: t('services.logo'),
      description: t('services.logoDesc'),
      features: t('services.features.logo', { returnObjects: true }),
      technologies: [
        <SiAdobephotoshop key="photoshop" />,
        <SiAdobexd key="xd" />,
        <SiFigma key="figma" />
      ]
    },
    {
      id: 'marketing',
      icon: <FaChartLine />,
      lottieAnimation: marketingAnim,
      title: t('services.marketing'),
      tag: t('services.tags.growing'),
      description: t('services.marketingDesc'),
      features: t('services.features.marketing', { returnObjects: true }),
      technologies: [
        <FaChartLine key="analytics" />,
        <FaCog key="automation" />,
        <FaRegLightbulb key="strategy" />
      ]
    },
    {
      id: 'mobile',
      icon: <FaMobileAlt />,
      lottieAnimation: mobileAnim,
      title: t('services.mobile'),
      description: t('services.mobileDesc'),
      features: t('services.features.mobile', { returnObjects: true }),
      technologies: [
        <SiReact key="react-native" />,
        <FaCode key="swift" />,
        <FaCode key="kotlin" />
      ]
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart />,
      lottieAnimation: ecommerceAnim,
      title: t('services.ecommerce'),
      tag: t('services.tags.new'),
      description: t('services.ecommerceDesc'),
      features: t('services.features.ecommerce', { returnObjects: true }),
      technologies: [
        <SiShopify key="shopify" />,
        <SiWordpress key="woocommerce" />,
        <FaCode key="magento" />
      ]
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? servicesData
    : servicesData.filter(service => service.id === activeCategory);
  
  // Pagination
  const pageCount = Math.ceil(filteredServices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filteredServices.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset page number when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, itemsPerPage]);

  return (
    <ServicesContainer ref={sectionRef} isRTL={isRTL}>
      {/* Background canvas */}
      <CanvasBackground>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </CanvasBackground>
      
      {/* Background decorations */}
      <BackgroundGradient 
        className="floating"
        size="600px"
        mobileSize="300px"
        color={theme.primary}
        style={{ top: '-100px', right: '-200px' }}
        opacity="0.4"
        duration="20s"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      />
      <BackgroundGradient 
        className="floating"
        size="500px"
        mobileSize="250px"
        color={theme.secondary}
        style={{ top: '40%', left: '-250px' }}
        opacity="0.3"
        duration="25s"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <BackgroundGradient 
        className="floating"
        size="400px"
        mobileSize="200px"
        color={theme.primary}
        style={{ bottom: '-150px', right: '10%' }}
        opacity="0.35"
        duration="18s"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      
      {/* Decorative shapes */}
      <ShapesDecoration 
        shape="circle"
        size="250px"
        mobileSize="150px"
        color={`${theme.primary}20`}
        style={{ top: '15%', right: '5%' }}
        rotation="15deg"
        duration="180s"
      />
      <ShapesDecoration 
        size="180px"
        mobileSize="100px"
        color={`${theme.secondary}20`}
        style={{ bottom: '10%', left: '8%' }}
        rotation="45deg"
        duration="120s"
        reverse
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <ParticlesDot
          key={particle.id}
          size={`${mobileView ? particle.size * 0.7 : particle.size}px`}
          color={particle.color === 'primary' 
            ? `${theme.primary}` 
            : `${theme.secondary}`
          }
          custom={particle}
          variants={particleVariants}
          initial="initial"
          animate="animate"
        />
      ))}
      
      <SectionHeader>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t('services.subtitle')}
        </SectionSubtitle>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {t('services.title')}
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('services.description')}
        </SectionDescription>
      </SectionHeader>

      <CategoryScrollContainer ref={categoryScrollRef}>
        <CategorySelection>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              data-category={category.id}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.name}
            </CategoryButton>
          ))}
        </CategorySelection>
      </CategoryScrollContainer>

      <ServicesWrapper>
        <AnimatePresence mode="wait">
          <ServiceGrid
            key={`${activeCategory}-${currentPage}`}
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {currentServices.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <TiltCard sensitivity={80} disabled={mobileView}>
                  <ServiceCard>
                    <CardHeader>
                      <div className="animation-wrapper">
                        <Lottie 
                          animationData={service.lottieAnimation} 
                          loop={true}
                          style={{ width: '85%', height: '85%' }}
                        />
                      </div>
                      {service.tag && <ServiceTag isRTL={isRTL}>{service.tag}</ServiceTag>}
                    </CardHeader>
                    
                    <CardBody isRTL={isRTL}>
                      <ServiceIconWrapper
                        isRTL={isRTL}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {service.icon}
                      </ServiceIconWrapper>
                      
                      <ServiceTitle
                        isRTL={isRTL}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {service.title}
                      </ServiceTitle>
                      
                      <ServiceDescription
                        isRTL={isRTL}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        {service.description}
                      </ServiceDescription>
                      
                      <FeaturesWrapper
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {service.features.map((feature, idx) => (
                          <FeatureItem 
                            key={idx} 
                            isRTL={isRTL}
                            variants={featureVariants}
                            custom={idx}
                          >
                            <div className="feature-bullet"></div>
                            <div className="feature-text">{feature}</div>
                          </FeatureItem>
                        ))}
                      </FeaturesWrapper>
                      
                      <CardDivider
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      />
                    </CardBody>
                    
                    <CardFooter responsiveVertical={mobileView}>
                      <LearnMoreButton
                        isRTL={isRTL}
                        fullWidthOnMobile={mobileView}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('services.learnMore')}
                        {isRTL ? <FaArrowLeft /> : <FaArrowRight />}
                      </LearnMoreButton>
                      
                      <TechnologyList 
                        isRTL={isRTL}
                        centerOnMobile={mobileView}
                        fullWidthOnMobile={mobileView}
                      >
                        {service.technologies.map((tech, idx) => (
                          <TechBadge
                            key={idx}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          >
                            {tech}
                          </TechBadge>
                        ))}
                      </TechnologyList>
                    </CardFooter>
                  </ServiceCard>
                </TiltCard>
              </motion.div>
            ))}
          </ServiceGrid>
        </AnimatePresence>
        
        {pageCount > 1 && (
          <>
            <ArrowButtons>
              <ArrowButton
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isRTL ? <FaArrowRight /> : <FaArrowLeft />}
              </ArrowButton>
              <ArrowButton
                onClick={handleNextPage}
                disabled={currentPage === pageCount}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isRTL ? <FaArrowLeft /> : <FaArrowRight />}
              </ArrowButton>
            </ArrowButtons>
            
            <PaginationIndicator>
              {[...Array(pageCount)].map((_, index) => (
                <PageDot 
                  key={index} 
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                />
              ))}
            </PaginationIndicator>
          </>
        )}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;