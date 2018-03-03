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
        <div class="container">
          <div class="row">
            <div class="col">
              1 of 2
            </div>
            <div class="col">
              1 of 2
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              1 of 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
