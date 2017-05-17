import { connect } from 'react-redux';
import Recipe from './Recipe';

const mapStateToProps = state => ({
  recipe: state.cookbook.recipe,
});

export default connect(mapStateToProps, null)(Recipe);
