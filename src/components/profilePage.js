import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUserProfile, setCurrentUser } from '../actions/profileActions';
import store from '../store';
import UpperProfilePage from './UpperProfilePage';
import LeftProfilePage from './LeftProfilePage';
import RightProfilePage from './RightProfilePage';
import Footer from './Footer';
import '../index.css';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

  render(){
    let user = {
      name:'MrUser',
      friendsCount:99,
      ranking:17,
      score:42443
    }
    return(
      <div className="profile-page">
        


        <UpperProfilePage/>
        <div className="left-and-right">
        <LeftProfilePage user={user}  />
        <RightProfilePage />
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

let mapDispatchToProps = (dispatch) => ({ setCurrentUserProfile });

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);