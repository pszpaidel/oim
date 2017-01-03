// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main/Main';
import config from './store/configStore';
import './components/index.less';

ReactDOM.render(
  <Provider store={config()}>
    <Main />
  </Provider>,
document.getElementById('app'));

