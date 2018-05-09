import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker as Cache}
  from "react-google-maps";
import { MarkerClusterer } from
  "react-google-maps/lib/components/addons/MarkerClusterer";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7Sm"+
    "ujjPUIGKdyao2Kqitzr1kiRg&v=3",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "93.2vh" }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({caches=[]}) => {

  return <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 33.848460, lng: -84.37360 }}
  >
    <MarkerClusterer>
      <Cache position={{ lat: -34.397, lng: 150.644 }} title="Test" />
      {caches.map( ({latitude:lat,longitude:lng, id, name}) => {
        return <Cache position={{lat, lng}} title={name} key={id}/>;
      })}
    </MarkerClusterer>
  </GoogleMap>;
});

export default MyMapComponent;
