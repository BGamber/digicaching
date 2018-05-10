import setUserToken, {setTokenConst} from "../actions/userActions";

let setUserTokenReducer = (state,action) => {
  let token = action["token"];
  return {...state, activeUserToken:token};
};


let reducers = {
  [setUserToken]:setUserTokenReducer
};

let userReducer = (state, action) => {
  let type = action["type"];
  console.log(reducers);
  console.log(type);
  return reducers[type](state,action);
};


setUserTokenReducer.toString = () => setUserToken;
userReducer.toString = () => setTokenConst;

export default userReducer;
