import React from "react";
import Spinner from "./loaders/Spinner";
import { connect } from "react-redux";

let LeftProfilePage = ({ user, friends }) => {
  let content;
  if (!friends) friends = ["-"];
  if (user[0] === undefined || user[0].name === undefined) {
    content = <Spinner />;
  } else {
    content = (
      <div className="left-profile-side">
        <div className="user-name left-values">
          <p>User Name:</p>
          <p>{user[0].name}</p>
        </div>
        <div className="friends-list left-values">
          <p>Friends</p>
          <p>({friends.length})</p>
        </div>
        <div className="ranking left-values">
          <p>World Ranking</p>
          <p>({user[0].ranking})</p>
        </div>
        <div className="points left-values">
          <p>Personal Score</p>
          <p>{user[0].score}</p>
        </div>
      </div>
    );
  }
  return content;
};

let mapStateToProps = state => {
  return {
    friends: state.currentUser.friends,
    user: state.currentUser
  };
};

export default connect(mapStateToProps)(LeftProfilePage);
