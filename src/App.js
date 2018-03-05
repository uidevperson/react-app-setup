import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';


class App extends Component {
  // create landing page
  // create login page
  // create events page
  // add navigation
  // https://youtu.be/jgVkR5EKI68?t=1318
  render() {
    return (
    
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
          </div>
        </Router>
    );
  }
}

export default App;
