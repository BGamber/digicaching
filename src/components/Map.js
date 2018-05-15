import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker}
  from "react-google-maps";

import { MarkerClusterer } from
  "react-google-maps/lib/components/addons/MarkerClusterer";
import {connect} from "react-redux";
import currentPosition from "../actions/currentPositionAction";

import CacheInfoBox from "./CacheInfoBox";

import PropTypes from "prop-types";


import ToggleTrackingButton from "./UserTrackingButton";
import {setUserTracking,
  setActiveCache as setActiveCacheAction} from "../actions/uiActions";

let mapStateToProps = ({caches, currentLat, currentLng, trackUser, activeCache}) => {
  return {caches, currentLat, currentLng, trackUser, activeCache};
};

let mapDispatchtoProps = (dispatch) => {
  let setCurrentPostition = (Lat, Lng) => {
    dispatch(currentPosition(Lat, Lng));
  };
  let disableTracking = () => {
    dispatch(setUserTracking(false));
  };
  let enableTracking = () => {
    dispatch(setUserTracking(true));
  };
  let setActiveCache = (id) => {
    dispatch(setActiveCacheAction(id));
  };
  return {setCurrentPostition, disableTracking, enableTracking, setActiveCache};
};

let connection = connect(mapStateToProps, mapDispatchtoProps);

let locationManagmentHooks = lifecycle({
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
      this.props.setCurrentPostition(latitude, longitude);
    });
    let watch = navigator.geolocation.watchPosition(({coords:{latitude,
      longitude}}) => {
      this.props.setCurrentPostition(latitude, longitude);
    });
    this.setState({watch});
  },
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watch);
  }
});

let mapComponent = ({caches=[{name:"ATV", id:"84f78f6c-5796-11e8-94dd-a81e84057a84",
  latitude:33.848460, longitude:-84.37360, description:"Hello"}], currentLat=33.848460,
currentLng=-84.37360, trackUser, disableTracking, enableTracking, setActiveCache,
activeCache }) => {
  return [
    <ToggleTrackingButton key="ToggleButton"/>,
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: currentLat, lng: currentLng }}
      {...trackUser ? {center:{lat:currentLat,lng:currentLng}} : {}} key="Map"
      onDragStart={disableTracking}
    >
      <Marker position={{lat:currentLat, lng:currentLng}}
        icon="/UserLocation.svg" onClick={enableTracking}/>
      <MarkerClusterer>
        <Marker position={{ lat: -34.397, lng: 150.644 }} title="Test" />
        {caches.map( ({latitude:lat,longitude:lng, id, name, description, image_url}) => {
          if (id === activeCache){
            return <CacheInfoBox lat={lat} lng={lng} key={id} name={name}
              description={description} image_url={image_url}/>;
          }
          else {
            return <Marker position={{lat, lng}} title={name} key={id}
              onClick={() => {
                setActiveCache(id);
              }}/>;
          }
        })}
      </MarkerClusterer>
    </GoogleMap>
  ];
};

mapComponent.propTypes = {
  caches: PropTypes.array,
  currentLat: PropTypes.number,
  currentLng: PropTypes.number,
  trackUser: PropTypes.bool
};

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAd627TYIzdl4hWGQ6aikUkXho3nwHOetQ&v=3.exp",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "93.2vh" }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connection,
  locationManagmentHooks
)(mapComponent);

export default MyMapComponent;
