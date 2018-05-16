import setActiveUserToken from "./userActions";

export let setPosition = (newLat, newLng) => {
  return {type:"POSITION_SET",currentLat:newLat, currentLng:newLng };
};

setPosition.toString = () => "POSITION_SET";

export let setTimer = (newTimer) => {
  return {type:"POSITION_TIMER", newTimer};
};

setTimer.toString  = () => "POSITION_TIMER";

export let newBounds = ({east, west, north, south}) => {
  return (dispatch, getState) => {
    let {currentLat, currentLng, activeUserToken} = getState();
    fetch(`${process.env.REACT_APP_BACKEND}/api/caches?loc=${currentLat},`+
      `${currentLng}&bounds=${north},${south},${west},${east}`,
    {
      "headers": {
        "authorization": `Bearer ${activeUserToken}`
      }
    }).then(res => {
      if (res.status === 200) {
        res.json().then((caches) => {
          dispatch(setCaches(caches));
        });
      } else {
        if (res.status === 401) {
          dispatch(setActiveUserToken());
        }
      }
    });
  };
};

export let setCaches = (newCaches) => {
  return {type:"POSITION_CACHES", newCaches};
};

setCaches.toString = () => "POSITION_CACHES";

// let getNewBounds = (newEast, newWest, newNorth, newSouth) => {
//
// };

export default setPosition;
