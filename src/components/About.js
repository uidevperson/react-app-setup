import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';


class About extends Component {
   
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>About Page</h2>
          <p>
            App built with React, React-Router and React-Bootstrap.
          </p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle='primary'>About</Button>
        </Link>
      </Grid>
    );
  }
}

export default About;
