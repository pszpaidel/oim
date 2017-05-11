import _ from 'lodash';
import * as Const from '../const/CookbookConst';

const initialState = () => ({
  category: [],
  recipes: [],
  recipe: undefined,
  edited: undefined,
  view: Const.RECIPE,
  isRisReadyeady: false,
});

const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.GET_COOKBOOK: {
      console.log(action.isReady);
      return _.assign({}, state, { isReady: action.isReady });
    }
    case Const.SET_COOKBOOK:
      return _.assign({}, state, action.payload);
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
