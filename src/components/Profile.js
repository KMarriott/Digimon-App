import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Profile extends Component {


  render() {

    return (


      <div>

        <Paper style={{'padding-bottom': '5%'}}>
        <div style={{padding: '5%'}}>
        Username
        </div>
        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <Paper circle={true} style={{'height': '10vh'}}>
        Profile Image
        </Paper>
        </div>
        <div style={{ padding: '5%'}}>
        <div>Bits</div>
        <div>Active Digimon</div>
        <RaisedButton label='Collected Digimon'/>
        <RaisedButton label='Achievements'/>
        </div>

        <div>
        <h3>Comments</h3>
<Paper style={{padding: '5%'}}>Comment Text</Paper>
<Paper style={{padding: '5%'}}>Comment Text</Paper>
        </div>

        </Paper>

      </div>

    );


  }
}

export default Profile;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
