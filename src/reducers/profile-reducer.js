/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  profiles: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PROFILES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_PROFILES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        profiles: action.profiles
      });
    case c.GET_PROFILES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};