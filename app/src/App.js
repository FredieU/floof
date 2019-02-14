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

    this.generate = this.generate.bind(this);
    this.copyUrl = this.copyUrl.bind(this);
  }

  componentDidMount() {
    console.log('App - MOUNT');
    return dogAPI('random')
      .then(response => this.setState({url: response.message}))
      .catch(err => this.setState({error: err}));
  }

  copyUrl() {
    const copyText = document.getElementById('url');
    copyText.select();
    document.execCommand('copy');
  }

  generate() {
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
          <button 
            className='btn btn-copy'
            onClick={ this.copyUrl }>
            Copy URL
          </button>
          <button 
            className='btn btn-generate'
            onClick={ this.generate }>
            Generate
          </button>
          <img 
            alt=''
            className='img'
            onClick={ this.random }
            src={ this.state.url }
          />
          <textarea
            id='url'
            value={ this.state.url }
          >
          </textarea>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
