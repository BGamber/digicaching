import React from "react";
import {connect} from "react-redux";
import {toggleUserTracking} from "../actions/uiActions";
import PropTypes from "prop-types";

import "./UserTrackingButton.css";

let mapDispatchToProps = {toggleUserTracking};

let mapStateToProps = ({trackUser}) => {
  return {trackUser};
};

let userTrackingButton = ({toggleUserTracking, trackUser}) => {
  return <button type="button" onClick={toggleUserTracking}
    className="trackingButton">
    <img src={trackUser ? "/tracking.svg" : "/notTracking.svg"}
      className="trackingIcon"
      alt={`Toggle centering map on user currently ${trackUser}`}/>
  </button>;
};

userTrackingButton.propTypes = {
  toggleUserTracking: PropTypes.func.isRequired,
  trackUser: PropTypes.bool,
};


let connectedUserTrackingButton = connect(mapStateToProps,
  mapDispatchToProps)(userTrackingButton);

export default connectedUserTrackingButton;
