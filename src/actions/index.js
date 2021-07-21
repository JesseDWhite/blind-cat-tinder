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

export const getProfile = (selectedProfile) => ({
  type: c.GET_PROFILE,
  selectedProfile
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestedProfiles);
    return fetch(`http://localhost:5004/api/animals/`)
      .then(function (response) {
        return response.json()
      })
      .then(
        function (jsonifiedResponse) {
          console.log(jsonifiedResponse)
          return dispatch(getProfilesSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getProfilesFailure(error));
      });
  }
}