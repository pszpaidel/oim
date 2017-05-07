import _ from 'lodash';

const isValid = recipe => Boolean(recipe.title) &&
    Boolean(recipe.portion) &&
    recipe.category &&
    Number(recipe.category) >= 0 && _.size(_.filter(recipe.components, v => Boolean(v))) > 0 &&
    Boolean(recipe.content);

export default isValid;
