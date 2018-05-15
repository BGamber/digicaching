import {setTokenConst, setIDConst} from "../actions/userActions";

let setUserTokenReducer = (state,action) => {
  let token = action["token"];
  return {...state, activeUserToken:token};
};

let setUserIDReducer = (state, action) => {
  let {id} = action;
  return {...state, activeUserID:id};
};


let reducers = {
  [setTokenConst]:setUserTokenReducer,
  [setIDConst]: setUserIDReducer
};

let userReducer = (state, action) => {
  let type = action["type"];
  return reducers[type](state,action);
};

setUserIDReducer.toString = () => setIDConst;
setUserTokenReducer.toString = () => setTokenConst;
userReducer.toString = () => "ACTIVE_USER_";

export default userReducer;
