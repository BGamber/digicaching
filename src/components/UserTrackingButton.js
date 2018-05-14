import React from "react";
import {connect} from "react-redux";
import {toggleUserTracking} from "../actions/uiActions";
import PropTypes from "prop-types";

let mapDispatchToProps = {toggleUserTracking};

let userTrackingButton = ({toggleUserTracking}) => {
  return <button type="button" onClick={toggleUserTracking}>Toggle Follow
  </button>;
};

userTrackingButton.propTypes = {
  toggleUserTracking: PropTypes.func.isRequired
};


let connectedUserTrackingButton = connect(null,
  mapDispatchToProps)(userTrackingButton);

export default connectedUserTrackingButton;
