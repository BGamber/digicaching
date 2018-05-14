import React from 'react';

let UpperProfilePage = (props) => (
    <div className="upper-profile-div">
    <img className="profile-photo" alt="profile" src={props.user.image_url} />
    <div className="photo-choose">
      <label class="upload-profile" for="upload-photo">Choose Cover</label>
      <input type="file" name="photo" id="upload-photo" onChange={(event) => {
        let file = event.target.files[0];
        let url = URL.createObjectURL(file);
        this.setState({ coverImage: url }) }} />
    </div>
  </div>
  );

export default UpperProfilePage;