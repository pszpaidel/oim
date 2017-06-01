import { createSelector } from 'reselect';
import _ from 'lodash';
import * as Const from '../const/CookbookConst';

const getImmutableRecipe = state => _.get(state, [Const.COOKBOOK, Const.RECIPE]);
export const getRecipe = createSelector(
    getImmutableRecipe, value => value,
);

const getImmutableComponents = state => _.get(state, [Const.COOKBOOK, Const.COMPONENTS]);
export const getComponents = createSelector(
    getImmutableComponents, value => value,
);

const getImmutableRecipes = state => _.get(state, [Const.COOKBOOK, Const.RECIPES]);
export const getRecipes = createSelector(
    getImmutableRecipes, value => value,
);

const getImmutableView = state => _.get(state, [Const.COOKBOOK, Const.VIEW]);
export const getView = createSelector(
    getImmutableView, value => value,
);

const getImmutableIsReady = state => _.get(state, [Const.COOKBOOK, Const.IS_READY]);
export const getIsReady = createSelector(
    getImmutableIsReady, value => value,
);

const getImmutableCategory = state => _.get(state, [Const.COOKBOOK, Const.CATEGORY]);
export const getCategory = createSelector(
    getImmutableCategory, value => value,
);
