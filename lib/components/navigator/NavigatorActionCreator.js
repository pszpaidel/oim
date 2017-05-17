import * as Const from '../../const/CookbookConst';
import { createAction } from '../../utils/utils';

export const setRecipe = id => createAction(Const.SET_RECIPE, id);
export const addRecipe = createAction(Const.NEW_RECIPE, undefined);
