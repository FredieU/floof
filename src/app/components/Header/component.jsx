import React from 'react';
import { connect } from 'react-redux';
import { toggleHeader } from '../../redux/actions/urlActions';
import { header } from 'translate';
import './index.css';

export const Header = ({ expandHeader, toggleHeader }) => (
  <header className={`header ${expandHeader ? 'header__expand' : ''}`}>
    <h1 onClick={toggleHeader}>{header.title}</h1>
    {expandHeader && (
      <button className="btn btn-start" onClick={toggleHeader}>
        {header.start}
      </button>
    )}
  </header>
);

const mapStateToProps = (state) => ({
  expandHeader: state.mainReducer.expandHeader,
});

export default connect(mapStateToProps, { toggleHeader })(Header);
