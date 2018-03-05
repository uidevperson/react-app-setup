import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './News.css';


class News extends Component {
   
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>News Page</h2>
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

export default News;
