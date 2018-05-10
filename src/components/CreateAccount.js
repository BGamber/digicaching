import React, { Component } from 'react';
import BasicTemplate from './BasicTemplate';

class CreateAccount extends Component {
    constructor (props) {
        super(props);
        this.state = {
            image:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {userName, email, password, confirmPassword} = event.target;
        if(password.value !== confirmPassword.value){
            alert('Your passwords don\'t match')
        } else {
            let url = '/auth/register';
            let post = {
            name: userName.value,
            email: email.value,
            pass: password.value
            }
            fetch(url,
                {
                    method: 'POST',
                    body: JSON.stringify(post),
                }

            )
        }

    }



    render(){
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
                        <button
                            className="login-page-button "
                            onClick={() => this.props.history.push('/login')}>
                            Go Back</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CreateAccount;
