import React, { Component } from 'react';
import Routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <div className="containter">
        <Routes />
      </div>
    );
  }
}

export default App;
