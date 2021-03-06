// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ToggleTheme = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      css={css`
        width: 40px;
        height: 40px;
        border-radius: 25px;
        border: none;
        font-size: 28px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        cursor: pointer;
        background-color: transparent;
        &:hover {
          background-color: ${theme.backgroundAltActive}
        }
      `}
      {...props}
      aria-label="Toggle theme"
    >
      <i style={{ color: theme.foreground }} className="fas fa-lightbulb"></i>
    </button>
  );
};

export default ToggleTheme;
