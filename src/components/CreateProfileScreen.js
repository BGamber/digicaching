import React, { Component } from 'react';
import { connect } from 'react-redux';

let TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  type,
  onChange
}) => {
  return (
    <div>
      <input type={type} 
      className={"form-"+name}
      />
    </div>
  )
}

class CreateProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      inventory: []
    }
  }

  render() {
    return (
      <div>
        <h2>Create Your Profile: </h2>
        
      </div>
    )
  }
}

export default connect(null)(CreateProfileScreen);