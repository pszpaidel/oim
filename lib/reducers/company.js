import { SELECT_POINTS } from '../const/Actions';

const initialState = () => ({
  points: 0,
});

const company = (state = initialState(), action) => {
  switch (action.type) {
    case SELECT_POINTS:
      return state;
    default:
      return state;
  }
};

export default company;

