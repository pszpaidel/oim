import database from '../../database/database';

const onSave = (dispatch, value, callback) => {
  console.log(value);
  database.ref('/recipes').push(value, () => {
    callback();
  });
};

export default onSave;
