import setUserToken, {setTokenConst, removeUserToken, removeTokenConst} from "../actions/userActions";


let USER = 'USER_';

let setUserTokenReducer = (state,action) => {
  let token = action["token"];
  return {...state, activeUserToken:token};
};

let removeUserTokenReducer = (state, action) => {
  return {...state, activeUserToken: null}
}


// let reducers = {
//   [setUserToken]:setUserTokenReducer,
//   [removeUserToken]: removeUserTokenReducer 
// };

let userReducer = (state = {activeUserToken: localStorage.getItem("token")}, action) => {
  let type = action.type;
  // return reducers[type](state,action);
  switch(type){
    case setTokenConst:
      return setUserTokenReducer(state,action)
      break;
    case removeTokenConst:
      return removeUserTokenReducer(state,action)
      break;
    default:
      return state;
  }
};


setUserTokenReducer.toString = () => setUserToken;
userReducer.toString = () => setTokenConst;
removeUserTokenReducer.toString = () => removeUserToken;

export default userReducer;
