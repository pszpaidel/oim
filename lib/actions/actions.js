// @flow

import * as Actions from "../const/Actions";

export const selectCompany = (points) => {
    return {
        type: Actions.SELECT_POINTS,
        payload: points
    }
};
