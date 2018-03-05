import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

class App extends Component {
  // create landing page
  // create login page
  // create events page
  // add navigation
  
  render() {
    return (
    
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route epath="/news" component={News} />
          </div>
        </Router>
    );
  }
}

export default App;
