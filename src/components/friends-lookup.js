import React, { Component } from 'react';

class FriendsLookup extends Component {
  constructor(props){
  super(props);
    this.state = {
      friendName: ''
    }
  }

  render(){
    return (
      <form className="friends">
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

export default FriendsLookup;