import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ClaimButton from "./ClaimButton";
import {OverlayView} from "react-google-maps";
import {setActiveCache} from "../actions/uiActions";

import "./CacheInfoBox.css";

let getPixelPositionOffset = (width, height) => ({
  x: 16,
  y: -(height / 2),
});
let mapDispatchtoProps = dispatch => {
  let closePopup = () => {
    dispatch(setActiveCache(undefined));
  };
  return {closePopup};
};

let CacheInfoBox = ({createdOn, claimedOn, name, lat, lng, description,
  image_url="/No_image_available.svg", closePopup, distance, id}) => {
  //Database will return null if an image is not set but defualt parameter
  //triggers only on undefined
  if (image_url === null) {
    image_url =  "/No_image_available.svg";
  }

  return (
    <OverlayView
      position={{lat, lng}}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <div className="infoBox">
        <div className="infoBox_header">
          <h3>{name}</h3>
          <button type="button" className="close_button" onClick={closePopup}>
            <img src="/close.svg" alt="Close Button"/></button>
        </div>
        <h4>{description}</h4>
        <img className="item_pic" src={image_url} alt=""/>
        <p className="timestamp creation">Cached created:
          <time dateTime={createdOn}>{moment(createdOn).fromNow()}</time></p>
        {claimedOn ? <p className="timestamp claim">Cached claimed:
          <time dateTime={claimedOn}>{moment(claimedOn).fromNow()}</time></p> :
          <p> This cache has not been claimed</p>}
        <ClaimButton distance={distance} id={id}/>
      </div>
    </OverlayView>
  );
};

CacheInfoBox.propTypes = {
  createdOn: PropTypes.string.isRequired,
  claimedOn: PropTypes.string,
  name :PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  closePopup: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

let connectedCacheInfoBox = connect(null, mapDispatchtoProps)(CacheInfoBox);

export default connectedCacheInfoBox;
