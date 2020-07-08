import React from 'react';
import './App.css';
import * as resume from './data/resume.json';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <pre>
          {JSON.stringify(resume, null, 2)}
        </pre>
      </header>
    </div>
  );
}

export default App;
