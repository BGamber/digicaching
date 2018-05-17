

let setPosition = (state, action) => {
  let {currentLng, currentLat} = action;
  return {...state, currentLat, currentLng};
};

setPosition.toString = () => "POSITION_SET";

let setCaches = (state, action) => {
  let {newCaches} = action;
  return {...state, caches:newCaches};
};

setCaches.toString = () => "POSITION_CACHES";


let reducers = {
  [setPosition]: setPosition,
  [setCaches]: setCaches
};

let positionReducer = (state, action) => {
  let {type} = action;
  return reducers[type](state,action);
};

positionReducer.toString = () => "POSITION_";

export default positionReducer;
