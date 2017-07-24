import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';





class Features extends Component {

  state = {
     open: false,
   };

   handleOpen = () => {
     this.setState({open: true});
   };

   handleClose = () => {
     this.setState({open: false});
   };




  render() {


    let feature_text = <div>Things to do:
    <br/>Figure out how to make an API on firebase
    <br/>Start the process of a new User
    <br/>  - log in
    <br/>  - get first digimon
    <br/>  - What page looks like at default
<br/>
<br/>
    <br/>Progression:
    <br/>Build up Demesne
    <br/>Collect different digimon forms
    <br/>Get a strong digimon.
    <br/>Collecting Milestone Items
    <br/>Achievements
<br/>
    <br/>Feature:
    <br/>Discord Integration for experience
    <br/>Admin backend for manipulating database/crud
<br/>
<br/>
    <br/>General ideas:
    <br/>Changing backgrounds for header
    <br/>Little story to follow
    <br/>
    <br/>
    <br/>Other Names:
    <br/>Digital Ward
    <br/>Digital Demesne
    <br/> Digimon Dimension


    </div>

    let actions = [
          <FlatButton
            label="Ok"
            primary={true}
            onTouchTap={this.handleClose}
          />
        ];



    return (
<div>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            {feature_text}
          </Dialog>


      <RaisedButton label="Stuff to Add" onTouchTap={this.handleOpen}/>
</div>
    );
  }
}

export default Features;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
