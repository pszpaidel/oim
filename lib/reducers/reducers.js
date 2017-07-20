import { combineReducers } from 'redux';
import { cookbook } from '../model/cookbook';
import * as Const from '../const/CookbookConst';

const reducers = combineReducers({
  [Const.COOKBOOK]: cookbook,
});

export default reducers;
