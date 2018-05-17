import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setActiveUserToken} from "../actions/userActions";
import InventoryList from "./InventoryList";

class RightProfilePage extends Component {

  render(){
    console.log('rightuser: ', this.props.user[0].name);
    
    return (
      <div className="right-profile-side">
        <div className="my-inventory">
          <h4 className="inventory-title">Inventory</h4>
          <div className="showing-items">
            <InventoryList user={this.props.user[0]} />
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

RightProfilePage.propTypes = {
  removeToken: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(RightProfilePage);
