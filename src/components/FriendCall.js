import React from "react";

const FriendCall = ({friend}) =>{
  
  let renderHelper = () => {
      return <div className="friend-card">
        <div className="friend-properties">
          <h1 className="user-name">User Name:</h1>
          <h3 className="friend-name">{friend.name}</h3>
          <h1 className="user-email">User Email:</h1>
          <h3 className="friend-email">{friend.email}</h3>
          <button className="add-friend-button">Add-Friend</button>
        </div>
        {
          (friend.image_url)?
            <img className="friend-image" alt="user-IMG" src={friend.image_url} />:
            <img className="friend-image-notFound" alt="user-IMG" src={friend.image_url} />
        }
      </div>
  }
   
  return renderHelper()
  
}

export default FriendCall;
