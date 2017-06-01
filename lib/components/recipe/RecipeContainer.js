import { connect } from 'react-redux';
import Recipe from './Recipe';
import { getRecipe } from '../../selectors/selectors';

const mapStateToProps = state => ({
  recipe: getRecipe(state),
});

export default connect(mapStateToProps, null)(Recipe);
