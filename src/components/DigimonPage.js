import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';
import EggSelect from './EggSelect'


class DigimonPage extends Component {


  render() {

    return (


      <div>

        <Paper style={{'padding-bottom': '5%'}}>
        <div style={{padding: '5%'}}>
          Name - Stage - Age
        </div>
        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <img
        src="https://wikimon.net/images/2/28/Agumon_vpet_dv.gif"
        />
        </div>
        <div style={{ padding: '5%'}}>
          This is your Digimon, take good care of it!</div>
        <RaisedButton label="Feed"/>
        <RaisedButton label="Train"/>
        <RaisedButton label="Play"/>
        <br/>
        <RaisedButton label="Bathe"/>
        <RaisedButton label="Rest"/>
        <RaisedButton label="Lights"/>

        </Paper>
        <br/>
          <RaisedButton label="Stats"/>
          <RaisedButton label="Battle"/>
          <RaisedButton label="Switch"/>

      </div>

    );


  }
}

export default DigimonPage;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
