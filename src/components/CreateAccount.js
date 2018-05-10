import React, { Component } from "react";
import BasicTemplate from "./BasicTemplate";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import setActiveUserToken from "../actions/userActions";

let mapDispatchToProps = (dispatch) => {
  let setToken = (token) => {
    dispatch(setActiveUserToken(token));
  };
  return {setToken};
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
      let url = "/auth/register";
      let post = {
        name: userName.value,
        email: email.value,
        pass: password.value
      };
      let res = await fetch(url,
        {
          method: "POST",
          body: JSON.stringify(post),
        }

      );
      let {token} = await res.json();
      this.props.setToken(token);
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
        {/* <h1>Create new account:</h1>  */}
        <div className="create-account">
          <input
            type="text"
            className="user-input2"
            placeholder='User Name'
            name="userName" required/>
          <input
            type="email"
            className="user-input2"
            placeholder='Email'
            name="email" required/>
          <input
            type="password"
            className="user-input2"
            placeholder='Password'
            name="password" required/>
          <input
            type="password"
            className="user-input2"
            placeholder='Confirm Password'
            name="confirmPassword" required/>
          {/* <input
                        type="file"
                        className="user-input-photo"
                        onChange={(event) => {
                            let file = event.target.files[0];
                            let url = URL.createObjectURL(file);
                            console.log(file)
                            this.setState({ image: url }) }} />
                        {console.log(this.state.image)}
                    <img alt="profile-img" src={this.state.image} />  */}
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
