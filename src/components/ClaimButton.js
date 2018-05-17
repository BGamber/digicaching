import React from "react";
import {connect} from "react-redux";
import {claimCache} from "../actions/cacheActions";

let mapStateToProps = ({activeUserID}) => {
  return {activeUserID, currentLat, currentLng, activeUserToken};
};

let ClaimButton = ({distance, activeUserID, claims=[]}) => {
  if (distance > 50) {
    return <p>This Cache is not in range</p>;
  }
  else if (claims.includes(activeUserID)) {
    return <p>You have already Claimed this cache</p>;
  }
  else {

    return <button type="button" className="claimButton"
      onClick={() => {
        claimCache(id, currentLat, currentLng, activeUserToken);
      }}>Claim Cache</button>;
  }
};

let connectedClaimButton = connect(mapStateToProps)(ClaimButton);

export default connectedClaimButton;
