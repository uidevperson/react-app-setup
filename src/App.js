import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  // create landing page
  // create login page
  // create events page
  // add navigation
  
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
        <div className="container">
          <div className="row">
            <div className="col">
              1 of 2
            </div>
            <div className="col">
              1 of 2
            </div>
          </div>
          <div className="row">
            <div className="col">
              1 of 3
            </div>
            <div className="col">
              1 of 3
            </div>
            <div className="col">
              1 of 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
