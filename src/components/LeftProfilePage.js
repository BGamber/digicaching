import React, { Component } from 'react';

class LeftProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    }
    console.log('props', this.props);
  }

  render(){
    
    
    return (
      <div className="left-profile-side">
        <div className="user-name left-values">
          <p>User Name:</p>
          <p>{this.props.user.name}</p>
        </div>
        <div className="friends-list left-values">
          <p>Friends</p>
          <p>({this.props.user.friendsCount})</p>
        </div>
        <div className="ranking left-values">
          <p>World Ranking</p>
          <p>({this.props.user.ranking})</p>
        </div>
        <div className="points left-values">
          <p>Personal Score</p>
          <p>{this.props.user.score}</p>  
        </div>
      </div>
    );
  }
};

export default LeftProfilePage;