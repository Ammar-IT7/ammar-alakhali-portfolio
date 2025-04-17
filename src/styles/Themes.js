// src/styles/Themes.js
export const lightTheme = {
  background: '#ffffff',
  backgroundAlt: '#f8f8f8',
  text: '#333333',
  textAlt: '#555555',
  primary: '#7038BE',         // Deep purple from the logo
  secondary: '#42C4BE',       // Teal/turquoise accent from the logo
  accent: '#4F5BD5',          // Blue-purple transition color in the gradient
  border: '#e1e1e1',
  shadow: '0 4px 20px rgba(112, 56, 190, 0.1)', // Subtle shadow with primary color
  isRTL: false, // Will be overridden dynamically
};

export const darkTheme = {
  background: '#121212',
  backgroundAlt: '#1e1e1e',
  text: '#f1f1f1',
  textAlt: '#b3b3b3',
  primary: '#8649DA',         // Lighter purple for better visibility in dark mode
  secondary: '#4DDED8',       // Brighter teal for dark mode
  accent: '#5667E8',          // Brighter blue-purple for dark mode
  border: '#333333',
  shadow: '0 4px 20px rgba(134, 73, 218, 0.25)', // More visible shadow in dark mode
  isRTL: false, // Will be overridden dynamically
};