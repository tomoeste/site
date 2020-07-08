import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import ResumeContext from './ResumeContext';

const Header = () => {
  const theme = useContext(ThemeContext);
  const resume = useContext(ResumeContext);
  
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <pre>
        {JSON.stringify(resume, null, 2)}
      </pre>
    </div>
  );
}

export default Header;
