import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import enUS from 'antd/lib/locale-provider/en_US';
import MainContainer from './components/main/MainContainer';
import store from './store/configStore';
import './components/index.less';

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store()}>
      <MainContainer />
    </Provider>
  </LocaleProvider>, document.getElementById('app'));
