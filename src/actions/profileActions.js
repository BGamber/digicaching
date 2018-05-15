const PROFILE_GET = "PROFILE_GET";
const PROFILE_LOADING = "PROFILE_LOADING";

export let getCurrentUserProfile = (user) => {
  return {
  type: PROFILE_GET,
  payload: user}
};
export let setProfileLoading = () => {
  
  
  return {
    type: PROFILE_LOADING
  };
};

setProfileLoading.toString = () => PROFILE_LOADING;

getCurrentUserProfile.toString = () => PROFILE_GET;