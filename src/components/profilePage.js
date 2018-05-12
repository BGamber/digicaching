import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUserProfile } from '../actions/profileActions';
import store from '../store';
import UpperProfilePage from './UpperProfilePage';
import LeftProfilePage from './LeftProfilePage';
import RightProfilePage from './RightProfilePage';
import Footer from './Footer';
import '../index.css';

class ProfilePage extends Component {
  async componentDidMount() {
    // let itemsList = await getUserInventory();
    let uid = "096780a6-3347-410c-98d4-48db176ce9b1";

    let tempUserInfo = {
      name: 'MrUserT',
      friendsCount: 100, //indeed they do
      ranking: 18,
      score: 42444
    }

    // let profileData = this.props.setCurrentUserProfileWrapped(uid);
    fetch(`${process.env.REACT_APP_BACKEND}/api/users/${uid}`)
      .then((res) => {
        res.json()
          .then((data) => {
            console.log('data: ', data);
            console.log('this.props: ', this.props);
            this.props.setCurrentProfile(data?data:tempUserInfo)
          })
      })
  }

  render() {
    console.log('props: ', this.props);
    
    let userInfo = {
      name: 'MrUser',
      friendsCount: 99, //indeed they do
      ranking: 17,
      score: 42443
    }
    let userInventory = [{
      name: "robot body",
      id: 3,
      description: "An inanimate robot shell",
      image_url: "https://i.pinimg.com/564x/13/80/93/138093cf8d0bf3594a1f8aab166036a1.jpg"
    }, { id: 2, name: "battery", description: "A lithium battery", image_url: "https://cdn2.bigcommerce.com/server4400/ccf39/products/1423/images/5032/BR_C__18316.1368217244.1280.1280.jpg?c=2" }]
    return (
      <div className="profile-page">



        <UpperProfilePage />
        <div className="left-and-right">
          <LeftProfilePage user={userInfo} />
          <RightProfilePage userInventory={userInventory} />
        </div>
        <Footer />
      </div>
    )
  }
};

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

let mapDispatchToProps = (dispatch) => {

  let setCurrentProfile = (id) => {
    dispatch(setCurrentUserProfile(id));
  };
  return { setCurrentProfile };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);