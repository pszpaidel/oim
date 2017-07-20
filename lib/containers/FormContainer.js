import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCookbook } from '../services/api';
import { isValid, createAction, showErrorInformation, showSuccessInformation } from '../utils/utils';
import * as Const from '../const/CookbookConst';
import { getComponents, onSave, onUpload, onDeleteUploadedImage } from '../model/cookbook';
import Form from '../components/form/Form';

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

const removeEmptyComponents = value => _.assign({}, value, {
  components: _.filter(value.components, data => data.trim() !== ''),
});

const onSaveCallback = dispatch => (value) => {
  if (isValid(value)) {
    onSave(removeEmptyComponents(value), response => onSaveSuccess(dispatch, response));
    return;
  }
  showErrorInformation();
};

const onUploadCallback = (value, callback) => onUpload(value, callback);

const mapStateToProps = state => ({
  componentsProvider: getComponents(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: onSaveCallback(dispatch),
  onUpload: onUploadCallback,
  onDeleteUploadedImage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
