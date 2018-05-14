const UI_SET_TRACKING = "UI_SET_TRACKING";
const UI_TOGGLE_TRACKING = "UI_TOGGLE_TRACKING";


let setUserTracking = (newValue) => {
  return {type:UI_SET_TRACKING, trackUser:newValue};
};

let toggleUserTracking = () => {
  return {type:UI_TOGGLE_TRACKING};
};

export {setUserTracking, toggleUserTracking};
