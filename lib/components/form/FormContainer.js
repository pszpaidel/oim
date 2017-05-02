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

const onClickSave = dispatch => (value) => {
  onSave(dispatch, value, callbackSuccess);
};

const mapDispatchToProps = dispatch => ({
  onClickSave: onClickSave(dispatch),
});


const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;

