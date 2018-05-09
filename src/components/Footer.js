import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

let Footer = () => {
  return (
    <div className="navber-div">
      <nav className="navbar">
        <div><NavLink to="/main/profile"><i className="ion-android-contact"></i></NavLink></div>
        <div><NavLink to="/main/map"><i className="ion-map"></i></NavLink></div>
        <div><NavLink to="/main/collections"><i className="ion-aperture"></i></NavLink></div>
      </nav>
    </div>
  );
};

export default Footer;