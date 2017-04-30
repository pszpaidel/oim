import { connect } from 'react-redux';
import Recipe from './Recipe';

const mapStateToProps = state => ({
  recipe: state.cookbook.recipe,
});

const RecipeNavigator = connect(mapStateToProps, null)(Recipe);
export default RecipeNavigator;
