import React, { useContext, Fragment } from "react";
import { ResumeContext } from "./ResumeContext";
import Profile from "./Profile";
import ThemeContext from './ThemeContext';

const Profiles = () => {
  const resume = useContext(ResumeContext);
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          margin: `20px 0 40px 0`,
          justifyContent: `center`,
        }}
      >
        {resume.basics.profiles.map((profile: any, index: number) => (
          <Profile profile={profile} key={`profile${index}`} />
        ))}
      </div>
    </Fragment>
  );
};

export default Profiles;
