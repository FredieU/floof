import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUrl } from '../redux/actions/urlActions';
import './RandomAll.css'

class RandomAll extends Component {
  componentDidMount() {
    this.props.fetchUrl();
  }

  copyUrl() {
    const copyText = document.getElementsByClassName('img-url');
    copyText.select();
    document.execCommand('copy');
  }

  render() {
    const { fetchUrl, url } = this.props;

    return (
      <>
        <section className="btn-group">
          <button className="btn btn-copy" onClick={this.copyUrl}>
            Copy Image
          </button>
          <button className="btn btn-generate" onClick={fetchUrl}>
            New Image
          </button>
        </section>
        <section className="container">
          <img
            alt="doggo"
            className="img"
            onClick={fetchUrl}
            src={url}
          />
          <textarea id="img-url" readOnly value={url} />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  url: state.mainReducer.url,
});

export default connect(mapStateToProps, { fetchUrl })(RandomAll);
