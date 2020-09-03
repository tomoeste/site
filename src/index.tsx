import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(`%c👋 Hi there! My name is Tom Oeste and I am a software engineer and product designer.`, `color: lightgreen`);
console.log(`%c🔮 I love to see what's going on behind the scenes, so I think we already have something in common.`, `color: lightgreen`);
console.log(`%c🎉 Have fun looking around, and have a lovely day!`, `color: lightgreen`);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
