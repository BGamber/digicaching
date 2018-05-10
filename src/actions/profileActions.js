const PROFILE_GET = "PROFILE_GET";
const PROFILE_LOADING = "PROFILE_LOADING";

export let getCurrentProfile = (id) => {
  return (dispatch) => {
    dispatch(setProfileLoading());
    fetch(`/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          dispatch({
            type: PROFILE_GET,
            payload: {}
          });
        } else {
          (res => res.json()
            .then(data =>
              dispatch({
                type: PROFILE_GET,
                payload: data
              })
            ))
        }
      });
  };
};
export let setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

setProfileLoading.toString = () => PROFILE_LOADING;

getCurrentProfile.toString = () => PROFILE_GET;
