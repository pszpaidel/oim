import { database, storage } from '../../database/database';

export const fetchCookbook = (callback) => {
  database.ref('/').once('value', response => callback(response.val()));
};

export const save = (value, callback) => {
  database.ref('/recipes').push(value).then(response => callback(response.key));
};

export const upload = (file, callback) => {
  storage.ref().child(`images/${Date.now()}`).put(file).then(value => callback(value));
};

export const deleteUploadedImage = (path) => {
  storage.ref().child(path).delete();
};
