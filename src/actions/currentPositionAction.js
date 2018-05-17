import authFetch from "../lib/authFetch";
import {previousBounds} from "../actions/uiActions";

export let setPosition = (newLat, newLng) => {
  return {type:"POSITION_SET",currentLat:newLat, currentLng:newLng };
};

setPosition.toString = () => "POSITION_SET";


export let newBounds = ({east, west, north, south}) => {
  return (dispatch, getState) => {
    let {currentLat, currentLng, bounds} = getState();
    let {northP, southP, eastP, westP} = bounds;
    if (northP !== north && southP !== south && eastP !== east
      && westP !== west) {
      dispatch(previousBounds({north,south,east,west}));
      authFetch(`${process.env.REACT_APP_BACKEND}/api/caches?loc=${currentLat},`+
      `${currentLng}&bounds=${north},${south},${west},${east}`).then(res => {
        if (res.status === 200) {
          res.json().then((caches) => {
            dispatch(setCaches(caches));
          });
        }
      });
    }
  };
};

export let setCaches = (newCaches) => {
  return {type:"POSITION_CACHES", newCaches};
};

setCaches.toString = () => "POSITION_CACHES";


export default setPosition;
