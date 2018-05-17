import React from "react";
import Spinner from "./loaders/Spinner";
import { Link } from "react-router-dom";

let InventoryList = ( {user} ) => {
  let inventoryContent;
  let itemsList;

  if (user === undefined || user.inventory === undefined) {
    return <Spinner />;
  } else {

    itemsList = user.inventory.map(item => (
      <Link key={item.id} to={`/item/${item.id}`} style={{ textDecoration: 'none' }}> <li className="inventoryList" key={item.id}>
        <div
          className="itemImage"
          style={{ backgroundImage: "url(" + item.image_url + ")" }}
          alt={item.item_name}
        />
        <span>
          {item.item_name} ({item.quantity})
        </span>
      </li></Link>
    ));
    return itemsList;
  }
};

export default InventoryList;
