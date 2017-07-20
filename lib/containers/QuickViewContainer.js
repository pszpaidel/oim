import { connect } from 'react-redux';
import QuickView from '../components/quick-view/QuickView';
import { getRecipes, getCategory } from '../model/cookbook';
import { createAction } from '../utils/utils';
import * as Const from '../const/CookbookConst';

const mapStateToProps = state => ({
  recipes: getRecipes(state),
  category: getCategory(state),
});

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(createAction(Const.SET_RECIPE, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickView);
