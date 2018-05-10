import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import ClaimButton from "./ClaimButton";


let CacheInfoBox = ({createdOn, claimedOn, name, lat, lng}) => {

  return (
    <div>
      <h3>{name}</h3>
      <p className="timestamp creation">Cached created:<time dateTime={createdOn}>{moment(createdOn).fromNow(0)}</time></p>
      <p className="timestamp claim">Cached claimed:<time dateTime={claimedOn}>{moment(claimedOn).fromNow(0)}</time></p>
      <ClaimButton lat={lat} lng={lng}/>
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
