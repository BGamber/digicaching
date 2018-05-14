import React, { Component } from 'react';

class UpperProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    }
  }

  render(){
    return (
      <div className="upper-profile-div">
        <img className="profile-photo" alt="profile" src={this.state.coverImage} />
        <div className="photo-choose">
          <label className="upload-profile" htmlFor="upload-photo">Choose Cover</label>
          <input type="file" name="photo" id="upload-photo" onChange={(event) => {
            let file = event.target.files[0];
            let url = URL.createObjectURL(file);
            this.setState({ coverImage: url }) }} />
        </div>
      </div>
    );
  }
};

export default UpperProfilePage;