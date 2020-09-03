/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext, Fragment, useState } from "react";
import { ResumeContext } from "./ResumeContext";
import Expertise from "./Expertise";
import ThemeContext from './ThemeContext';

const Expertises = () => {
  const getFirstExpertiseDescription = () => {
    return resume.expertise[0]?.description;
  }

  const resume = useContext(ResumeContext);
  const theme = useContext(ThemeContext);
  const [selectedExpertiseDescription, setSelectedExpertiseDescription] = useState(getFirstExpertiseDescription());  

  return (
    <Fragment>
      <label
        style={{
          margin: `80px 0 20px 0`,
          fontSize: `24px`,
          fontWeight: 400,
          color: theme.foreground,
        }}
      >
        Expertise
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
        {resume.expertise.map((expertise: any, index: number) => (
          <Expertise expertise={expertise} key={`expertise${index}`} setSelectedExpertiseDescription={setSelectedExpertiseDescription} selectedExpertiseDescription={selectedExpertiseDescription} />
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
        {selectedExpertiseDescription}
      </p>
    </Fragment>
  );
};

export default Expertises;
