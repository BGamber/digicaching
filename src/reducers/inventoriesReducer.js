const INVENTORIES ="INVENTORIES_";

let inventories =  {}

let inventoriesReducer = (state=inventories, action) => {
  let type = action.type.replace(INVENTORIES, '');
  switch (type) {
  case "GET":
    return {
      ...state,
      users: action.payload,
      loading: false
    };
  case "SET":
    return action.payload
  default:
  return state;
  }
  
};


export default inventoriesReducer;

inventoriesReducer.toString = () => INVENTORIES;
