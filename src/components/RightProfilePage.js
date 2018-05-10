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
        <div className="my-inventory">
          <h4>My inventory</h4>
        </div>
    </div>
    );
  }
};

export default RightProfilePage;