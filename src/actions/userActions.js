export const setTokenConst = "ACTIVE_USER_TOKEN";

let setActiveUserToken = (token) => {
  return {type:setTokenConst, token:token};
};

setActiveUserToken.toString = () => setTokenConst;

export default setActiveUserToken;
