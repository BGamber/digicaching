import React, { Component } from 'react';
import BasicTemplate from './BasicTemplate';
import '../index.css';

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
                <form onSubmit={this.handleSubmit} className="sign-in-form">
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
                            type="submit" 
                            className="login-page-button submit-button" 
                            onClick={(event) => this.handleClick(event)}>Sign in</button>
                        {/* <p className="new-user-link">Don't have an account yet? Sign up </p> */}
                        <button 
                            className="login-page-button" 
                            onClick={() => this.props.history.push('/create-account')}>New user?</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;