import { connect } from 'react-redux';
import { createAction } from '../../utils/utils';
import Main from './Main';
import fetchCookbook from './MainActionCreator';
import * as Const from '../../const/CookbookConst';

const onSuccess = dispatch => (value) => {
  dispatch(createAction(Const.GET_COOKBOOK, true));
  dispatch(createAction(Const.SET_COOKBOOK, value));
};

const onFetchCookbook = (dispatch) => {
  dispatch(createAction(Const.GET_COOKBOOK, false));
  fetchCookbook(onSuccess(dispatch));
};

const mapDispatchToProps = dispatch => ({
  fetchCookbook: () => onFetchCookbook(dispatch),
});

const mapStateToProps = state => ({
  view: state.cookbook.view,
  isReady: state.cookbook.isReady,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
