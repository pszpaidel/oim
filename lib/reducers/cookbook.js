import _ from 'lodash';
import * as Const from '../const/CookbookConst';

const initialState = () => ({
  [Const.CATEGORY]: undefined,
  [Const.RECIPES]: undefined,
  [Const.RECIPE]: undefined,
  [Const.VIEW]: Const.QUICK_VIEW,
  [Const.IS_READY]: false,
  [Const.COMPONENTS]: undefined,
});


const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.GET_COOKBOOK: {
      return _.assign({}, state, { [Const.IS_READY]: action.payload });
    }
    case Const.SET_COOKBOOK:
      return _.assign({}, state, action.payload);
    case Const.SET_COMPONENTS:
      return _.assign({}, state, { [Const.COMPONENTS]: action.payload });
    case Const.SET_RECIPE: {
      const recipe = state[Const.RECIPES][action.payload];
      return _.assign({}, state, {
        [Const.RECIPE]: recipe,
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

export default cookbook;
