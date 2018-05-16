import React, { Component } from "react";
import {Link} from "react-router-dom";

class ItemPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      usingFor: ""
    };
  }

  render (){
    return(
      <div className="item-page">
        <h1 className="item-name">Blackshard of the Dead Knight</h1>
        <img className="item-img" src={"http://orig07.deviantart.net/124f/f/"+
        "2016/234/1/1/warrior___world_of_warcraft_by_wlop-daefvr0.jpg"} alt=""/>
        <p className="item-description">This right handed weapon increases your
           Attack skill by +3.</p>
        <h2 className="items-use-for">What it creats:</h2>
        <p className="use-for">warioir, knight, human, mega sword</p>
        <Link to="/profile"><button className="back-button">Back</button></Link>
      </div>
    );
  }

}

export default ItemPage;
