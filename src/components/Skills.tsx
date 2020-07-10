import React, { useContext } from 'react';
import { ResumeContext } from './ResumeContext';
import Skill from './Skill';

const Skills = () => {
  const resume = useContext(ResumeContext);
  
  return (
    <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, margin: `20px 0`, justifyContent: `center`}}>
      {resume.skills.map((skill: any, index: number) => 
        <Skill skill={skill} key={`skill${index}`} />
      )}
    </div>
  );
}

export default Skills;
