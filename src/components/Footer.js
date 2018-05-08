import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

let Footer = () => {
  return (
    <nav>
        <ul className="navbar">
            <li><NavLink to="/main/profile"><i className="ion-android-contact"></i></NavLink></li>
            <li><NavLink to="/main/map"><i className="ion-map"></i></NavLink></li>
            <li><NavLink to="/main/collections"><i className="ion-aperture"></i></NavLink></li>
        </ul>
    </nav>
  );
};

export default Footer;