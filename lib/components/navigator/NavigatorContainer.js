import { connect } from 'react-redux';
import Navigator from './Navigator';

const onClick = (value) => {
  console.log(value);
};

const mapStateToProps = state => ({
  categories: state.cookbook.category,
});

const mapDispatchToProps = () => ({
  onClick,
});


const NavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(Navigator);
export default NavigatorContainer;
