import database from '../../database/database';
import * as Const from '../../const/CookbookConst';

export const fetch = (dispatch) => {
  database.ref('/').once('value', (snap) => {
    dispatch({ type: Const.SET_COOKBOOK, payload: snap.val() });
  });
};

export const save = (value, callback) => {
  database.ref('/recipes').push(value, () => callback());
};
