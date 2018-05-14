import React from 'react';
import InventoryList from './InventoryList';

let RightProfilePage = (props) => (
  <div className="right-profile-side">
    <div className="my-inventory left-values">
      <h4>Inventory</h4>
      <InventoryList userId={props.userId} />
    </div>
    <div className="logout">
      <p>Log Out</p>
    </div>
  </div>
);

export default RightProfilePage;