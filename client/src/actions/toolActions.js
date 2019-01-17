import axios from 'axios';

import * as types from './actionTypes';

// Get current profile
export const getToolsByUser = userID => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/tools/' + userID)
    .then(res =>
      dispatch({
        type: types.GET_TOOLS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {},
      })
    );
};

// Get profile by tool
export const getProfileByTool = (tool, location) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/tool/${tool}`)
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
