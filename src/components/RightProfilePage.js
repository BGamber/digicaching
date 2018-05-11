import React, { Component } from 'react';

class RightProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    }
  }

  render(){
    return (
      <div className="right-profile-side">
        <div className="my-inventory left-values">
          <h4>Inventory</h4>
        </div>
        <div className="logout">
          <p>Log Out</p>
        </div>
    </div>
    );
  }
};

export default RightProfilePage;