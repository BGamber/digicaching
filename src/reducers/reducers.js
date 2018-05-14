import profileReducer from "./profileReducer";
import currentPositionReducer from "./currentPositionReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";
import inventoriesReducer from "./inventoriesReducer";

const initialState = {
  users: [{
    "id": "096780a6-3347-410c-98d4-48db176ce9b1",
    "email": "joe@shmoe.net",
    "name": "joeshmoe",
    "image_url": '/img/default_avatar.png',
    "password": "$2b$10$zXEQLTI6Wd3S6YuJtl.mbuF9BuZM3VQypp/pLhoEQNxejoxzC4Xqa"
  }],
  inventories: [{
    "id": 1,
    "user_id": "096780a6-3347-410c-98d4-48db176ce9b1",
    "item_id": 2,
    "quantity": 3
  },{
    "id": 2,
    "user_id": "096780a6-3347-410c-98d4-48db176ce9b1",
    "item_id": 3,
    "quantity": 2
  }
  ],
  items: [{
    name: "robot body",
    id: 3, description: "An inanimate robot shell",
    image_url: "https://i.pinimg.com/564x/13/80/93/138093cf8d0bf3594a1f8aab166036a1.jpg"
  }, { id: 2, name: "battery", description: "A lithium battery", image_url: "https://cdn2.bigcommerce.com/server4400/ccf39/products/1423/images/5032/BR_C__18316.1368217244.1280.1280.jpg?c=2" }],
  loading: false,
  trackUser:true
}

let reducers = {
  [profileReducer]:profileReducer,
  [currentPositionReducer]:currentPositionReducer,
  [userReducer]:userReducer,
  [inventoriesReducer]:inventoriesReducer
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
