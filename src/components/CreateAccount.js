import React, { Component } from 'react';
import BasicTemplate from './BasicTemplate';

class CreateAccount extends Component {
    constructor (props) {
        super(props);
        this.state = {
            image:''
        }
    }

    render(){
        return(
            <div className="">
                <BasicTemplate />
                <h1>Create new account:</h1> 
                <input 
                    type="text"
                    className="user-input"  
                    placeholder='User Name' required/>
                <input
                    type="text" 
                    className="user-input"  
                    placeholder='Email' required/>
                <input 
                    type="text"
                    className="user-input"  
                    placeholder='Password' required/>
                <input 
                    type="text"
                    className="user-input"  
                    placeholder='Confirm-Password' required/>
                <input 
                    type="file"
                    className="user-input"
                    onChange={(event) => {
                        let file = event.target.files[0];
                        let url = URL.createObjectURL(file);
                        // console.log(file) 
                        this.setState({ image: url }) }} />
                    {/* {console.log(this.state.image)} */}
                    <img alt="profile-img" src={this.state.image} /> 
            </div>
        )
    }
}

export default CreateAccount;