export const SELECT_POINTS = "SELECT_POINTS";

export const selectCompany = (points) => {
  return dispatch(
    {
      type: SELECT_POINTS,
      points
    }
  )
};
