import { connect } from 'react-redux';
import { onSave, onUpload, onDeleteUploadedImage } from './FormActionCreator';
import { fetchCookbook } from '../api/api';
import { isValid, createAction, showErrorInformation, showSuccessInformation } from '../../utils/utils';
import * as Const from '../../const/CookbookConst';
import * as selectors from '../../selectors/selectors';
import Form from './Form';

const onSuccess = (dispatch, key) => (value) => {
  dispatch(createAction(Const.GET_COOKBOOK, true));
  dispatch(createAction(Const.SET_COOKBOOK, value));
  dispatch(createAction(Const.SET_RECIPE, key));
};

const onFetchCookbook = (dispatch, key) => {
  dispatch(createAction(Const.GET_COOKBOOK, false));
  fetchCookbook(onSuccess(dispatch, key));
};

const onSaveSuccess = (dispatch, key) => {
  onFetchCookbook(dispatch, key);
  showSuccessInformation();
};

const onSaveCallback = dispatch => (value) => {
  if (isValid(value)) {
    onSave(value, response => onSaveSuccess(dispatch, response));
    return;
  }
  showErrorInformation();
};

const onUploadCallback = (value, callback) => onUpload(value, callback);

const mapStateToProps = state => ({
  componentsProvider: selectors.getComponents(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: onSaveCallback(dispatch),
  onUpload: onUploadCallback,
  onDeleteUploadedImage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
