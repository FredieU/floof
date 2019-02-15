import React, { Component } from 'react';
import dogAPI from '../utils/api.js';

class RandomAll extends Component {
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
    console.log('RandomAll - MOUNT');
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
    console.log('RandomAll - RENDER');
    return (
      <React.Fragment>
        <section className='btn-group'>
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
        </section>
        <img 
          alt=''
          className='img'
          onClick={ this.generate }
          src={ this.state.url } />
        <textarea
          id='url'
          value={ this.state.url } />
      </React.Fragment>
    );
  }
}

export default RandomAll;