import React from "react";

const FriendCall = ({friend: {name,email,image_url}}) =>
  <div>
    <div className="friend-card">
      <div className="friend-properties">
        <h1 className="user-name">User Name:</h1>
        <h3 className="friend-name">{name}</h3>
        <h1 className="user-email">User Email:</h1>
        <h3 className="friend-email">{email}</h3>
        <button className="add-friend-button">Add-Friend</button>
      </div>
      {
        (image_url)?
          <img className="friend-image" alt="user-IMG" src={image_url} />:
          <img className="friend-image-notFound" alt="user-IMG" src={image_url} />
      }
    </div>
    {
      (image_url)?
        <img className="friend-image" alt="user profile" src={image_url} />:
        <img className="friend-image-notFound"
          alt="" src={image_url} />
    }
  </div>;

export default FriendCall;
