/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Skill = (props: any) => {
  const theme = useContext(ThemeContext);
  
  return (
    <div css={css`display: flex; 
                  background-color: ${theme.backgroundAlt}; 
                  color: ${theme.foreground};
                  font-size: 14px;
                  line-height: 14px; 
                  font-weight: 600;
                  margin-right: 12px;
                  margin-bottom: 12px;
                  padding: 10px 14px;
                  border-radius: 8px;
                  cursor: pointer;
                  &:hover {
                    background-color: ${theme.backgroundAltActive};
                  }`}>
      <span css={css`background-color: transparent; 
                     color: ${theme.foreground};
                     `}>
      {props.skill.name}
      </span>
    </div>
  );
}

export default Skill;
