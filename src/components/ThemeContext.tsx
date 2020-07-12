import React from 'react';

export const themes = {
  light: {
    foreground: "#2b2b2b",
    background: "#ffffff",
    backgroundActive: "#dddddd",
    backgroundAlt: "#eaeaea",
    backgroundAltActive: "#e0e0e0"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    backgroundActive: "#282828",
    backgroundAlt: "#383838",
    backgroundAltActive: "#424242"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
