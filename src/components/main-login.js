import React, { Component } from "react";
import BasicTemplate from "./BasicTemplate";
import "../index.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

let dispatchToProps = (dispatch)

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      email: "",
      Password:""
    };
  }
  submitLogin(){
    console.log("Hello");
    let baseUrl = "auth/login";
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
            localStorage.setItem("jwt", token);
            if (prevPath) {
              this.props.history.replace(prevPath);
            } else {
              this.props.history.replace("/map");
            }
          });
        }
      })
      .catch(error => {
        console.log(error);
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
        <form className="sign-in-form">
          <div className="login-input">
            <input
              type="email"
              className="user-input"
              placeholder='Email'
              success="right" required
              onChange={(event) => this.setState({ email: event.target.value })}/>
            <input
              type="password"
              className="user-input"
              placeholder="Password"
              success="right" required
              onChange={(event) => this.setState({ password: event.target.value })}/>
          </div>
          <div className="login-buttons">
            <button
              type="button"
              className="login-page-button submit-button"
              onClick={() => this.submitLogin()}>Sign In</button>
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



export default LoginPage;
