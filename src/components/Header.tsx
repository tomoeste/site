/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ResumeContext } from "./ResumeContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  const resume = useContext(ResumeContext);

  return (
    <div
      style={{ display: `flex`, flexDirection: `column` }}
    >
      <div style={{ padding: `80px 0` }}>
        <img
          src="/logo.svg"
          alt="Tom's avatar"
          height="180"
          style={{
            position: `absolute`,
            top: `-10px`,
            left: `calc(50vw - 90px)`,
            zIndex: 1,
          }}
        />
      </div>
      <div style={{marginTop: `30px`, fontSize: `22px`, color: theme.foreground}}>My name is</div>
      <h1 style={{ color: theme.foreground, marginBottom: `10px`, marginTop: `0` }}>
        {resume.basics?.name}
      </h1>
      <div style={{marginTop: `0px`, fontSize: `20px`, color: theme.foreground}}>I'm a</div>
      <h2 style={{ color: theme.foreground, marginBottom: `10px`, marginTop: `0` }}>
          <div
            css={css`
              background-color: ${theme.background};
              color: ${theme.foreground};
              word-wrap: normal;
            `}
          >
            {resume.basics?.label}
          </div>
      </h2>
    </div>
  );
};

export default Header;
