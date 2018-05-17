import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./loaders/Spinner";

let isChooserShowing = true;

class InventoryChooser extends Component {
  
  makeChoice = (chosenItem, currentLat, currentLng, authToken) => {

    fetch(`${process.env.REACT_APP_BACKEND}/api/caches/place/${chosenItem.id}`, {
      method:'POST',
      headers: {
        authorization: "Bearer " + authToken
      },
      body: {
        item_id: chosenItem.id,
        latitude: currentLat,
        longitude: currentLng
      }
    })
    // .then(res => { 
    //   res.json().then(data => {
    //     // ...data
    //   });
    // });
  };

  render() {
    let authToken = this.props.auth;
    let currentUser = this.props.users[0];
    let { currentLat, currentLng } = this.props;

    let inventoryContent;

    if (currentUser === undefined || currentUser.inventory === undefined) {
      inventoryContent = <Spinner />;
    } else {
      let itemsList = currentUser.inventory.map(item => (
        <li key={item.id}>
          <div
            className="itemImage"
            style={{ backgroundImage: "url(" + item.image_url + ")" }}
            alt={item.item_name}
          />
          <span
            className="inventory-item"
            onClick={value =>
              this.makeChoice(item, currentLat, currentLng, authToken)
            }
          >
            {item.item_name} ({item.quantity})
          </span>
        </li>
      ));
      inventoryContent = (
        <aside className="inventory-chooser">
          <h3>Drop a Cache</h3>
          <span>WHICH ITEM WOULD YOU LIKE TO DROP?</span>  
          <ul>{itemsList}</ul>
        </aside>
      );
    }
    return inventoryContent;
  }
}

let mapStateToProps = ({
  users,
  currentLat,
  currentLng,
  activeUserToken,
  activeUserID
}) => {
  return {
    users,
    currentLat,
    currentLng,
    auth: activeUserToken,
    activeUserID
  };
};

export default connect(mapStateToProps)(InventoryChooser);