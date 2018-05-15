
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

let reducers = {
  UI_TOGGLE_TRACKING: toggleUserTracking,
  "UI_SET_TRACKING": setUserTracking
};

let uiReducer = (state, action) => {
  let type = action["type"];
  return reducers[type](state, action);

};



uiReducer.toString = () => "UI_";

export default uiReducer;
