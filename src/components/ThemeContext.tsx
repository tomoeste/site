import React from 'react';

export const themes = {
  light: {
    foreground: "#2b2b2b",
    background: "#eeeeee",
    backgroundAlt: "#d6d6d6"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    backgroundAlt: "#383838"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
