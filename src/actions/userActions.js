const setTokenConst = "TOKEN";
export const userConst = "ACTIVE_USER_";

let setActiveUserToken = (token) => {
  return {type:userConst + setTokenConst, token:token};
};

setActiveUserToken.toString = () => userConst + setTokenConst;

export default setActiveUserToken;
