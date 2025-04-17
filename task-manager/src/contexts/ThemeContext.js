import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if theme preference exists in localStorage, default to 'light'
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('taskManagerTheme');
    return savedTheme || 'light';
  });

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('taskManagerTheme', themeMode);
  }, [themeMode]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  // Define theme objects for light and dark modes
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
      primary: '#BB86FC', // Purple-ish primary color for dark mode
      secondary: '#121212',
      background: '#121212', // Dark background
      cardBackground: '#1E1E1E', // Slightly lighter than background for cards
      success: '#4CAF50',
      warning: '#FF5252',
      highPriority: '#FFC107',
      text: '#E1E1E1', // Light text for dark background
      lightGray: '#333333', // Darker gray for dark mode
      darkGray: '#BBBBBB', // Lighter gray for dark mode
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

  // Select the appropriate theme based on themeMode
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
