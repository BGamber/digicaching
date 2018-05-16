import React from "react";
import Spinner from "./loaders/Spinner";

let InventoryList = ( user ) => {
console.log('userINventory: ', user);

  let itemsList = user.user.inventory.map(item => (
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

  let inventoryContent;
  if (!user) {
    inventoryContent = <Spinner />;
  } else {
    inventoryContent = <ul>
      { itemsList }
    </ul>;
  }
  return inventoryContent;
};

export default InventoryList;
