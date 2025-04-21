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
    font-size: 16px;
    scroll-behavior: smooth;
    transition: background-color 0.3s ease, color 0.3s ease;
    direction: ${props => props.theme.isRTL ? 'rtl' : 'ltr'};
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    text-align: ${props => props.theme.isRTL ? 'right' : 'left'};
    line-height: 1.5;
  }

  /* Improved accessibility for color contrast */
  ::selection {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }

  /* Typography scale */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textAlt};
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
  }

  h4 {
    font-size: clamp(1.25rem, 2vw, 1.75rem);
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.2s ease, text-decoration 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
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
    
    ul, ol {
      padding-right: 1.5rem;
      padding-left: 0;
    }
  }

  /* Base components styling */
  ul, ol {
    padding-left: ${props => props.theme.isRTL ? '0' : '1.5rem'};
    padding-right: ${props => props.theme.isRTL ? '1.5rem' : '0'};
    margin-bottom: 1rem;
  }

  button, 
  input, 
  textarea, 
  select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.primary};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.2s ease, transform 0.1s ease;
  }

  /* Form elements */
  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.backgroundAlt};
    color: ${({ theme }) => theme.text};
    
    &:focus {
      border-color: ${({ theme }) => theme.primary};
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}33`};
    }
  }

  /* Layout */
  section {
    padding: 4rem 0;
    
    @media (max-width: 768px) {
      padding: 2.5rem 0;
    }
  }

  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Animation for theme transition */
  .theme-transition * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Improved accessibility focus styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  /* Media queries for responsive design */
  @media (max-width: 1024px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .container {
      width: 92%;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px;
    }
    
    .container {
      width: 95%;
    }
  }

  /* Added utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text-center {
    text-align: center;
  }
`;