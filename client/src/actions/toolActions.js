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
export const saveTool = (tool, toolImages) => dispatch => {
  // send tool info to server which will save to mongo
  axios
    .post('/api/tools', tool)
    .then(res => {
      // send images to s3 with tool_id
      console.log(res.data);
      console.log(toolImages);
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
