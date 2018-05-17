import React, { Component } from "react";
import BasicTemplate from "./BasicTemplate";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setActiveUserToken, setActiveUserID} from "../actions/userActions";
import {decode} from "jsonwebtoken";

let mapDispatchToProps = (dispatch) => {
  let setToken = (token) => {
    dispatch(setActiveUserToken(token));
  };
  let setID = (id) => {
    dispatch(setActiveUserID(id));
  };
  return {setToken, setID};
};

class CreateAccount extends Component {
  constructor (props) {
    super(props);
    this.state = {
      image:""
    };
  }
  async handleSubmit(event) {
    let prevPath;
    if (this.props.location.state) {
      prevPath = this.props.location.state.prevPath;
    }
    event.preventDefault();
    let {userName, email, password, confirmPassword} = event.target;
    if(password.value !== confirmPassword.value){
      alert("Your passwords don't match");
    } else {
      let url = `${process.env.REACT_APP_BACKEND}/auth/register`;
      let post = {
        name: userName.value,
        email: email.value,
        password: password.value
      };
      let body = JSON.stringify(post);
      let res = await fetch(url,
        {
          headers:{
            "Content-Type": "application/json"
          },
          method: "POST",
          body
        }

      );
      let {token} = await res.json();
      this.props.setToken(token);
      let {userId} = decode(token);
      this.props.setID(userId);
      if (prevPath && prevPath !== "/login" && prevPath !==
      "/create-account") {
        this.props.history.replace(prevPath);
      } else {
        this.props.history.replace("/map");
      }
    }

  }



  render(){
    let prevPath;
    if (this.props.location.state) {
      prevPath = this.props.location.state.prevPath;
    }
    return(
      <form onSubmit={(event) => this.handleSubmit(event)} className="create-new-account">
        <BasicTemplate />
        <div className="create-account">
          <input
            type="text"
            className="user-input2"
            placeholder='User Name'
            name="userName" required/>
          <input
            autoComplete="email"
            type="email"
            className="user-input2"
            placeholder='Email'
            name="email" required/>
          <input
            autoComplete="new-password"
            type="password"
            className="user-input2"
            placeholder='Password'
            name="password" required/>
          <input
            autoComplete="confirm-password"
            type="password"
            className="user-input2"
            placeholder='Confirm Password'
            name="confirmPassword" required/>
          <div className="create-profile-buttons">
            <button
              className="login-page-button submit-button"
              type="submit">Submit</button>
            <button className="login-page-button"><Link
              to={{pathname:"/login", state:{prevPath}}}
              replace>Go Back</Link></button>
          </div>
        </div>
      </form>
    );
  }
}

let connectedCreateAccount = connect(null,mapDispatchToProps)(CreateAccount);

export default connectedCreateAccount;
