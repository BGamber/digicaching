import React, { Component } from 'react';

class LeftProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    }
  }

  render(){
    return (
      <div className="left-profile-side">
        <div className="friends left-values">
          <p>amount of friends</p>
        </div>
        <div className="ranking left-values">
          <p>amount of friends</p>
        </div>
        <div className="points left-values">
          <p>amount of friends</p>  
        </div>
        <div className="logout left-values">
          <p>amount of friends</p>
        </div>
      </div>
    );
  }
};

export default LeftProfilePage;