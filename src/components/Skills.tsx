/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext, Fragment, useState } from "react";
import { ResumeContext } from "./ResumeContext";
import Skill from "./Skill";
import ThemeContext from './ThemeContext';

const Skills = () => {
  const getFirstSkillDescription = () => {
    return resume.skills[0]?.description;
  }

  const resume = useContext(ResumeContext);
  const theme = useContext(ThemeContext);
  const [selectedSkillDescription, setSelectedSkillDescription] = useState(getFirstSkillDescription());  

  return (
    <div style={{
      padding: `40px 0 0 0`
    }}>
      <label
        style={{
          fontSize: `24px`,
          fontWeight: 400,
          color: theme.foreground,
        }}
      >
        Skills
      </label>
      <ul
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          margin: `20px 0`,
          justifyContent: `center`,
        }}
      >
        {resume.skills.map((skill: any, index: number) => (
          <Skill skill={skill} key={`skill${index}`} setSelectedSkillDescription={setSelectedSkillDescription} selectedSkillDescription={selectedSkillDescription} />
        ))}
      </ul>
      <p css={css`background-color: ${theme.background}; 
                  color: ${theme.foreground};
                  font-weight: 200;
                  font-size: 20px;                  
                  line-height: 42px;                  
                  padding: 10px 30px;
                  text-align: center;
                  border-radius: 10px;`}>
        {selectedSkillDescription}
      </p>
    </div>
  );
};

export default Skills;
