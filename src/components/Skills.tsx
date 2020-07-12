import React, { useContext, Fragment } from "react";
import { ResumeContext } from "./ResumeContext";
import Skill from "./Skill";
import ThemeContext from './ThemeContext';

const Skills = () => {
  const resume = useContext(ResumeContext);
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <div
        style={{
          margin: `20px 0 20px 0`,
          fontSize: `18px`,
          color: theme.foreground,
        }}
      >
        I'm known for
      </div>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          margin: `20px 0`,
          justifyContent: `center`,
        }}
      >
        {resume.skills.map((skill: any, index: number) => (
          <Skill skill={skill} key={`skill${index}`} />
        ))}
      </div>
    </Fragment>
  );
};

export default Skills;
