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
              <h1 className="friend-name">User Name: {this.props.searchedUser.name}</h1>
              <h1 className="friend-email">User Email: {this.props.searchedUser.email}</h1>
              {
                (this.props.searchedUser.image_url)?
                <img className="friend-image" alt="user-image" src={this.props.searchedUser.image_url} />:
                <img className="friend-image-notFound" alt="user-image" src={this.props.searchedUser.image_url} />
              } 
              
            </div>
            <div className="add-friend">
              <button className="add-friend-button">Add-Friend</button>
            </div>
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