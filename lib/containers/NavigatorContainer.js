import { connect } from 'react-redux';
import Navigator from '../components/navigator/Navigator';
import { setRecipe, getRecipes, getRecipe, getCategory } from '../model/cookbook';

const onClick = dispatch => (value) => {
  dispatch(setRecipe(value));
};

const mapStateToProps = state => ({
  recipes: getRecipes(state),
  recipe: getRecipe(state),
  categories: getCategory(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: onClick(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
