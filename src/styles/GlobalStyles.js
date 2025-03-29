// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    overflow-x: hidden;
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
`;

// src/styles/Themes.js
export const lightTheme = {
  background: '#ffffff',
  backgroundAlt: '#f8f8f8',
  text: '#333333',
  textAlt: '#555555',
  primary: '#4361ee',
  secondary: '#3a0ca3',
  accent: '#4cc9f0',
  border: '#e1e1e1',
  shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
};

export const darkTheme = {
  background: '#121212',
  backgroundAlt: '#1e1e1e',
  text: '#f1f1f1',
  textAlt: '#b3b3b3',
  primary: '#4cc9f0',
  secondary: '#4361ee',
  accent: '#3a0ca3',
  border: '#333333',
  shadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
};