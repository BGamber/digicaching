import profileReducer from "./profileReducer";
import currentPositionReducer from "./currentPositionReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";

const initialState = {
  loading: false,
  trackUser: true
};



let reducers ={
  [profileReducer]:profileReducer,
  [currentPositionReducer]:currentPositionReducer,
  [userReducer]:userReducer,
  [uiReducer]: uiReducer
};

let mainReducer = (state = initialState, action) => {
  let newState = state;
  Object.keys(reducers).forEach( (prefix) => {
    if (action.type.startsWith(prefix)){
      newState = reducers[prefix](state, action);
    }
  });
  return newState;

};

export default mainReducer;
