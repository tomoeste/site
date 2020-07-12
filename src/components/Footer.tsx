/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Footer = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ 
        width: `calc(100% - 20px)`, 
        height: `50px`, 
        padding: `0 10px`,
        display: `flex`, 
        flexDirection: `row`,
        alignItems: `center`, 
        justifyContent: `center`,
        fontSize: `14px`,
        backgroundColor: theme.backgroundAlt, 
        color: theme.foreground        
       }}
      {...props}
  >
    I made this site with <a href="https://create-react-app.dev/" target="_blank" rel="noopener noreferrer"
    css={css`text-decoration: none; color: ${theme.foreground}; margin-left: 4px; font-weight: 500;`}>
      Create React App
    </a>. I made the logo with a charming tool called
    <a href="https://bigheads.io/" target="_blank" rel="noopener noreferrer"
    css={css`text-decoration: none; color: ${theme.foreground}; margin-left: 4px; font-weight: 500;`}>
      Big Heads
    </a>.
  </div>
  );
};

export default Footer;
