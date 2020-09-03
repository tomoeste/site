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
      <p css={css`display: flex;
                  background-color: ${theme.background}; 
                  color: ${theme.foreground};
                  font-weight: 200;
                  font-size: calc(14px + 1vmin);                  
                  line-height: calc(24px + 2vmin);
                  flex-direction: row;
                  flex-wrap: wrap;
                  margin: 0 0 40px 0;                  
                  padding: 10px 30px;
                  text-align: left;
                  border-radius: 10px;`}>
       {resume.basics.summary}
    </p>
    </Fragment>
    
  );
}

export default Bio;
