import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { cookbook } from '../model/cookbook';
import * as Const from '../const/CookbookConst';

const reducers = combineReducers({
  [Const.COOKBOOK]: cookbook,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
