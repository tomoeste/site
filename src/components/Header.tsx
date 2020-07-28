/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ResumeContext } from "./ResumeContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  const resume = useContext(ResumeContext);

  return (
    <header
      style={{ display: `flex`, flexDirection: `column` }}
    >
      <div style={{ padding: `80px 0` }}>
        <img
          src="/logo.svg"
          alt="A cartoon drawing of Tom."
          title="Tom's avatar"
          height="180"
          style={{
            position: `absolute`,
            top: `-10px`,
            left: `calc(50vw - 90px)`,
            zIndex: 1,
          }}
        />
      </div>
      <div style={{marginTop: `30px`, fontSize: `calc(10px + 1.5vmin)`, color: theme.foreground}}>My name is</div>
      <h1 style={{ color: theme.foreground, marginBottom: `10px`, marginTop: `0` }}>
        {resume.basics?.name}
      </h1>
      <div style={{marginTop: `0px`, fontSize: `calc(10px + 1.5vmin)`, color: theme.foreground}}>I'm a</div>
      <h2 css={css`
              background-color: ${theme.background};
              color: ${theme.foreground};
              word-wrap: normal;
            `} style={{ color: theme.foreground, marginBottom: `10px`, marginTop: `0` }}>
            {resume.basics?.label}
      </h2>
    </header>
  );
};

export default Header;
