import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cube from './Cube';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Cube></Cube>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            herp derp. lmao
          </p>
          <a
            className="App-link"
            href="https://github.com/vivz753"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/vivz753
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
