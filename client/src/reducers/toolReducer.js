import * as types from '../actions/actionTypes';

const initialState = {
  tools: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOOLS:
      return {
        ...state,
        tools: action.payload,
      };
    case types.SAVE_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload],
      };
    default:
      return state;
  }
}
