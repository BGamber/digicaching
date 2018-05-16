import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentFriends } from '../actions/friendActions';
import { withRouter } from 'react-router-dom';

class FriendsLookup extends Component {
  constructor(props){
  super(props);
    this.state = {
      friendName: ''
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/users', {
      headers: {
        authorization: `Bearer ${this.props.jwt}`
      }
    })

    .then(data => { 
      return data.json()})
    .then(users => {
      let theUsers = users.filter(user => user.name.toUpperCase() === this.state.friendName.toUpperCase())
        console.log(theUsers)
        this.props.setSearchedFriend(theUsers)
        this.props.history.push('/friends');
    })
  }

  render(){
    return (
      <form  onSubmit={this.submitHandler} className="friends">
          <h1 className="lookup-title">Find A Friend: </h1>
          <input 
            type="text" 
            className="friend-input" 
            placeholder="User Name"
            onChange={(event) => this.setState({ friendName:event.target.value })} />
          <button 
            className="friend-button-search" 
            type="submit">Search</button>
      </form>
    );
  }
};


let mapStateToProps = (state) => ({
  jwt: state.activeUserToken
})

let mapDispatchToProps = dispatch => ({
  setSearchedFriend: (friend) => {
    dispatch(setCurrentFriends(friend))
  } 
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsLookup));