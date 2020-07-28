/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, Fragment } from "react";
import ThemeContext from "./ThemeContext";

const Profile = (props: any) => {
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      
      <button
        css={css`
          display: flex;
          background-color: ${theme.backgroundAlt};
          color: ${theme.foreground};
          font-size: 28px;
          line-height: 12px;
          margin-right: 15px;
          margin-left: 15px;
          margin-bottom: 20px;
          padding: 14px;
          border-radius: 60px;
          align-content: center;
          align-items: center;
          cursor: pointer;  
          border: none;
          &:hover {
            background-color: ${theme.backgroundAltActive};
          }
        `}
        onClick={() => {
          Object.assign(document.createElement("a"), {
            target: "_blank",
            href: props.profile.url,
          }).click();
        }}
        aria-label={`${props.profile.network} (opens in new tab)`}
      >
        <i
          style={{ color: theme.foreground }}
          className={`${props.profile.icon}`}
        ></i>
      </button>
    </Fragment>
  );
};

export default Profile;
