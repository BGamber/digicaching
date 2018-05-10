export const setTokenConst = "ACTIVE_USER_TOKEN";
export const userConst = "ACTIVE_USER_";

let setActiveUserToken = (token) => {
  return {type:setTokenConst, token:token};
};

setActiveUserToken.toString = () => setTokenConst;

export default setActiveUserToken;
