import * as Actions from '../const/Actions';

const selectCompany = (points:number) => {
  return {
    type: Actions.SELECT_POINTS,
    payload: points
  }
};

export default selectCompany;
