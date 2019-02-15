import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUrl } from '../actions/urlActions';

class RandomAll extends Component {
  // Initial fetch for first render
  componentDidMount() {
    console.log('RandomAll - componentDidMount');
    this.props.fetchUrl();
  }

  // Copy URL from textarea element
  copyUrl() {
    const copyText = document.getElementById('url');
    copyText.select();
    document.execCommand('copy');
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
            onClick={ this.props.fetchUrl }>
            Generate
          </button>
        </section>
        {this.props.error}
        <img 
          alt=''
          className='img'
          onClick={ this.props.fetchUrl }
          src={ this.props.url } />
        <textarea
          id='url'
          readOnly
          value={ this.props.url } />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  url: state.imageUrl.url
})

export default connect(mapStateToProps, { fetchUrl })(RandomAll);