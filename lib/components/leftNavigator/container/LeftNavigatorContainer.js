import { connect } from 'react-redux';
import LeftNavigator from '../LeftNavigator';


const onClick = (value) => {
  console.log(value);
};

const mapStateToProps = state => ({
  items: state.cookbook.category,
});

const mapDispatchToProps = () => ({
  onClick: value => onClick(value),
});


const LeftNavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavigator);
export default LeftNavigatorContainer;
