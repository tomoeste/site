import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ResumeContext } from './ResumeContext';

const Header = () => {
  const theme = useContext(ThemeContext);
  const resume = useContext(ResumeContext);
  
  return (
    <div style={{ display: `flex`, flexDirection: `column`, marginBottom: `40px`}}>
      <div style={{ padding: `80px 0` }}>
        <img src="/logo.svg" alt="Tom's avatar" height="160" style={{ position: `absolute`, top: `0px`, left: `calc(50vw - 80px)`, zIndex: 1}} />
      </div>      
      <h1 style={{color: theme.foreground, marginBottom: `10px` }}>
        {resume.basics?.name}
      </h1>
      <h2 style={{color: theme.foreground }}>
        {resume.basics?.label}
      </h2>
    </div>
  );
}

export default Header;
