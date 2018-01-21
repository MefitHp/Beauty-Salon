import React, { Component } from 'react';
import Home from './Components/Home/Home.js';
import NavbarPage from './Components/Navbar/NavbarPage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <div className="containter">
        <NavbarPage />
        <Home />
      </div>
    );
  }
}

export default App;
