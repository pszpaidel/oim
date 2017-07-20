import { connect } from 'react-redux';
import Recipe from '../components/recipe/Recipe';
import { getRecipe } from '../model/cookbook';

const mapStateToProps = state => ({
  recipe: getRecipe(state),
});

export default connect(mapStateToProps)(Recipe);
