import React from "react";

let UpperProfilePage = (user) => {  
  return   <div className="upper-profile-div">
    <img
      className="profile-photo"
      alt={user.user[0].name + " profile image"}
      src={user.user[0].image_url ? user.user[0].image_url : "/Logo-text.png"}
    />
  </div>;
};


export default UpperProfilePage;
