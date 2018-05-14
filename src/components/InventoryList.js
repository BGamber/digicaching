import React, { Component } from 'react';
import { setUserInventories } from '../actions/inventoriesActions';
import { connect } from 'react-redux';

class InventoryList extends Component {
  async componentDidMount() {
    console.log('compdidmt');
    
    let uid = this.props.userId;

    fetch(`${process.env.REACT_APP_BACKEND}/api/inventories/${uid}`)
      .then((res) => {
        res.json()
          .then((data) => {
            console.log('data: ', data);
            console.log('this.props: ', this.props);
            this.props.setCurrentProfile(data);

          })
      })
    this.props.setInventories(uid);

  }

  render() {
    let uid = this.props.userId;
    let allItemsList = this.props.items
    console.log('allItemsList: ', allItemsList);
    ;
    let filteredInventories = this.props.inventories.filter(
      inventory => inventory.user_id === uid );
      console.log('filteredInventories: ', filteredInventories);
     
      
    let inventoryItemsList = filteredInventories.map( (inventory) => {
      return { itemInfo:this.props.items.find( item => item.id === inventory.item_id ), itemQuantity:inventory.quantity }
    } ); 
    console.log('inventoryItemsList: ' , inventoryItemsList);
    let itemsList = inventoryItemsList.map( item => (<li key={item.id}>
      <div className="itemImage" style={{ backgroundImage: "url(" + item.itemInfo.image_url + ")" }} alt={item.name}></div>
      <span>{item.itemInfo.name} ({item.itemQuantity})</span>
    </li>)
    );
      // return itemsList;
    
    console.log('itemsList: ', itemsList);

    return (
      <div>
        <ul className="inventoryList">
          {itemsList}
        </ul>
      </div>
    )
  };
}

let mapStateToProps = state => ({
  inventories: state.inventories,
  items: state.items
});

let mapDispatchToProps = (dispatch) => {
  let setInventories = (id) => {
    dispatch(setUserInventories(id))
  };
  return {
    setInventories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);