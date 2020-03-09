import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUrl } from '../redux/actions/urlActions';

class RandomAll extends Component {
  // Initial fetch for first render
  componentDidMount() {
    this.props.fetchUrl();
  }

  // Copy URL from textarea element
  copyUrl() {
    const copyText = document.getElementById('url');
    copyText.select();
    document.execCommand('copy');
  }

  render() {
    return (
      <React.Fragment>
        <section className="btn-group">
          <button className="btn btn-copy" onClick={this.copyUrl}>
            Copy Image
          </button>
          <button className="btn btn-generate" onClick={this.props.fetchUrl}>
            New Image
          </button>
        </section>
        <section className="container">
          <img
            alt=""
            className="img"
            onClick={this.props.fetchUrl}
            src={this.props.url}
          />
          <textarea className="img-url" readOnly value={this.props.url} />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  url: state.imageUrl.url,
});

export default connect(mapStateToProps, { fetchUrl })(RandomAll);
