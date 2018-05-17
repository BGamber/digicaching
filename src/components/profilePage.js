import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUserProfile } from "../actions/profileActions";
import UpperProfilePage from "./UpperProfilePage";
import LeftProfilePage from "./LeftProfilePage";
import RightProfilePage from "./RightProfilePage";
import Footer from "./Footer";
import Spinner from "./loaders/Spinner";
import "../index.css";
import { withRouter } from "react-router-dom";
import authFetch from "../lib/authFetch";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let userRouterId = this.props.match.params.id;

    if (userRouterId === undefined) {
      this.props.history.push("/friends-lookup");
    }

    authFetch(`${process.env.REACT_APP_BACKEND}/api/users/${userRouterId}`)
      .then(res => {
        res.json().then(data => {
          this.props.getCurrentProfile(data);
        });
      });
  }
 

  render() {
    let profileContent;
    if (!this.props.currentUser) {
      profileContent = <Spinner />;
    } else {
      let currentUser = this.props.currentUser;      
      profileContent = (
        <div className="profile-page">
          <UpperProfilePage user={currentUser} />
          <div className="left-and-right">
            <LeftProfilePage  />
            <RightProfilePage user={currentUser} />
          </div>
          <Footer />
        </div>
      );
    }
    return profileContent;
  }
}

let mapStateToProps = ({currentUser, activeUserID}) => {
  return {currentUser, activeUserID};
};

let mapDispatchToProps = dispatch => {
  let getCurrentProfile = user => {
    dispatch(getCurrentUserProfile(user));
  };
  return { getCurrentProfile };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
);
