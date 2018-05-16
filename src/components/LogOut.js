import React, { Component } from 'react';

class ItemPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      image: '',
      usingFor: ''
    }
  }

  render (){
    return(
      <div>
        <h1>name</h1>
        <img />
        <p>description</p>
        <h2>what can u use it for</h2>
        <h3>What does it use for:</h3>
      </div>
    )
  }
  
};

export default ItemPage;