import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './Form';
import { onSave, onUpload } from './FormActionCreator';
import isValid from '../../utils/utils';

const callbackSuccess = () => (
  notification.success({
    message: 'Gratulację!',
    description: 'Przepis zapisany poprawnie.',
  })
);

const errorOnValidate = () => (
  notification.error({
    message: 'Porażka!',
    description: 'Nie wypełniono wymaganych pól.',
  })
);

const onSaveCallback = (value) => {
  if (isValid(value)) {
    onSave(value, callbackSuccess);
    return;
  }
  errorOnValidate();
};

const onUploadCallback = (value, callback) => onUpload(value, callback);

const mapDispatchToProps = () => ({
  onSave: onSaveCallback,
  onUpload: onUploadCallback,
});


const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;

