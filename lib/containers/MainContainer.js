import { connect } from 'react-redux';
import { createAction, getComponents } from '../utils/utils';
import { getView, getIsReady, fetch } from '../model/cookbook';
import * as Const from '../const/CookbookConst';
import Main from '../components/main/Main';

const onSuccess = dispatch => (value) => {
  dispatch(createAction(Const.GET_COOKBOOK, true));
  dispatch(createAction(Const.SET_COOKBOOK, value));
  dispatch(createAction(Const.SET_COMPONENTS, getComponents(value.recipes)));
};

const onFetchCookbook = (dispatch) => {
  dispatch(createAction(Const.GET_COOKBOOK, false));
  fetch(onSuccess(dispatch));
};

const mapStateToProps = state => ({
  view: getView(state),
  isReady: getIsReady(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCookbook: () => onFetchCookbook(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
