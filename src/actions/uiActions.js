const UI_SET_TRACKING = "UI_SET_TRACKING";
const UI_TOGGLE_TRACKING = "UI_TOGGLE_TRACKING";
const UI_SET_ACTIVE_CACHE = "UI_SET_ACTIVE_CACHE";
const UI_SET_PREVIOUS_BOUNDS = "UI_SET_PREVIOUS_BOUNDS";
let setUserTracking = (newValue) => {
  return {type:UI_SET_TRACKING, trackUser:newValue};
};

let toggleUserTracking = () => {
  return {type:UI_TOGGLE_TRACKING};
};

let setActiveCache = (id) => {
  return {type:UI_SET_ACTIVE_CACHE, newCache:id};
};

let previousBounds = ({north, south, east, west}) => {
  return {type:UI_SET_PREVIOUS_BOUNDS, bounds:{north,south,east,west}};
};


export {setUserTracking, toggleUserTracking, setActiveCache, previousBounds};
