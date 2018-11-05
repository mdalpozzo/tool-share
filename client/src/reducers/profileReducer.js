import * as types from '../actions/actionTypes';

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
  lenders: null,
  searchStarted: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case types.GET_LENDERS:
      return {
        ...state,
        lenders: action.payload,
        loading: false,
        searchStarted: true,
      };
    case types.SEARCH_FALSE:
      return {
        ...state,
        searchStarted: false,
      };
    default:
      return state;
  }
}
