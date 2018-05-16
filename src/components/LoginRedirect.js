import React from "react";
import PropTypes from "prop-types";
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = ({activeUserToken}) => {
  return {activeUserToken};
};

let loginRedirect = ({location:{pathname:path}, activeUserToken= localStorage.getItem('token') }) => {
  if (!activeUserToken) {
    return <Redirect to={{pathname:"/login",
      state:{prevPath:path}}}/>;
  }
  else {return null;}

};
loginRedirect.propTypes = {
  location:PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withRouter(loginRedirect));
