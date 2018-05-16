import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker}
  from "react-google-maps";

import { MarkerClusterer } from
  "react-google-maps/lib/components/addons/MarkerClusterer";
import {connect} from "react-redux";
import currentPosition, {newBounds} from "../actions/currentPositionAction";

import CacheInfoBox from "./CacheInfoBox";

import PropTypes from "prop-types";

import debounce from "lodash/debounce";

import ToggleTrackingButton from "./UserTrackingButton";
import {setUserTracking,
  setActiveCache as setActiveCacheAction} from "../actions/uiActions";

let mapStateToProps = ({caches, currentLat, currentLng, trackUser, activeCache
}) => {
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
  let setBounds = (boundsObject) => {
    dispatch(newBounds(boundsObject));
  };

  return {setCurrentPostition, disableTracking, enableTracking, setActiveCache
    , setBounds};
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


let boundChangeHandler = (map, boundsManagement) => {
  let bounds = map.getBounds();
  let northEast = bounds.getNorthEast();
  let southWest = bounds.getSouthWest();
  let north = northEast.lat();
  let south = southWest.lat();
  let east = northEast.lng();
  let west = southWest.lng();
  boundsManagement({north, south, east, west});
};

let mapComponent = ({caches=[], currentLat=33.848460,
  currentLng=-84.37360, trackUser, disableTracking, enableTracking,
  setActiveCache, activeCache, setBounds}) => {

  let debounced = debounce(boundChangeHandler, 2000);
  
  return [
    <ToggleTrackingButton key="ToggleButton"/>,
    <GoogleMap
      defaultZoom={15} defaultCenter={{ lat: currentLat, lng: currentLng }}
      {...trackUser ? {center:{lat:currentLat,lng:currentLng}} : {}} key="Map"
      onDragStart={disableTracking} ref={(ref) => {this.map = ref;}}
      onBoundsChanged={
        () => {
          debounced(this.map, setBounds);
        }}>

      <Marker position={{lat:currentLat, lng:currentLng}}
        icon="/UserLocation.svg" onClick={enableTracking}/>

      <MarkerClusterer maxZoom={18}>

        <Marker position={{ lat: -34.397, lng: 150.644 }} title="Test" />

        {caches.map( ({latitude:lat,longitude:lng, id, item_name, createdon,
          item_description, item_image_url, openedon, distance}) => {
          if (item_name === "Mystery Box") {
            item_image_url = "/Mystery.svg";
          }
          if (id === activeCache){
            return <CacheInfoBox lat={lat} lng={lng} key={id} name={item_name}
              description={item_description} image_url={item_image_url} id={id}
              createdOn={createdon} claimedOn={openedon} distance={distance} />;
          }
          else {
            let icon;
            if (openedon){
              icon = "/chest_open.png";
            }
            else {
              icon = "/chest_closed.png";
            }
            return <Marker position={{lat, lng}} title={item_name} key={id}
              icon={icon}
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
  connection,
  locationManagmentHooks,
  withGoogleMap,

)(mapComponent);

export default MyMapComponent;
