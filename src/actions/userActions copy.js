export const setTokenConst = "ACTIVE_USER_TOKEN";

export let setActiveUserToken = (token) => {
  return {type:setTokenConst, token:token};
};

export let removeUserToken = () => {
  return {type:removeUserToken};
};

setActiveUserToken.toString = () => setTokenConst;
removeUserToken.toString = () => removeUserToken;

