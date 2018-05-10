import React, { Component } from 'react';

class FriendsLookup extends Component {
  constructor(props){
    super(props);
    this.state = {
      friendsList: ''
    }
  }

  render () {
    return (
      <div className="search-results">
          <h1 className="top-results">Top results:</h1>

      </div>
    )
  }
};


export default FriendsLookup;