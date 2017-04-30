import * as Const from '../../const/CookbookConst';

const setRecipe = id => ({ type: Const.SET_RECIPE, payload: id });

export default setRecipe;
