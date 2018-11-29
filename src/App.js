import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <iframe src="http://localhost:8081/" style={{width: 800, height: 600}} frameBorder="0" />
      </div>
    );
  }
}

export default App;
