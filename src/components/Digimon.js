import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

let style = {
    textAlign: 'center',
    display: 'inline-block',
}

class Digimon extends Component {
  render() {
    return (

      <Paper style= {style}>
      <img src="https://wikimon.net/images/2/28/Agumon_vpet_dv.gif"/>
      <div>Name</div>
      <div>Age</div>
      <div>Stage</div>
      <div>Love</div>
      <div>Hunger</div>

      <div>Weight</div>
      <div>Attack</div>
      <div>Defense</div>
      <div>Intelligence</div>
      <div>Speed</div>
      <div>Experience</div>

      <div>Special Experience</div>
      <div>Reincarnations</div>
      <div>Care Mistakes</div>
      <div>Trained</div>
      <div>Battles</div>
      <div>Battles for Each Stage </div>
      <div> Win percentage</div>
      <RaisedButton label="Feed" />
      <RaisedButton label="Item" />
      </Paper>

    );
  }
}

export default Digimon;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
