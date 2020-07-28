import React from 'react';
import './App.css';
import ThemeContext, { themes } from './components/ThemeContext';
import resume from './data/resume.json';
import { ResumeContext } from './components/ResumeContext';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';
import Topnav from './components/Topnav';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Bio from './components/Bio';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = React.useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ResumeContext.Provider value={resume}>
        <div className="App" style={{background: theme.background, color: theme.foreground}}>
          <div className="App-header">
            <Topnav>
              <ToggleTheme onClick={toggleTheme} />
            </Topnav>    
            <div className="App-body">         
              <Header />
              <Profiles />
              <Bio />
              <Skills />              
            </div>
            <Footer />
          </div>
        </div>
      </ResumeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
