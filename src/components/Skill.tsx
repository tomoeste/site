/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Skill = (props: any) => {
  const theme = useContext(ThemeContext);
  
 const isSelected = () => {
   return props.selectedSkillDescription === props.skill.description;
 }

  return (
    <button css={css`display: flex; 
                  background-color: ${isSelected() ? theme.backgroundAltActive : theme.backgroundAlt}; 
                  font-weight: 200;
                  font-size: 14px;
                  line-height: 14px; 
                  font-weight: ${isSelected() ? 400 : 400};
                  letter-spacing: 1px;
                  margin-right: 12px;
                  margin-bottom: 12px;
                  padding: 10px 14px;
                  border: none;
                  border-right: 2px solid ${isSelected() ? theme.backgroundAltBorderActive : theme.backgroundAltBorder};
                  border-bottom: 2px solid ${isSelected() ? theme.backgroundAltBorderActive : theme.backgroundAltBorder};
                  border-radius: 8px;
                  cursor: pointer;
                  &:hover {
                    background-color: ${theme.backgroundAltActive};
                  }`}
                  onClick={() => { props.setSelectedSkillDescription(props.skill.description); }}>
      <span css={css`background-color: transparent; 
                     color: ${theme.foreground};
                     `}>
      {props.skill.name}
      </span>
    </button>
  );
}

export default Skill;
