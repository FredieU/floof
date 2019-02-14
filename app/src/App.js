import React, { Component } from 'react';
import dogAPI from './utils/api.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      error: ''
    };

    this.random = this.random.bind(this);
  }

  componentDidMount() {
    console.log('App - MOUNT');
    return dogAPI('random')
      .then(response => this.setState({url: response.message}))
      .catch(err => this.setState({error: err}));
  }

  random() {
    return dogAPI('random')
    .then(response => this.setState({url: response.message}))
    .catch(err => this.setState({error: err}));
  }

  render() {
    console.log('App - RENDER');
    return (
      <React.Fragment>
        <header className="header">
          <h1>Floof</h1>
          <small>Discover all the doggos.</small>
        </header>
        <main>
          <section className='container'>
            <button 
              className='btn-next'
              onClick={ this.random }>
              Next
            </button>
          </section>
          <img 
            alt=''
            className='img'
            onClick={ this.random }
            src={ this.state.url }
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
