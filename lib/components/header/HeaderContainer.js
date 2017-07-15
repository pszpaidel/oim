import { connect } from 'react-redux';
import Header from './Header';
import { addRecipe } from '../navigator/NavigatorActionCreator';

const onAddRecipe = dispatch => () => {
  dispatch(addRecipe);
};

const mapDispatchToProps = dispatch => ({
  onAddRecipe: onAddRecipe(dispatch),
});

export default connect(null, mapDispatchToProps)(Header);
