import profileReducer from "./profileReducer";
import currentPositionReducer from "./currentPositionReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";
import inventoriesReducer from "./inventoriesReducer";

let reducers ={
  [profileReducer]:profileReducer,
  [currentPositionReducer]:currentPositionReducer,
  [userReducer]:userReducer,
  [inventoriesReducer]:inventoriesReducer,
  [uiReducer]: uiReducer
};

let mainReducer = (state, action) => {
  console.log('aaction:',action.type);
  let newState = state;
  Object.keys(reducers).forEach( (prefix) => {
    return
    if (action.type.startsWith(prefix)){
      newState = reducers[prefix](state, action);
      
      
    }
  });
  return newState;

};

export default mainReducer;
