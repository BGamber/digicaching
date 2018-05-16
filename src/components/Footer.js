import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import "../index.css";

let mapStateToProps = ({activeUserID}) => {
  return {activeUserID};
};

let Footer = ({activeUserID}) => {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <div><NavLink to={`/profile/${activeUserID}`}><i className="ion-android-contact"></i></NavLink></div>
        <div><NavLink to="/profile/:id"><i className="ion-android-contact"></i></NavLink></div>
        <div><NavLink to="/map"><i className="ion-map"></i></NavLink></div>
        <div><NavLink to="/collections"><i className="ion-aperture"></i></NavLink></div>
        <div><NavLink to="/friends-lookup"><i className="ion-person-add"></i></NavLink></div>
      </nav>
    </div>
  );
};


let connectedFooter = connect(mapStateToProps)(Footer)

export default connectedFooter;
