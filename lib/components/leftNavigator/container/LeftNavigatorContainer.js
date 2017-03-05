import { connect } from 'react-redux';
import LeftNavigator from '../LeftNavigator';

const mapStateToProps = state => ({
  items: state.cookbook.category,
});


const LeftNavigatorContiner = connect(mapStateToProps, null)(LeftNavigator);
export default LeftNavigatorContiner;
