import { connect } from 'react-redux';
import Main from './Main';
import fetchCookbook from './MainActionCreator';

const mapStateToProps = state => ({
  cookbook: state.cookbook,
});

const mapDispatchToProps = dispatch => ({
  fetchCookbook: () => fetchCookbook(dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;

