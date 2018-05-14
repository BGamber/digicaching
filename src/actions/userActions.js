export const setTokenConst = "USER_ACTIVE_TOKEN";
export const removeTokenConst = "USER_REMOVE_TOKEN";

let setActiveUserToken = (token) => {
  localStorage.setItem('token', token);
  return {type:setTokenConst, token:token};
};

export let removeUserToken = () => {
  localStorage.removeItem('token');
  return {type: removeTokenConst}
};

setActiveUserToken.toString = () => setTokenConst;
removeUserToken.toString = () => removeUserToken;

export default setActiveUserToken;
