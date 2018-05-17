import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./loaders/Spinner";
import authFetch from "../lib/authFetch";
import { setUserInventories } from "../actions/inventoriesActions";


class InventoryChooser extends Component {
  componentDidMount(){
    console.log('cdm');
    
    this.updateInventory;
  }
 updateInventory = authFetch(`${process.env.REACT_APP_BACKEND}/api/inventories/${this.props.activeUserID}`, {
  method: "GET"
   }).then((res) => {
     res.json().then(data => {
      this.props.setInventories(data);
    })
  });
  makeChoice(chosenItem, currentLat, currentLng) {
console.log('id: ', chosenItem.id);
    authFetch(`${process.env.REACT_APP_BACKEND}/api/caches/place`, {
      "method":"POST",
      "headers": {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "item_id": chosenItem.id,
        "latitude": currentLat,
        "longitude": currentLng
      })
    }).then(this.props.closer)
    
    // 

  }

  render() {

    let currentUser = this.props.currentUser[0];
    let inventory = this.props.inventories;
    let { currentLat, currentLng } = this.props;

    let inventoryContent;

    if (!currentUser|| !inventory) {
      inventoryContent = <Spinner />;
    } else {
      let itemsList = inventory.map(item => (
        <li key={item.id}>
          <div
            className="itemImage"
            style={{ backgroundImage: "url(" + item.image_url + ")" }}
            alt={item.item_name}
          />
          <span
            className="inventory-item"
            onClick={() =>
              this.makeChoice(item, currentLat, currentLng)
            }
          >
            {item.item_name} ({item.quantity})
          </span>
        </li>
      ));
      inventoryContent = (
        <aside className="inventory-chooser">
          <div className="close-x" onClick={ this.props.closer }>X</div>
          <h3>Drop a Cache</h3>
          <span>WHICH ITEM WOULD YOU LIKE TO DROP?</span>
          <ul>{itemsList}</ul>
        </aside>
      );
    }
    return inventoryContent;
  }
}

let mapDispatchToProps = dispatch => {
  let setInventories = inventories => {
    dispatch(setUserInventories(inventories));
  };
  return { setInventories };
};

let mapStateToProps = ({
  currentUser,
  currentLat,
  currentLng,
  activeUserID,
  inventories
}) => {
  return {
    currentUser,
    currentLat,
    currentLng,
    activeUserID,
    inventories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryChooser);
