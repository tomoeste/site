import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Topnav = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ 
        width: `calc(100% - 20px)`, 
        height: `50px`, 
        position: `absolute`,
        top: `0`,
        left: `0`,
        zIndex: `0`,
        padding: `0 10px`,
        display: `flex`, 
        flexDirection: `column`,
        alignItems: `center`, 
        justifyContent: `center`,
        backgroundColor: theme.backgroundAlt, 
        color: theme.foreground
       }}
      {...props}
  >
    {props.children}
  </div>
  );
};

export default Topnav;
