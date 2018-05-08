import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

let Footer = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/main/profile"><i className="ion-android-contact"></i></NavLink></li>
            <li><NavLink to="/main/map"><i className="ion-map"></i></NavLink></li>
            <li><NavLink to="/main/collections"><i className="ion-aperture"></i></NavLink></li>
        </ul>
    </nav>
  );
};

export default Footer;