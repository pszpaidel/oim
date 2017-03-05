import * as Const from '../const/CookbookConst';

const initialState = () => ({
  category: [],
  recipes: [],
});

const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case Const.SET_COOKBOOK:
      return action.payload;
    default:
      return state;
  }
};

export default cookbook;

