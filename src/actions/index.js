import * as c from './ActionTypes';

export const requestedProfiles = () => ({
  type: c.REQUEST_PROFILES
});

export const getProfilesSuccess = (profiles) => ({
  type: c.GET_PROFILES_SUCCESS,
  profiles
});

export const getProfilesFailure = (error) => ({
  type: c.GET_PROFILES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestedProfiles);
    return fetch(`${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getProfilesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getProfilesFailure(error));
      });
  }
}