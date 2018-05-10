const PROFILE_GET = "PROFILE_GET";
const PROFILE_LOADING = "PROFILE_LOADING";

export let getCurrentProfile = (user) => ({
  type: 'SET',
  payload: user
});
export let setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

setProfileLoading.toString = () => PROFILE_LOADING;

getCurrentProfile.toString = () => PROFILE_GET;
