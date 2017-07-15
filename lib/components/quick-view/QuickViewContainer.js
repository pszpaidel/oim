import { connect } from 'react-redux';
import QuickView from './QuiclView';
import * as selectros from '../../selectors/selectors';
import { createAction } from '../../utils/utils';
import * as Const from '../../const/CookbookConst';

const mapStateToProps = state => ({
  recipes: selectros.getRecipes(state),
});

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(createAction(Const.SET_RECIPE, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickView);
