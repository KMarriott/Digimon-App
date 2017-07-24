import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';
import DigimonPage from './DigimonPage';
import EggSelect from './EggSelect'
import Profile from './Profile'

class Logged_in extends Component {


  render() {



    return (


      <div>
      {this.props.page === "Profile" ? <Profile/> : ""}
      {this.props.page === "Home" ? <div><EggSelect/><DigimonPage/></div> : ""}

      </div>

    );


  }
}

export default Logged_in;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
