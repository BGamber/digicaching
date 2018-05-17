import React, {Component} from 'react';
import FriendCall from './FriendCall';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class FriendsPage extends Component {
  render() {  
    return (
      <div className="listOfFriends">
          <h1 className="Players">Active Players</h1>
          {
            (this.props.searchedUsers.length > 0) ?
            this.props.searchedUsers.map((friend)=> {
              return <FriendCall friend={friend} />
            }) :
            <div className="no-users"> No users found </div>
          }
          
          <Link to="/friends-lookup"><button className="back-button2">Back</button></Link>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  searchedUsers: state.searchedFriend
})

export default connect(mapStateToProps)(FriendsPage);