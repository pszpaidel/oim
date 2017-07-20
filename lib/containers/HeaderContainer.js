import { connect } from 'react-redux';
import Header from '../components/header/Header';
import { addRecipe } from '../model/cookbook';

const onAddRecipe = dispatch => () => {
  dispatch(addRecipe);
};

const mapDispatchToProps = dispatch => ({
  onAddRecipe: onAddRecipe(dispatch),
});

export default connect(null, mapDispatchToProps)(Header);
