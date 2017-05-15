import { connect } from 'react-redux';
import { notification } from 'antd';
import { onSave, onUpload, onDeleteUploadedImage } from './FormActionCreator';
import { fetchCookbook } from '../api/api';
import { isValid, createAction } from '../../utils/utils';
import * as Const from '../../const/CookbookConst';
import Form from './Form';

const onSuccess = dispatch => (value) => {
  dispatch(createAction(Const.GET_COOKBOOK, true));
  dispatch(createAction(Const.SET_COOKBOOK, value));
};

const onFetchCookbook = (dispatch) => {
  dispatch(createAction(Const.GET_COOKBOOK, false));
  fetchCookbook(onSuccess(dispatch));
};


const callbackSuccess = (dispatch) => {
  onFetchCookbook(dispatch);
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
    onSave(value, response => callbackSuccess(dispatch, response));
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

const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;

