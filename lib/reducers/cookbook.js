import _ from 'lodash';
import * as Const from '../const/CookbookConst';

const initialState = () => ({
  category: [],
  recipes: [],
  recipe: undefined,
  view: Const.RECIPE,
});

const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.SET_COOKBOOK:
      return action.payload;
    case Const.SET_RECIPE: {
      const rec = state.recipes[action.payload];
      return _.assign({}, state, { recipe: rec, view: Const.RECIPE });
    }
    case Const.NEW_RECIPE:
      return _.assign({}, state, { view: Const.FORM });
    default:
      return state;
  }
};

export default cookbook;
