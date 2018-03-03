import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // create landing page
  // create login page
  // create events page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 16.2 app setup</h1>
        </header>
        <p className="App-intro">
          testing
        </p>
      </div>
    );
  }
}

export default App;
