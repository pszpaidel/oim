import { connect } from 'react-redux';
import Main from './Main';
import fetchCookbook from './MainActionCreator';

const mapDispatchToProps = dispatch => ({
  fetchCookbook: () => fetchCookbook(dispatch),
});

const mapStateToProps = state => ({
  view: state.cookbook.view,
  isReady: state.cookbook.isReady,
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;

