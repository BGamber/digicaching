import profileReducer from "./profileReducer";
import {combineReducers} from 'redux';
import currentPositionReducer from "./currentPositionReducer";

const initialState = {
  loading: false
};

// let reducers ={
//   [profileReducer]:profileReducer,
//   [currentPositionReducer]:currentPositionReducer
// };

// let mainReducer = (state = initialState, action) => {
//   let newState = state;
//   Object.keys(reducers).forEach( (prefix) => {
//     if (action.type.startsWith(prefix)){
//       newState = reducers[prefix](state, action);
//     }
//   });
//   return newState;

// };

// export default mainReducer;

export default combineReducers({
  profile:profileReducer
});