import React, { Component } from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    );
  }
}

export default App;
