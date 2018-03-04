import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  // create landing page
  // create login page
  // create events page
  // add navigation
  
  render() {
    return (
      <div>
            <Navbar inverse fixedTop>
              <Grid>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">React App</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
              </Grid>
            </Navbar>
            <Jumbotron>
              <Grid>
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    bsStyle="success"
                    bsSize="large"
                    href="http://react-bootstrap.github.io/components.html"
                    target="_blank">
                    View React Bootstrap Docs
                  </Button>
                </p>
              </Grid>
            </Jumbotron>
          </div>
    );
  }
}

export default App;
