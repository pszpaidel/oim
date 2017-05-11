import { database, storage } from '../../database/database';
import * as Const from '../../const/CookbookConst';

export const fetch = (dispatch) => {
  database.ref('/').once('value', (snap) => {
    dispatch({ type: Const.SET_COOKBOOK, payload: snap.val() });
  });
};

export const save = (value, callback) => {
  database.ref('/recipes').push(value, () => callback());
};

export const upload = (file, callback) => {
  storage.ref().child(`images/${Date.now()}`).put(file).then(value => callback(value));
};

export const deleteUploadedImage = (path) => {
  console.log(path);
  storage.ref().child(path).delete().then(() => console.log('deleted'));
};

