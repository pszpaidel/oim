import { connect } from 'react-redux';
import Navigator from './Navigator';
import setRecipe from './NavigatorActionCreator';

const mapStateToProps = state => ({
  model: state.cookbook,
});

const onClick = dispatch => (value) => {
  dispatch(setRecipe(value));
};

const mapDispatchToProps = dispatch => ({
  onClick: onClick(dispatch),
});

const NavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(Navigator);
export default NavigatorContainer;
