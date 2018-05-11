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
        <div className="user-name left-values">
          <p>User Name:</p>
          <p>Izik5415</p>
        </div>
        <div className="friends-list left-values">
          <p>Friends</p>
          <p>(300)</p>
        </div>
        <div className="ranking left-values">
          <p>World Ranking</p>
          <p>(320)</p>
        </div>
        <div className="points left-values">
          <p>Personal Score</p>
          <p>2000493</p>  
        </div>
      </div>
    );
  }
};

export default LeftProfilePage;