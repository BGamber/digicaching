import React from "react";
import {connect} from "react-redux";
import {claimCache} from "../actions/cacheActions";

let mapStateToProps = ({activeUserID, currentLat, currentLng,
  activeUserToken}) => {
  return {activeUserID, currentLat, currentLng, activeUserToken};
};

let ClaimButton = ({distance, activeUserID, claims=[], currentLat, currentLng,
  activeUserToken , id}) => {
  if (distance > 50) {
    return <button disabled={true} className="claimButton">
      This Cache is not in range</button>;
  }
  else if (claims.includes(activeUserID)) {
    return <button disabled={true} className="claimButton">
      This cache has already been claimed</button>;
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
