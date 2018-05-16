const INVENTORIES ="INVENTORIES_";

let inventories =  {};

let inventoriesReducer = (state=inventories, action) => {
  let type = action.type.replace(INVENTORIES, "");
  switch (type) {
  case "SET":
    return {
      ...state,
      inventories: action.payload,
    };
  }
};


export default inventoriesReducer;

inventoriesReducer.toString = () => INVENTORIES;
