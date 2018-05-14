const PROFILE_SET = "PROFILE_SET";
const PROFILE_LOADING = "PROFILE_LOADING";

export let setCurrentUserProfile = (user) => ({
  type: 'SET',
  payload: user
});
export let setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

setProfileLoading.toString = () => PROFILE_LOADING;

setCurrentUserProfile.toString = () => PROFILE_SET;
