import React from 'react';

let FriendsLookup = () => {
  return (
    <div className="friends">
        <h1 className="lookup-title">Find A Friend: </h1>
        <input type="text" className="friend-input" placeholder="User Name" />
        <button 
          className="friend-button-search" 
          type="submit">Search</button>
    </div>
  );
};

export default FriendsLookup;