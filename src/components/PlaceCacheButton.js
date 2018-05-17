import React, { Component } from "react";
import "./PlaceCache.css";
import InventoryChooser from "./InventoryChooser";


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

  showChooser() {
    this.setState({ isChooserShowing: isChooserShowing=!isChooserShowing });
  }

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


export default PlaceCacheButton;
