import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ToggleTheme = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ 
        width: `40px`, 
        height: `40px`, 
        borderRadius: `25px`, 
        border: `none`, 
        fontSize: `28px`, 
        lineHeight: `14px`, 
        display: `flex`, 
        alignItems: `center`, 
        justifyContent: `center`,
        alignSelf: `flex-end`,
        cursor: `pointer` }}
      {...props}
  >
    <i style={{ color: theme.foreground }}
    className="fas fa-lightbulb"></i>
  </div>
  );
};

export default ToggleTheme;
