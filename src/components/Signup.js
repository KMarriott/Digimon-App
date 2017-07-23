import React, { Component } from 'react';


//material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


//firebase
import firebase from '../firebase.js';

class Signup extends Component {


  state = {
      open: false,
      email: "",
      password: "",
    };


    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    emailChange = (e) => {
      this.setState({email: e.target.value})
      console.log(e.target.value)
    }
    passwordChange = (e) => {
      this.setState({password: e.target.value})
      console.log(e.target.value)
    }

    handleSignUp = () => {
      this.setState({open: false});

      console.log(`Attempted to make firebase account using ${this.state.email}`)
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        console.log(errorCode)
        let errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });


    };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    <FlatButton
      label="Sign Up"
      primary={true}
      onTouchTap={this.handleSignUp}
    />,
  ];

    return (

<div>

      <RaisedButton label="Sign Up" onTouchTap={this.handleOpen}/>
      <Dialog
  title="Sign Up"
  actions={actions}
  modal={false}
  open={this.state.open}
  onRequestClose={this.handleClose}
>
{
// <TextField
//   hintText="Username"
//   floatingLabelText="Username"
// /><br />
}


<TextField
  hintText="Email"
  floatingLabelText="Email"
  onChange={this.emailChange}
/><br />

<TextField
  hintText="Password"
  floatingLabelText="Password"
  type="password"
  onChange={this.passwordChange}
/>


</Dialog>

</div>

    );
  }
}

export default Signup;
