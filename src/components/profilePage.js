import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserProfile } from '../actions/profileActions';
import UpperProfilePage from './UpperProfilePage';
import LeftProfilePage from './LeftProfilePage';
import RightProfilePage from './RightProfilePage';
import Footer from './Footer';
import '../index.css';

class ProfilePage extends Component {
  async componentDidMount() {
    console.log('this.props.users: ', this.props.users);
    console.log('this.props.users[0].id: ', this.props.users[0].id);
    let authToken = this.props.auth;
    console.log('authToken: ', authToken);
// robby: fc5f6791-8046-4bd9-a197-3318b1284be4
    fetch(`${process.env.REACT_APP_BACKEND}/api/users/${this.props.users[0].id}`, {
      "headers": {
        "authorization": "Bearer "+authToken
      }
    })
      .then((res) => {
        res.json()
          .then((data) => {
            console.log('data: ', data);
            console.log('this.props: ', this.props);
            this.props.getCurrentProfile(data);
            console.log('data: ',data);
            
          })
      })
  }

  render() {
    let currentUser = this.props.users[0];
    console.log('currentUser:::: ', currentUser);
    return (
      <div className="profile-page" >

        <UpperProfilePage user={currentUser} />
        <div className="left-and-right">
          <LeftProfilePage user={currentUser} />
          <RightProfilePage userId={currentUser.id} />
        </div>
        <Footer />
      </div>
    )
  }
};

let mapStateToProps = state => ({
  users: state.users,
  auth: state.activeUserToken
});

let mapDispatchToProps = (dispatch) => {
  let getCurrentProfile = (user) => {
    dispatch(getCurrentUserProfile(user))
  };
  return { getCurrentProfile };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);