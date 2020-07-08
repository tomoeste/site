import React, { useContext } from "react";
import ThemeContext, { themes } from "./ThemeContext";

const ToggleTheme = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      {...props}
  >{theme === themes.light ? `Dark` : `Light`}</button>
  );
};

export default ToggleTheme;
