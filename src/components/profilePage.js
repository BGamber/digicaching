import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUserProfile } from '../actions/profileActions';
import UpperProfilePage from './UpperProfilePage';
import LeftProfilePage from './LeftProfilePage';
import RightProfilePage from './RightProfilePage';
import Footer from './Footer';
import '../index.css';

class ProfilePage extends Component {
  async componentDidMount() {
    console.log('this.props.users: ', this.props.users);
    console.log('this.props.users.id: ', this.props.users[0].id);
    // let itemsList = await getUserInventories();

    let tempUserInfo = {
      name: 'MrUserT',
      friendsCount: 100, //indeed they do
      ranking: 18,
      score: 42444
    }
    // let uid = "096780a6-3347-410c-98d4-48db176ce9b1";

    fetch(`${process.env.REACT_APP_BACKEND}/api/users/${this.props.users[0].id}`)
      .then((res) => {
        res.json()
          .then((data) => {
            console.log('data: ', data);
            console.log('this.props: ', this.props);
            this.props.setCurrentProfile(data ? data : tempUserInfo);

          })
      })
    // this.props.setCurrentProfile(uid);
  }

  render() {
    // let uid = "096780a6-3347-410c-98d4-48db176ce9b1";
    let currentUser = this.props.users;
    //   this.props.users.find(user => user.id === uid);
    // console.log('this.uid: ', uid);

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
  auth: state.auth
});

let mapDispatchToProps = (dispatch) => {
  let setCurrentProfile = (user) => {
    dispatch(setCurrentUserProfile(user))
  };
  return { setCurrentProfile };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);