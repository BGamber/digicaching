import React from "react";

let UpperProfilePage = (user) => {
  return   <div className="upper-profile-div">
    <img
      className="profile-photo"
      // alt={user.user.name + " profile image"}
      src={user.user ? user.user.image_url : "/Logo-text.png"}
    />
  </div>}
;

export default UpperProfilePage;
