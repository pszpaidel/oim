import { connect } from 'react-redux';
import Main from '../Main';

const mapStateToProps = state => ({
  recipes: state.cookbook.recipes,
});

const MainContainer = connect(mapStateToProps, null)(Main);
export default MainContainer;

