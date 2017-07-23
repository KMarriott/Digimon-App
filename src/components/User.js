import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

let style = {
    textAlign: 'center',
    display: 'inline-block',
}

let circle = {
  height: 100,
  width: 100,
  margin: 20,

  display: 'inline-block',
}

class User extends Component {
  render() {
    return (

      <Paper style= {style}>
      <Paper circle={true} style={circle}>  </Paper>
      <div>Username</div>
      <div>Bits</div>
      <RaisedButton label="Inventory" />
      </Paper>

    );
  }
}

export default User;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop
