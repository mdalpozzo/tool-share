import * as types from '../actions/actionTypes';

const initialState = {
  tools: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOOLS:
      return {
        ...state,
        tools: action.payload,
      };

    default:
      return state;
  }
}
