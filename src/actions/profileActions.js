import { GET_PROFILE, PROFILE_LOADING, SET_CURRENT_USER } from './action-types';

export let getCurrentProfile = id => dispatch => {
  dispatch(setProfileLoading());
  fetch(`./api/users/${id}`)
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

  export let getProfileById = id => dispatch => {
    dispatch(setProfileLoading());
    fetch(`./api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          dispatch({
            type: GET_PROFILE,
            payload: {}
          })
        } else {
          res =>
            dispatch({
              type: GET_PROFILE,
              payload: res.data
            })
        }
      })
    };



  export let setCurrentUser = data => {
    return {
      type: SET_CURRENT_USER,
      payload: data
    };
  };

  export let setProfileLoading = () => {
    return {
      type: PROFILE_LOADING
    }
  }