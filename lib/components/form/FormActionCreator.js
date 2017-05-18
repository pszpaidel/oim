import { saveRecipe, uploadImage, deleteUploadImage } from '../api/api';

export const onSave = (value, callback) => {
  saveRecipe(value, callback);
};

export const onUpload = (value, callback) => {
  uploadImage(value, callback);
};

export const onDeleteUploadedImage = (value) => {
  deleteUploadImage(value);
};
