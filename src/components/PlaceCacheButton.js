import React, { Component } from "react";
import "./PlaceCache.css";
import InventoryChooser from "./InventoryChooser";


// let handleClick = (e) => {
//   e.target.classList.add('show');
// }



class PlaceCacheButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChooserShowing: false
    };
  }

  showChooser() {
    this.setState({ isChooserShowing: !this.state.isChooserShowing });
  }

  render() {
    let content;

    content = (
      <div>
        <button
          type="button"
          onClick={this.showChooser.bind(this)}
          className="placeCacheButton"
        >
          <img
            src={"/place-cache.svg"}
            className="placeCacheIcon"
            alt="drop cache here"
          />
        </button>
        {
          (this.state.isChooserShowing)?
          <div>
            <InventoryChooser closer={this.showChooser.bind(this)} /></div>
          :
          null
        }
      </div>
    );
    return content;
  }
}


export default PlaceCacheButton;
