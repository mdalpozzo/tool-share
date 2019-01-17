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
export const getProfileByTool = tool => dispatch => {
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

// Saves tool info to mongo (name, description, price, value, condition), save images to aws s3
export const saveTool = toolFD => dispatch => {
  axios
    .post('/api/tools', toolFD, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      // console.log(res.data);
      // console.log(toolImages);
      //
      dispatch({
        type: types.SAVE_TOOL,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch({
        type: types.SAVE_TOOL,
      })
    );
};
