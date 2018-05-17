import React from "react";
import {connect} from "react-redux";

let mapStateToProps = ({activeUserID}) => {
  return {activeUserID};
};

let ClaimButton = ({distance, activeUserID, claimers=[]}) => {
  if (distance > 50) {
    return <p>This Cache is not in range</p>;
  }
  else if (claimers.includes(activeUserID)) {
    return <p>You have already Claimed this cache</p>;
  }
  else {

    return <button type="button" className="claimButton">Claim Cache</button>;
  }
};

let connectedClaimButton = connect(mapStateToProps)(ClaimButton);

export default connectedClaimButton;
