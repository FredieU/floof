import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHeader } from './redux/actions/urlActions';
import RandomAll from './components/RandomAll';
import './App.css';

class App extends Component {
  render() {
    const { expandHeader, toggleHeader } = this.props

    return (
      <>
        <header className={`header ${expandHeader ? 'header__expand' : ''}`}>
          <h1 onClick={toggleHeader}>floof.</h1>
          <button className="btn btn-start" onClick={toggleHeader}>Discover all the floofs</button>
        </header>
        <main>
          <RandomAll />
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  expandHeader: state.mainReducer.expandHeader,
});

export default connect(mapStateToProps, { toggleHeader })(App);
