import React from "react";

let ClaimButton = ({distance}) => {
  if (distance <= 50) {
    return <button type="button" className="claimButton">Claim Cache</button>;
  }
  else {
    return <p>This Cache is not in range</p>;
  }
};


export default ClaimButton;
