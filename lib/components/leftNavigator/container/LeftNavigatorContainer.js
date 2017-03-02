import { connect } from 'react-redux';
import LeftNavigator from '../LeftNavigator';

const mapStateToProps = state => ({
  category: state.cookbook.categories,
});

const LeftNavigator = connect(mapStateToProps, null)(Main);
export default LeftNavigator;
