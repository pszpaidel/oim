import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import { Provider } from 'react-redux';
import Main from './components/main/Main';
import store from './store/configStore';
import './components/index.less';

Perf.start();
ReactDOM.render(
  <Provider store={store()}>
    <Main />
  </Provider>,
  document.getElementById('app'));
Perf.stop();
Perf.printInclusive(Perf.getLastMeasurements());
