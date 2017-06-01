import _ from 'lodash';
import { notification } from 'antd';

export const isValid = recipe => Boolean(recipe.title) &&
  Boolean(recipe.portion) &&
  recipe.category &&
  Number(recipe.category) >= 0 && _.size(_.filter(recipe.components, v => Boolean(v))) > 0 &&
  Boolean(recipe.content);

export const createAction = (type, payload) => ({ type, payload });

export const showSuccessInformation = () => {
  notification.success({
    message: 'Gratulację!',
    description: 'Przepis zapisany poprawnie.',
  });
};

export const showErrorInformation = () => (
  notification.error({
    message: 'Porażka!',
    description: 'Nie wypełniono wymaganych pól.',
  })
);

export const getComponents = (recipes) => {
  let components = [];
  _.forEach(recipes, (value) => {
    components = components.concat(value.components);
  });

  return _.uniq(components);
};
