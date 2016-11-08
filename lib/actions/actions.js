import * as Actions from "../const/Actions";

export const selectCompany = (points) => {
  return dispatch(
    {
      type: Actions.SELECT_POINTS,
      payload: points
    }
  )
};
