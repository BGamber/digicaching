import { GET_PROFILE, PROFILE_LOADING } from './action-types';

export let getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  fetch('./api/profile')
    .then((res) => {
      if (!res.ok) {
        dispatch({
          type: GET_PROFILE,
          payload: {}
        })
      } else {
        (res => res.json())
        .then(data =>
          dispatch({
            type: GET_PROFILE,
            payload: res.data
          })
        )
      }
    })
  }

  export let setProfileLoading = () => {
    return {
      type: PROFILE_LOADING
    }
  }