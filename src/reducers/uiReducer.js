
let toggleUserTracking = (state) => {
  let {trackUser} = state;
  return {...state, trackUser:!trackUser};
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
  console.log(action["type"]);
  let type = action["type"];
  console.log(reducers["UI_TOGGLE_TRACKING"]);
  return reducers[type](state, action);

};



uiReducer.toString = () => "UI_";

export default uiReducer;
