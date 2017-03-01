import { GET_RECIPES } from '../const/Actions';

const initialState = () => ({
  recipes: [],
});

const cookbook = (state = initialState(), action) => {
  switch (action.type) {
    case GET_RECIPES:
      return state;
    default:
      return state;
  }
};

export default cookbook;

