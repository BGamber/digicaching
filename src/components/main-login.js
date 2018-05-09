import React, { Component } from 'react';
// import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import BasicTemplate from './BasicTemplate';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            Password:'',
            isLoggedIn: null
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleClick = e => {
        let baseUrl = 'http://localhost:5000/login'
        let payload = {
            'email': this.state.email,
            'password': this.state.password
        }
        fetch(baseUrl, {
            body: JSON.stringify(payload),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.text().then(res => {
                        localStorage.setItem('jwt', res)
                        this.setState({ isLoggedIn: true })
                        this.props.history.push('/main/profile')
                    })
                } else {
                    this.setState({ isLoggedIn: false })
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div className="main-login">
                <BasicTemplate />
                <h2>Sign in</h2>
                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <input 
                        type="email" 
                        className="user-input" 
                        placeholder='Email' 
                        validate error="wrong" 
                        success="right" required
                        onChange={(event) => this.setState({ email: event.target.value })}/>
                    <input 
                        type="password"
                        className="user-input"  
                        placeholder="Password"
                        validate error="wrong" 
                        success="right" required
                        onChange={(event) => this.setState({ password: event.target.value })}/>
                    <button 
                        type="submit" 
                        className="Login-page-button" 
                        onClick={(event) => this.handleClick(event)}>Sign in</button>
                    <h2>New player</h2>
                    <button 
                        className="Login-page-button" 
                        onClick={() => this.props.history.push('/create-account')}>Create account</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;