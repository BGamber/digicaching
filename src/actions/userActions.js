export const setTokenConst = "ACTIVE_USER_TOKEN";
export const setIDConst = "ACTIVE_USER_ID";

let setActiveUserToken = (token) => {
  return {type:setTokenConst, token};
};

setActiveUserToken.toString = () => setTokenConst;

export let setActiveUserID = (id) => {
  return {type:setIDConst, id};
};

setActiveUserID.toString = () => setIDConst;


export default setActiveUserToken;
