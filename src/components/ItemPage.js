import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

class ItemPage extends Component {

  findAndRenderItem = () => {
    let theItem = this.props.inventory.find((item) => {
      return Number(item.id) === Number(this.props.match.params.id)
    })
    return(
      <div className="item-page">
        <h1 className="item-name">{theItem.item_name}</h1>
        <img className="item-img" alt="item" src={theItem.item_image_url}/>
        <p className="item-description">{theItem.item_description}</p>
        <Link to={`/profile/${this.props.user.id}`}><button className="back-button">Back</button></Link>
      </div>
    )
  }

  render (){
    return (
      <div>
        {this.findAndRenderItem()}
      </div>  
    )
  }
};

let mapStateToProps = (state) => ({
  inventory: state.users[0].inventory,
  user: state.users[0]
})

export default connect(mapStateToProps)(ItemPage);

