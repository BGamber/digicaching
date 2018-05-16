import profileReducer from "./profileReducer";
import currentPositionReducer from "./currentPositionReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";
import inventoriesReducer from "./inventoriesReducer";
import friendsReducer from './friendsReducer';

import initialState from "../store";

let reset = () => {
  return initialState;
};

reset.toString = () => "RESET";

let reducers ={
  [profileReducer]:profileReducer,
  [currentPositionReducer]:currentPositionReducer,
  [userReducer]:userReducer,
  [inventoriesReducer]:inventoriesReducer,
  [uiReducer]: uiReducer,
  [reset]: reset,
  [friendsReducer]: friendsReducer
};

console.log(reducers);

let mainReducer = (state, action) => {
  let newState = state;
  Object.keys(reducers).forEach( (prefix) => {
    if (action.type.startsWith(prefix)){
      newState = reducers[prefix](state, action); 
    }
  });
  return newState;

};

export default mainReducer;
