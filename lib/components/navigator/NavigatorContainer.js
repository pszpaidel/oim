import { connect } from 'react-redux';
import Navigator from './Navigator';
import { setRecipe, addRecipe } from './NavigatorActionCreator';
import * as selectros from '../../selectors/selectors';

const onClick = dispatch => (value) => {
  dispatch(setRecipe(value));
};

const onAddRecipe = dispatch => () => {
  dispatch(addRecipe);
};

const mapStateToProps = state => ({
  recipes: selectros.getRecipes(state),
  recipe: selectros.getRecipe(state),
  categories: selectros.getCategory(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: onClick(dispatch),
  onAddRecipe: onAddRecipe(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
