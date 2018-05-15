import React from "react";
import {connect} from "react-redux";



let mapStateToProps = ({currentLat, currentLng}) => ({currentLat, currentLng});

let ClaimButton = ({lat, lng, currentLat, currentLng}) => {
  let range = distanceBetween(lat,lng, currentLat, currentLng);
  if (range && range < 50) {
    return <button type="button" className="claimButton">Claim Cache</button>;
  }
  else {
    return null;
  }
};

let connectedButton = connect(mapStateToProps)(ClaimButton);

export default connectedButton;


let distanceBetween = (lat1,lon1,lat2,lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distanceInKilometers = R * c; // Distance in km
  let distanceInMeters = distanceInKilometers  * 1000;
  return distanceInMeters;
};

let deg2rad = (deg) => deg * (Math.PI/180);
