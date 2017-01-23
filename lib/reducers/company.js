const initialState = () => {
  return {
    points: 0
  }
};

const company = (state = initialState(), action) => {
  switch (action.type) {
    case 'test':
      return state;
    default:
      return state;
  }
};

export default company;
