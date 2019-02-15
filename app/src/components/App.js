import React, { Component } from 'react';
import RandomAll from './RandomAll';
import '../App.css';

class App extends Component {
  render() {
    console.log('App - RENDER');
    return (
      <React.Fragment>
        <header className="header">
          <h1>Floof</h1>
          <small>Discover all the doggos.</small>
        </header>
        <main>
          <RandomAll />
        </main>
      </React.Fragment>
    );
  }
}

export default App;