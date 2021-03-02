import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
