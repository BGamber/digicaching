const INVENTORIES_SET = "INVENTORIES_SET";
const INVENTORIES_DROP_CACHE = "INVENTORIES_DROP_CACHE";
// const INVENTORIES_GET = "INVENTORIES_GET";
export let dropCache = () => ({
  type:INVENTORIES_DROP_CACHE,
  payload: 'cache dropped'
})

export let setUserInventories = (inventory) => ({
  type: 'INVENTORIES_SET',
  payload: inventory
});

setUserInventories.toString = () => INVENTORIES_SET;
dropCache.toString = () => INVENTORIES_DROP_CACHE;