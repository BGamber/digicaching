import React, { Component } from 'react';

let LeftProfilePage = (props) => (
  <div className="left-profile-side">
    <div className="user-name left-values">
      <p>User Name:</p>
      <p>{props.user.name}</p>
    </div>
    <div className="friends-list left-values">
      <p>Friends</p>
      <p>({props.user.friendsCount})</p>
    </div>
    <div className="ranking left-values">
      <p>World Ranking</p>
      <p>({props.user.ranking})</p>
    </div>
    <div className="points left-values">
      <p>Personal Score</p>
      <p>{props.user.score}</p>
    </div>
  </div>);

export default LeftProfilePage;