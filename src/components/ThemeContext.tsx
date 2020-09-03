import React from 'react';

export const themes = {
  light: {
    foreground: "#2b2b2b",
    background: "#ffffff",
    backgroundActive: "#dddddd",
    backgroundAlt: "#e2e2e2",
    backgroundAltHover: "#adadad",
    backgroundAltBorder: "#cccccc",
    backgroundAltBorderActive: "#999999",
    backgroundAltActive: "#afafaf"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    backgroundActive: "#282828",
    backgroundAlt: "#383838",
    backgroundAltHover: "#5b5b5b",
    backgroundAltBorder: "#424242",
    backgroundAltBorderActive: "#565656",
    backgroundAltActive: "#757575"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
