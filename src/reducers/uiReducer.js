
let toggleUserTracking = (state) => {
  let {trackUser} = state;
  if (trackUser === false) {
    return {...state, trackUser:!trackUser};
  }
  else {
    return state;
  }
};

let setUserTracking = (state, action) => {
  let {trackUser} = action;
  return {...state, trackUser};
};

let setActiveCache = (state, action) => {
  let {newCache} = action;
  return {...state, activeCache:newCache};
};

let previousBounds = (state, action) => {
  let {bounds} = action;
  return {...state, bounds};
};

let reducers = {
  UI_TOGGLE_TRACKING: toggleUserTracking,
  "UI_SET_TRACKING": setUserTracking,
  "UI_SET_ACTIVE_CACHE":setActiveCache,
  "UI_SET_PREVIOUS_BOUNDS": previousBounds
};

let uiReducer = (state, action) => {
  let type = action["type"];
  return reducers[type](state, action);

};


uiReducer.toString = () => "UI_";

export default uiReducer;
