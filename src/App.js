import React from 'react';
import logo from './assets/imgs/logo.svg';
import './assets/css/App.css';

import Greeting from './component/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my React Component
          <Greeting/>
        </p>
      </header>
    </div>
  );
}

export default App;
