import { connect } from 'react-redux';
import Navigator from './Navigator';
import { setRecipe } from './NavigatorActionCreator';
import * as selectros from '../../selectors/selectors';

const onClick = dispatch => (value) => {
  dispatch(setRecipe(value));
};

const mapStateToProps = state => ({
  recipes: selectros.getRecipes(state),
  recipe: selectros.getRecipe(state),
  categories: selectros.getCategory(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: onClick(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
