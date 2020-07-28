/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext, Fragment } from 'react';
import { ResumeContext } from './ResumeContext';
import ThemeContext from './ThemeContext';

const Bio = () => {
  const resume = useContext(ResumeContext);
  const theme = useContext(ThemeContext);
  
  return (
    <Fragment>
      <h3
        style={{
          margin: `40px 0 0 0`,
          fontSize: `18px`,
          color: theme.foreground,
        }}
      >
        Here is more about me
      </h3>
      <p css={css`display: flex;
                  background-color: ${theme.background}; 
                  color: ${theme.foreground};
                  font-weight: 400;
                  font-size: 20px;                  
                  line-height: 42px;
                  flex-direction: row;
                  flex-wrap: wrap;
                  margin: 0 0 60px 0;                  
                  padding: 10px 30px;
                  text-align: left;
                  border-radius: 10px;`}>
       {resume.basics.summary}
    </p>
    </Fragment>
    
  );
}

export default Bio;
