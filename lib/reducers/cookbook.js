import _ from 'lodash';
import * as Const from '../const/CookbookConst';

const initialState = () => ({
  category: [],
  recipes: [],
  recipe: {},
});

const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.SET_COOKBOOK:
      return action.payload;
    case Const.SET_RECIPE: {
      const rec = _.find(state.recipes,
                data => String(data.id) === action.payload);

      return _.assign({}, state, { recipe: rec });
    }
    default:
      return state;
  }
};

export default cookbook;

