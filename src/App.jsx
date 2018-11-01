import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import MyNavbar from './components/MyNavbar';
import Portfolio from './components/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="background">
          <MyNavbar />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
