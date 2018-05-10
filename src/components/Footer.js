import React from "react";
import {NavLink} from "react-router-dom";
import "../index.css";

let Footer = () => {
  return (
    <div className="navber-div">
      <nav className="navbar">
        <div><NavLink to="/profile"><i className="ion-android-contact"></i></NavLink></div>
        <div><NavLink to="/map"><i className="ion-map"></i></NavLink></div>
        <div><NavLink to="/collections"><i className="ion-aperture"></i></NavLink></div>
        <div><NavLink to="/friends-lookup"><i className="ion-person-add"></i></NavLink></div>
      </nav>
    </div>
  );
};

export default Footer;
