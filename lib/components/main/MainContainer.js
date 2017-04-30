import { connect } from 'react-redux';
import Main from './Main';
import fetchCookbook from './MainActionCreator';

const mapDispatchToProps = dispatch => ({
  fetchCookbook: () => fetchCookbook(dispatch),
});

const MainContainer = connect(null, mapDispatchToProps)(Main);
export default MainContainer;

