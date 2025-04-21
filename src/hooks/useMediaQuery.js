// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether a media query matches
 * @param {string} query - The media query to check (e.g. '(max-width: 768px)')
 * @returns {boolean} - Whether the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Define callback for media query changes
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;