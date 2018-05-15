import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// class FriendsPage extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userName:''
//     }
//   }

//   render() {
const FriendsPage = () => {
    return (
      <div className="listOfFriends">
          <h1 className="Players">Active Players</h1>
          <div className="friend-card">
            <div className="friend-properties">
              <h1 className="friend-name">Itzik34234</h1>
              <img className="friend-image" src="Army.jpg" />
            </div>
            <div className="add-friend">
              <button className="add-friend-button">Add-Friend</button>
            </div>
          </div>
          <Link to="/friends-lookup"><button className="back-button2">Back</button></Link>
      </div>
    );
  // }
};

export default FriendsPage;