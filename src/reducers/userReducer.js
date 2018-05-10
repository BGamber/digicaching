import setUserToken, {userConst} from "../actions/userActions";

let reducers = {
  [setUserToken]:setUserTokenReducer
};

let userReducer = (state, action) => {
  let type = action["type"].replace(userConst,"");
  return reducers[type](state,action);
};

let setUserTokenReducer = (state,action) => {
  let token = action["token"];
  return {...state, activeUserToken:token};
};

userReducer.toString = () => userConst;

export default userReducer;
