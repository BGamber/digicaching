import React from 'react';

let InventoryList = (props) => {
  let itemsList = props.items.map(
    item => <li key={props.id}>
      <div className="itemImage" style={{ backgroundImage:"url("+item.image_url+")" }} alt={item.name}></div>
      <span>{item.name}</span>
    </li>
  )

  return (
    <div>
      <ul  className="inventoryList">
        {itemsList}
      </ul>
    </div>
  )
}; 

export default InventoryList;