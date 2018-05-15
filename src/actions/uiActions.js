const UI_SET_TRACKING = "UI_SET_TRACKING";
const UI_TOGGLE_TRACKING = "UI_TOGGLE_TRACKING";
const UI_SET_ACTIVE_CACHE = "UI_SET_ACTIVE_CACHE";

let setUserTracking = (newValue) => {
  return {type:UI_SET_TRACKING, trackUser:newValue};
};

let toggleUserTracking = () => {
  return {type:UI_TOGGLE_TRACKING};
};

let setActiveCache = (id) => {
  return {type:UI_SET_ACTIVE_CACHE, newCache:id};
};
export {setUserTracking, toggleUserTracking, setActiveCache};
