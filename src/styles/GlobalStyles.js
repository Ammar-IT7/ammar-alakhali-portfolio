// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${props => props.theme.isRTL ? "'Tajawal', sans-serif" : "'Inter', sans-serif"};
    scroll-behavior: smooth;
    transition: all 0.3s ease;
    direction: ${props => props.theme.isRTL ? 'rtl' : 'ltr'};
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    overflow-x: hidden;
    text-align: ${props => props.theme.isRTL ? 'right' : 'left'};
  }

  /* RTL specific styles */
  html[dir="rtl"] {
    .container, 
    .section, 
    .form-group {
      direction: rtl;
    }
    
    input, 
    textarea {
      text-align: right;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button, input, textarea {
    font-family: inherit;
  }

  section {
    padding: 5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Add smooth transitions between theme changes */
  .theme-transition * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* Improved accessibility focus styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;