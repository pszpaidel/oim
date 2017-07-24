import { database, storage } from '../database/database';

export const fetchCookbook = (callback) => {
  database.ref('/').once('value', response => callback(response.val()));
};

export const saveRecipe = (value, callback) => {
  database.ref('/recipes').push(value).then(response => callback(response.key));
};

export const uploadImage = (file, callback) => {
  storage.ref().child(`images/${Date.now()}.jpg`).put(file).then(value => callback(value));
};

export const deleteUploadImage = (path) => {
  storage.ref().child(path).delete();
};
