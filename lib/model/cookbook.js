import _ from 'lodash';
import { createSelector } from 'reselect';
import { createAction } from '../utils/utils';
import * as api from '../services/api';
import * as Const from '../const/CookbookConst';

// API CALLS
export const fetchCookbook = callback => api.fetchCookbook(callback);
export const saveRecipe = (value, callback) => api.saveRecipe(value, callback);
export const uploadImage = (value, callback) => api.uploadImage(value, callback);
export const deleteUploadImage = value => api.deleteUploadImage(value);

// ACTIONS
export const setRecipe = id => createAction(Const.SET_RECIPE, id);
export const addRecipe = createAction(Const.NEW_RECIPE, undefined);

// SELECTORS
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

// STATE
const initialState = () => ({
  [Const.CATEGORY]: [],
  [Const.RECIPES]: {},
  [Const.RECIPE]: {},
  [Const.VIEW]: Const.QUICK_VIEW,
  [Const.IS_READY]: false,
  [Const.COMPONENTS]: [],
});

// REDUCER
export const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.FETCH_COOKBOOK:
      return _.assign({}, state, { [Const.IS_READY]: action.payload });
    case Const.SET_COOKBOOK:
      return _.assign({}, state, action.payload);
    case Const.SET_COMPONENTS:
      return _.assign({}, state, { [Const.COMPONENTS]: action.payload });
    case Const.SET_RECIPE: {
      return _.assign({}, state, {
        [Const.RECIPE]: state[Const.RECIPES][action.payload],
        [Const.VIEW]: Const.RECIPE_VIEW,
      });
    }
    case Const.NEW_RECIPE:
      return _.assign({}, state, {
        [Const.VIEW]: Const.FORM_VIEW,
        [Const.RECIPE]: undefined,
      });
    default:
      return state;
  }
};

