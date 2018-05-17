import React, { Component } from "react";
import BasicTemplate from "./BasicTemplate";
import "../index.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
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

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      email: "",
      Password:""
    };
  }
  submitLogin(){
    let baseUrl = `${process.env.REACT_APP_BACKEND}/auth/login`;
    let payload = {
      "email": this.state.email,
      "password": this.state.password
    };
    let prevPath;
    if (this.props.location.state) {
      prevPath = this.props.location.state.prevPath;
    }
    fetch(baseUrl, {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(({token}) => {
            this.props.setToken(token);
            let {userId} = decode(token);
            this.props.setID(userId);
            if (prevPath && prevPath !== "/login" && prevPath !==
            "/create-account") {
              this.props.history.replace(prevPath);
            } else {
              this.props.history.replace("/map");
            }
          });
        }
      })
      .catch(error => {
        console.trace(error);
      });
  }
  render() {
    let prevPath;
    if (this.props.location.state) {
      prevPath = this.props.location.state.prevPath;
    }
    return(
      <div className="main-login">
        <BasicTemplate />
        <form className="sign-in-form" onSubmit={(event) => {
          event.preventDefault();
          this.submitLogin()
        }}>
          <div className="login-input">
            <input
              autoComplete="email"
              type="email"
              className="user-input"
              placeholder='Email'
              success="right" required
              onChange={(event) => this.setState({ email: event.target.value })}/>
            <input
              autoComplete="current-password"
              type="password"
              className="user-input"
              placeholder="Password"
              success="right" required
              onChange={(event) => this.setState({ password: event.target.value })}/>
          </div>
          <div className="login-buttons">
            <button
              type="submit"
              className="login-page-button submit-button">
              Sign In</button>
            {/* <p className="new-user-link">Don't have an account yet? Sign up </p> */}
            <button className="login-page-button"><Link
              to={{pathname:"/create-account", state:{prevPath}}}
              replace>Create Account</Link></button>
          </div>
        </form>
      </div>
    );
  }
}

let connectedLoginPage = connect(null, mapDispatchToProps)(LoginPage);

export default connectedLoginPage;
