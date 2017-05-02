import * as Const from '../../const/CookbookConst';

export const setRecipe = id => ({ type: Const.SET_RECIPE, payload: id });
export const addRecipe = ({ type: Const.NEW_RECIPE });
