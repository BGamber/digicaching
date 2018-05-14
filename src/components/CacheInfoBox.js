import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import ClaimButton from "./ClaimButton";
import {OverlayView} from "react-google-maps";


let getPixelPositionOffset = (width, height) => ({
  x: 16,
  y: -(height / 2),
});


let CacheInfoBox = ({createdOn, claimedOn, name, lat, lng}) => {

  return (
    <OverlayView
        position={marker.position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div className="poi">
          <h3>{name}</h3>
          <p className="timestamp creation">Cached created:
            <time dateTime={createdOn}>{moment(createdOn).fromNow(0)}</time></p>
          <p className="timestamp claim">Cached claimed:
            <time dateTime={claimedOn}>{moment(claimedOn).fromNow(0)}</time></p>
          <ClaimButton lat={lat} lng={lng}/>
        </div>
      </OverlayView>

    </div>);
};

CacheInfoBox.propTypes = {
  createdOn:PropTypes.string.isRequired,
  claimedOn:PropTypes.string,
  name:PropTypes.string.isRequired,
  lat:PropTypes.number.isRequired,
  lng:PropTypes.number.isRequired
};

export default CacheInfoBox;
