import database from '../../database/database';
import * as Const from '../../const/CookbookConst';

const fetchCookbook = (dispatch) => {
  database.ref('/').once('value', (snap) => {
    dispatch({ type: Const.SET_COOKBOOK, payload: snap.val() });
  });
};

export default fetchCookbook;