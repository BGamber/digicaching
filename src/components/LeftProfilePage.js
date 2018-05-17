import React from 'react';
import Spinner from './loaders/Spinner';
import { connect } from 'react-redux';

let LeftProfilePage = ({user, friends}) => {
  let content;

  if (user === undefined || user.name === undefined || friends === undefined) {
    content = <Spinner />;
  } else {

    content =<div className="left-profile-side">
    <div className="user-name left-values">
      <p>User Name:</p>
      <p>{user.name}</p>
    </div>
    <div className="friends-list left-values">
      <p>Friends</p>
      <p>({friends.length})</p>
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

let mapStateToProps = (state) => {
  return {
    friends: state.users[0].friends
  }
}

export default connect(mapStateToProps)(LeftProfilePage);