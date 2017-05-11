import { save, upload, deleteUploadedImage } from '../api/api';

export const onSave = (value, callback) => {
  save(value, callback);
};

export const onUpload = (value, callback) => {
  upload(value, callback);
};

export const onDeleteUploadedImage = (value) => {
  deleteUploadedImage(value);
};
