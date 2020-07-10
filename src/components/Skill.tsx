import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Skill = (props: any) => {
  const theme = useContext(ThemeContext);
  
  return (
    <div style={{ display: `flex`, 
    backgroundColor: theme.backgroundAlt, 
    color: theme.foreground,
    fontSize: `12px`,
    lineHeight: `12px`, 
    marginRight: `10px`,
    marginBottom: `10px`,
    padding: `8px`,
    borderRadius: `8px`}}>
      {props.skill.name}
    </div>
  );
}

export default Skill;
