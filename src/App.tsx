import React from 'react';
import './App.css';
import * as resume from './data/resume.json';
import ThemeContext, { themes } from './components/ThemeContext';
import ResumeContext from './components/ResumeContext';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';

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
        <div className="App">
          <header className="App-header">
            <ToggleTheme onClick={toggleTheme} />
            <Header />
          </header>
        </div>
      </ResumeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
