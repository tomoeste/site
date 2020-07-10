import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ResumeContext } from './ResumeContext';

const Header = () => {
  const theme = useContext(ThemeContext);
  const resume = useContext(ResumeContext);
  
  return (
    <div style={{ display: `flex`, flexDirection: `column`, marginBottom: `40px`}}>
      <div style={{ padding: `0px` }}>
        <img src="/logo.svg" alt="Tom's avatar" height="160" />
      </div>      
      <div style={{color: theme.foreground, marginBottom: `10px` }}>
        {resume.basics?.name}
      </div>
      <div style={{color: theme.foreground, fontSize: `20px` }}>
        {resume.basics?.label}
      </div>
    </div>
  );
}

export default Header;
