import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContainer from './components/main/containers/MainContainer';
import store from './store/configStore';
import './components/index.less';
import '../node_modules/react-bootstrap/';

ReactDOM.render(
  <Provider store={store()}>
    <MainContainer />
  </Provider>,
  document.getElementById('app'));
