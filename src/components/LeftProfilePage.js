import React from 'react';

let LeftProfilePage = (user) => {
return   <div className="left-profile-side">
    <div className="user-name left-values">
      <p>User Name:</p>
      <p>{user.user.name}</p>
    </div>
    <div className="friends-list left-values">
      <p>Friends</p>
      <p>({user.user.friendsCount})</p>
    </div>
    <div className="ranking left-values">
      <p>World Ranking</p>
      <p>({user.user.ranking})</p>
    </div>
    <div className="points left-values">
      <p>Personal Score</p>
      <p>{user.user.score}</p>
    </div>
  </div>};

export default LeftProfilePage;