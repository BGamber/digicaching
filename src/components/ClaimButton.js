import React from "react";
import {claimCache} from "../actions/cacheActions";
import {connect} from "react-redux";

let mapDispatchToProps = ({currentLat, currentLng, activeUserToken}) => {
  return {currentLat, currentLng, activeUserToken};
};

let ClaimButton = ({distance, id , currentLat, currentLng, activeUserToken}) => {
  if (distance <= 50) {
    return <button type="button" className="claimButton"
      onClick={() => {
        claimCache(id, currentLat, currentLng, activeUserToken);
      }}
    >Claim Cache</button>;
  }
  else {
    return <p>This Cache is not in range</p>;
  }
};

let connectedButton = connect(mapDispatchToProps)(ClaimButton);


export default connectedButton;
