import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Here we check if theme preference exists in localStorage, default to 'light'
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('taskManagerTheme');
    return savedTheme || 'light';
  });

  // Here we save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('taskManagerTheme', themeMode);
  }, [themeMode]);

  // Here the toggle between light and dark mode is defined
  const toggleTheme = () => {
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  // Here we define theme objects for light and dark modes
  const lightTheme = {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      background: '#f5f5f5',
      cardBackground: '#ffffff',
      success: '#4CAF50',
      warning: '#FF5252',
      highPriority: '#FFC107',
      text: '#333333',
      lightGray: '#e0e0e0',
      darkGray: '#757575',
      border: '#e0e0e0'
    },
    fonts: {
      main: "'Roboto', sans-serif"
    },
    breakpoints: {
      mobile: '576px',
      tablet: '768px',
      desktop: '992px',
      largeDesktop: '1200px'
    }
  };

  const darkTheme = {
    colors: {
      primary: '#BB86FC', 
      secondary: '#121212',
      background: '#121212', 
      cardBackground: '#1E1E1E',
      success: '#4CAF50',
      warning: '#FF5252',
      highPriority: '#FFC107',
      text: '#E1E1E1', 
      lightGray: '#333333',
      darkGray: '#BBBBBB', 
      border: '#333333'
    },
    fonts: {
      main: "'Roboto', sans-serif"
    },
    breakpoints: {
      mobile: '576px',
      tablet: '768px',
      desktop: '992px',
      largeDesktop: '1200px'
    }
  };

  // Here we select the appropriate theme based on themeMode
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Here we add PropTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);