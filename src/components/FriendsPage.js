import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';



class FriendsPage extends Component {
  render() {  
    return (
      <div className="listOfFriends">
          <h1 className="Players">Active Players</h1>
          <div className="friend-card">
            <div className="friend-properties">
              <h1 className="user-name">User Name:</h1> 
              <h3 className="friend-name">{this.props.searchedUser.name}</h3>
              <h1 className="user-email">User Email:</h1>
              <h3 className="friend-email">{this.props.searchedUser.email}</h3>
              <button className="add-friend-button">Add-Friend</button>
            </div>
            {
              (this.props.searchedUser.image_url)?
              <img className="friend-image" alt="user-image" src={this.props.searchedUser.image_url} />:
              <img className="friend-image-notFound" alt="user-image" src={this.props.searchedUser.image_url} />
            } 
          </div>
          <Link to="/friends-lookup"><button className="back-button2">Back</button></Link>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  searchedUser: state.searchedFriend
})

export default connect(mapStateToProps)(FriendsPage);