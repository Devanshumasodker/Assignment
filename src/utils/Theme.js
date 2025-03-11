import React, { createContext, useContext } from 'react';

const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    gradient: ['#4361ee', '#3a0ca3'],
    background: '#ffffff',
    cardBackground: '#ffffff',
    text: '#2b2d42',
    subText: '#6c757d',
    divider: '#e9ecef',
    highlight: '#4cc9f0',
    error: '#ef476f',
  },
  spacing: {
    xs: 4,
    small: 8,
    medium: 16,
    large: 24,
    xl: 32,
  },
  borderRadius: {
    small: 6,
    medium: 12,
    large: 24,
    card: 16,
  },
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontSize: {
      small: 12,
      regular: 14,
      medium: 16,
      large: 20,
      xl: 24,
    },
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
  },
};

export default theme;
