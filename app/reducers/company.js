const initialState = {
  points: 0,
};

const company = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default company;
