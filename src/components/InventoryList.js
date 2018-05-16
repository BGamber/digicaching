import React from "react";
import Spinner from "./loaders/Spinner";

let InventoryList = ( {user} ) => {
  let inventoryContent;

  if (user === undefined || user.inventory === undefined) {
    inventoryContent = <Spinner />;
  } else {

    let itemsList = user.inventory.map(item => (
      <li key={item.id}>
        <div
          className="itemImage"
          style={{ backgroundImage: "url(" + item.image_url + ")" }}
          alt={item.item_name}
        />
        <span>
          {item.item_name} ({item.quantity})
        </span>
      </li>
    ));
    inventoryContent = <ul>
      { itemsList }
    </ul>;
  }



  return inventoryContent;
};

export default InventoryList;
