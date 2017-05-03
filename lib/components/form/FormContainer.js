import { connect } from 'react-redux';
import { notification } from 'antd';
import Form from './Form';
import onSave from './FormActionCreator';

const callbackSuccess = () => (
  notification.success({
    message: 'Gratulację!',
    description: 'Twój przepis został zapisany poprawnie.',
  })
);

const errorOnValidate = () => (
  notification.error({
    message: 'Porażka!',
    description: 'Nie wypełniono wymaganych pól.',
  })
);

const onClickSave = (value) => {
  console.log(value);
  if (!value.ingredients || !value.title || !value.category || !value.content) {
    errorOnValidate();
    return;
  }

  onSave(value, callbackSuccess);
};

const mapDispatchToProps = () => ({
  onClickSave,
});


const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;

