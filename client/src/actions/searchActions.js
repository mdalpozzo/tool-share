import axios from 'axios';

import * as types from './actionTypes';

// Get users that have tool
export const getLenders = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/search')
    .then(res =>
      dispatch({
        type: types.GET_LENDERS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_LENDERS,
        payload: {},
      })
    );
};
