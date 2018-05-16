const INVENTORIES_SET = "INVENTORIES_SET";
const INVENTORIES_GET = "INVENTORIES_GET";

export let setUserInventories = (id) => ({
  type: 'SET',
  payload: id
});

setUserInventories.toString = () => INVENTORIES_SET;
