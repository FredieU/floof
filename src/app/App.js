import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHeader } from './redux/actions/urlActions';
import Header from './components/Header/index';
import RandomAll from './components/RandomAll';

export default () => (
  <>
    <Header />
    <main>
      <RandomAll />
    </main>
  </>
);
