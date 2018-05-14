import React, { Component } from 'react';

class Collections extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="collections">
        <h1 className="collections-header">Collections</h1>
        <ul>
          <h4>Master Robot</h4>
          <li><img className="collection-img" src="doors.jpeg" /></li>
          <li><img className="collection-img" src="doors.jpeg" /></li>
          <li><img className="collection-img" src="doors.jpeg" /></li>
          <li><img className="collection-img" src="doors.jpeg" /></li>
          <li><img className="collection-img" src="doors.jpeg" /></li>
        </ul>
      </div>
    );
  }
};

export default Collections;