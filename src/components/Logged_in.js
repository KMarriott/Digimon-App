import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';

class Logged_in extends Component {


  render() {

    return (


      <div>





        <Paper >
        <div>Name</div>
        <br/>
        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <img
        src="https://wikimon.net/images/2/28/Agumon_vpet_dv.gif"
        />
        </div>
        <div>This is your Digimon, take care of it!</div>
<br/>
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
          <Digimon/>

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
