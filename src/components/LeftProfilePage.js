import React from 'react';
import Spinner from './loaders/Spinner';

let LeftProfilePage = ({user}) => {
  let content;

  if (user === undefined || user.name === undefined) {
    content = <Spinner />;
  } else {

    content =<div className="left-profile-side">
    <div className="user-name left-values">
      <p>User Name:</p>
      <p>{user.name}</p>
    </div>
    <div className="friends-list left-values">
      <p>Friends</p>
      <p>({user.friendsCount})</p>
    </div>
    <div className="ranking left-values">
      <p>World Ranking</p>
      <p>({user.ranking})</p>
    </div>
    <div className="points left-values">
      <p>Personal Score</p>
      <p>{user.score}</p>
    </div>
  </div>
} 
return content;  
};

export default LeftProfilePage;