import { connect } from 'react-redux';
import { notification } from 'antd';
import { onSave, onUpload, onDeleteUploadedImage } from './FormActionCreator';
import { fetchCookbook } from '../api/api';
import { isValid, createAction } from '../../utils/utils';
import * as Const from '../../const/CookbookConst';
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
  notification.success({
    message: 'Gratulację!',
    description: 'Przepis zapisany poprawnie.',
  });
};

const errorOnValidate = () => (
  notification.error({
    message: 'Porażka!',
    description: 'Nie wypełniono wymaganych pól.',
  })
);

const onSaveCallback = dispatch => (value) => {
  if (isValid(value)) {
    onSave(value, response => onSaveSuccess(dispatch, response));
    return;
  }
  errorOnValidate();
};

const onUploadCallback = (value, callback) => onUpload(value, callback);

const mapDispatchToProps = dispatch => ({
  onSave: onSaveCallback(dispatch),
  onUpload: onUploadCallback,
  onDeleteUploadedImage,
});

export default connect(null, mapDispatchToProps)(Form);

