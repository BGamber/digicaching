import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./loaders/Spinner";
import authFetch from "../lib/authFetch";
// import { currentId } from "async_hooks";
import { setUserInventories } from "../actions/inventoriesActions";


class InventoryChooser extends Component {
  componentDidMount(){
    authFetch(`${process.env.REACT_APP_BACKEND}/api/inventories/${this.props.activUserId}`, {
      method:"GET"
       })
       .then(res => {
        res.json().then(data => {
          this.props.setInventories(data);
        });
      });
  }
  

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
    });
    // .then(res => {
    //   res.json().then(data => {
    //     // ...data
    //   });
    // });
  }

  render() {
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
  users,
  currentLat,
  currentLng,
  activeUserID
}) => {
  return {
    users,
    currentLat,
    currentLng,
    activeUserID
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryChooser);
