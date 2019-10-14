import React, { Component } from 'react';
import logo from './logo.svg';
import { MyLayout } from './layout/MyLayout';
import { SelectedMenuItemProvider } from './context';
import './App.css';
import "antd/dist/antd.css";
import "./index.css";

class App extends Component {

  render() {
    return (
      <SelectedMenuItemProvider>   
        <div className="App">
          <MyLayout />
          {/* <header className="App-header">
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
          </header> */}
        </div>
      </SelectedMenuItemProvider>
    );
  }
  
}

export default App;
