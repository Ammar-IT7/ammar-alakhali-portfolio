// src/styles/Themes.js
// Common theme values shared between light and dark modes
const common = {
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    tooltip: 1400,
  },
  transition: {
    fast: '0.1s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
  isRTL: false, // Will be overridden dynamically
};

export const lightTheme = {
  ...common,
  background: '#ffffff',
  backgroundAlt: '#f8f8f8',
  backgroundAlt2: '#f0f0f0',
  text: '#333333',
  textAlt: '#555555',
  textMuted: '#757575',
  primary: '#7038BE',         // Deep purple from the logo
  primaryHover: '#5F2DA5',    // Darker variation for hover states
  primaryLight: '#E2D6F5',    // Light variation for backgrounds
  secondary: '#42C4BE',       // Teal/turquoise accent from the logo
  secondaryHover: '#38ABA6',  // Darker teal for hover states
  secondaryLight: '#D6F5F4',  // Light teal for backgrounds
  accent: '#4F5BD5',          // Blue-purple transition color in the gradient
  accentHover: '#3F49BB',     // Darker accent for hover states
  success: '#2E7D32',         // Green for success states
  error: '#D32F2F',           // Red for error states
  warning: '#F57C00',         // Orange for warning states
  info: '#0288D1',            // Blue for info states
  border: '#e1e1e1',
  borderHover: '#c5c5c5',
  shadow: '0 4px 20px rgba(112, 56, 190, 0.1)', // Subtle shadow with primary color
  shadowHover: '0 6px 24px rgba(112, 56, 190, 0.15)',
  cardShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

export const darkTheme = {
  ...common,
  background: '#121212',
  backgroundAlt: '#1e1e1e',
  backgroundAlt2: '#2a2a2a',
  text: '#f1f1f1',
  textAlt: '#b3b3b3',
  textMuted: '#8a8a8a',
  primary: '#8649DA',         // Lighter purple for better visibility in dark mode
  primaryHover: '#975CED',    // Lighter variation for hover states
  primaryLight: '#2C1D40',    // Dark purple for backgrounds
  secondary: '#4DDED8',       // Brighter teal for dark mode
  secondaryHover: '#5EEBE5',  // Lighter teal for hover states
  secondaryLight: '#1D3534',  // Dark teal for backgrounds
  accent: '#5667E8',          // Brighter blue-purple for dark mode
  accentHover: '#6776F1',     // Lighter accent for hover states
  success: '#4CAF50',         // Brighter green for dark mode
  error: '#F44336',           // Brighter red for dark mode
  warning: '#FF9800',         // Brighter orange for dark mode
  info: '#03A9F4',            // Brighter blue for dark mode
  border: '#333333',
  borderHover: '#444444',
  shadow: '0 4px 20px rgba(134, 73, 218, 0.25)', // More visible shadow in dark mode
  shadowHover: '0 6px 24px rgba(134, 73, 218, 0.35)',
  cardShadow: '0 2px 12px rgba(0, 0, 0, 0.3)',
};