import { connect } from 'react-redux';
import { toggleHeader } from '../../redux/actions/urlActions';
import { Header } from './component';

const mapStateToProps = (state) => ({
  expandHeader: state.mainReducer.expandHeader,
});

const mapDispatchToProps = {
  toggleHeader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
