import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker as Cache}
  from "react-google-maps";
import { MarkerClusterer } from
  "react-google-maps/lib/components/addons/MarkerClusterer";
import {connect} from "react-redux";
import currentPosition from "../actions/currentPositionAction";

let mapStateToProps = ({caches, currentLat, currentLng}) => {
  return {caches, currentLat, currentLng};
};

let mapDispatchtoProps = (dispatch) => {
  let setCurrentPostition = (Lat, Lng) => {
    dispatch(currentPosition(Lat, Lng));
  };
  return {setCurrentPostition};
};

let connection = connect(mapStateToProps, mapDispatchtoProps);

let locationManagmentHooks = lifecycle({
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
      this.props.setCurrentPostition(latitude, longitude);
    });
    let watch = navigator.geolocation.watchPosition(({coords:{latitude, longitude}}) => {
      this.props.setCurrentPostition(latitude, longitude);
    });
    this.setState({watch});
  },
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watch);
  }
});

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAd627TYIzdl4hWGQ6aikUkXho3nwHOetQ&v=3",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "93.2vh" }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connection,
  locationManagmentHooks
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
