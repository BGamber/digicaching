import React, { Component } from "react";
import CollectionList from "./CollectionList";
import ItemPage from "./ItemPage";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setActiveUserToken} from "../actions/userActions";

class RightProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: ["blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal","blablablabal",]
    };
  }
  render(){
    return (
      <div className="right-profile-side">
        <div className="my-inventory">
          <h4 className="inventory-title">Inventory</h4>
          <div className="showing-items">
            {this.state.inventory.map( (item,i) => <p key={i} className="inventory-items">{item},</p>) }
          </div>
        </div>
        <div onClick={() => this.props.removeToken()} className="logout">
          <Link className="links" to='/login'><p className="log-out-button-text">Log Out</p></Link>
        </div>
      </div>);
  }
}

const mapDispatchToProps = {
  removeToken:setActiveUserToken
};


export default connect(null, mapDispatchToProps)(RightProfilePage);
