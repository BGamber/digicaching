import currentPositionReducer from "../reducers/currentPositionReducer";

const currentPositionConst = currentPositionReducer.toString();

let setPosition = (newLat, newLng) => {
  return {type:currentPositionConst,currentLat:newLat, currentLng:newLng };
};

// let getNewBounds = (newEast, newWest, newNorth, newSouth) => {
//
// };

export default setPosition;

setPosition.toString = () => currentPositionConst;
