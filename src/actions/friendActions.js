export const FRIENDS_SET = "FRIENDS_SET";

export let setCurrentFriends = (friend) => {
  return {
  type: FRIENDS_SET,
  payload: friend
  }
};

setCurrentFriends.toString = () => FRIENDS_SET;