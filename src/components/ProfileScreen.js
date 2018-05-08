import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../img/default_avatar.png';
import { getCurrentProfile } from '../actions/profileActions';

let avatarUrl = '../img/default_avatar.png';

let CollectionList = ({ itemsList }) => {
  let list = itemsList.map(item => <li className="collection-list-item"
  key={ item.id } >
    {item.name}: {item.description}
  </li>
  );
  return list;
};

class ProfileScreen extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    // let { user } = this.props.auth; // CHECK IF USER IS LOGGED IN
    let { profile, loading } = this.props.profile;

    let profileContent;


    if (profile === null || loading) {
      profileContent = <div>
        <h3>...Loading...</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="...loading..."/></div>
    } else {
    profileContent =  (
        <main className="user-profile">
          <header>
            <img src={avatarUrl} alt="" className="avatar" />
            <div className="user-name">
              <h2>{ this.props.user.name }</h2>
            </div>
          </header>
          <div className="collection-display">
            <h2>Collection:</h2>
            <ul>
              <CollectionList
                itemsList={[
                  'Robot Body',
                  'Battery',
                  'Robot Head'
                ]}
              />
            </ul>
          </div>
        </main>)
    }
    return <div><h3>User Profile:</h3><p>{profileContent}</p></div>  ;
  }
};

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

let mapDispatchToProps = (dispatch) => ({ getCurrentProfile });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);