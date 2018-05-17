const INVENTORIES ="INVENTORIES_";

let inventories =  {};

let inventoriesReducer = (state=inventories, action) => {
  console.log('inventoriesReducr: ',action);
  
  let type = action.type.replace(INVENTORIES, "");
  switch (type) {
  case "SET":
    return {
      ...state,
      inventories: action.payload,
    };
  default:
    return state;
  }
};


export default inventoriesReducer;

inventoriesReducer.toString = () => INVENTORIES;
