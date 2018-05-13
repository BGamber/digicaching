import profileReducer from "./profileReducer";
import currentPositionReducer from "./currentPositionReducer";
import userReducer from "./userReducer";

const initialState = {
  users: [{
    "id": "096780a6-3347-410c-98d4-48db176ce9b1",
    "email": "joe@shmoe.net",
    "name": "joeshmoe",
    "image_url": '/img/default_avatar.png',
    "password": "$2b$10$zXEQLTI6Wd3S6YuJtl.mbuF9BuZM3VQypp/pLhoEQNxejoxzC4Xqa"
  }],
  loading: false
};

let reducers ={
  [profileReducer]:profileReducer,
  [currentPositionReducer]:currentPositionReducer,
  [userReducer]:userReducer
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
