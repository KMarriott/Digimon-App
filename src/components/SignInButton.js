import React, { Component } from 'react';


//material-ui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';


//firebase
import firebase from '../firebase.js';

class SignInButton extends Component {

  state = {
    open: false
  }

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


   handleSignIn = () =>{
    let  this_ = this
             firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               console.log(errorCode + " " + errorMessage)
               // ...
             });

             this_.props.handleSignIn()
             this_.setState({open: false});
   }


  render() {

    const actions = [<FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
    />,

    <FlatButton
      label="Sign In"
      primary={true}
      onTouchTap={this.handleSignIn}
    />,
  ];


    return (



      <div>

      <Dialog
  title="Sign In"
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

      <RaisedButton label= "Sign In" onTouchTap={this.handleOpen}/>
      </div>

    );
  }
}

export default SignInButton;
