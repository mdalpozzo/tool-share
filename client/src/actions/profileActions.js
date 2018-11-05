import axios from 'axios';

import * as types from './actionTypes';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
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

// Get all lenders
export const getAllLenders = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/all`)
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

// Set searchStarted to false
export const searchStartedFalse = () => dispatch => {
  dispatch({
    type: types.SEARCH_FALSE,
  });
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Profile loading
export const setProfileLoading = () => ({
  type: types.PROFILE_LOADING,
});
