import React, { Component } from "react";
import { connect } from "react-redux";
import { dropCache } from "../actions/inventoriesActions";
import PropTypes from "prop-types";

import "./PlaceCache.css";
import InventoryChooser from "./InventoryChooser";

let mapDispatchToProps = { dropCache };

// let handleClick = (e) => {
//   e.target.classList.add('show');
// }

let isChooserShowing = false;

class PlaceCacheButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChooserShowing: false
    };
  }

  showChooser = () => {
    console.log('isChooserShowing',isChooserShowing);
    
    this.setState({ isChooserShowing: isChooserShowing=!isChooserShowing });
  };

  render() {
    let content;

    content = (
      <div>
        <button
          type="button"
          onClick={this.showChooser}
          className="placeCacheButton"
        >
          <img
            src={"/place-cache.svg"}
            className="placeCacheIcon"
            alt="drop cache here"
          />
        </button>
        {
          (isChooserShowing)?
          <div>
          <div className="close-x" 
          onClick={this.showChooser}>X</div> 
            <InventoryChooser /></div>
          :
          null
        }
      </div>
    );
    return content;
  }
}

PlaceCacheButton.propTypes = {
  dropCache: PropTypes.func.isRequired
};

let connectedUserTrackingButton = connect(null, mapDispatchToProps)(
  PlaceCacheButton
);

export default PlaceCacheButton;
