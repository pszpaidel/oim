import { connect } from 'react-redux';
import Navigator from './Navigator';
import { setRecipe, addRecipe } from './NavigatorActionCreator';

const mapStateToProps = state => ({
  model: state.cookbook,
});

const onClick = dispatch => (value) => {
  dispatch(setRecipe(value));
};

const onAddRecipe = dispatch => () => {
  dispatch(addRecipe);
};

const mapDispatchToProps = dispatch => ({
  onClick: onClick(dispatch),
  onAddRecipe: onAddRecipe(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
