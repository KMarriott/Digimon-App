import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';
import EggSelect from './EggSelect'

class Shop extends Component {


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
        Shop Image
        </Paper>
        </div>
        <div style={{ padding: '5%'}}>

        <RaisedButton label='Buy'/>
        <RaisedButton label='Sell'/>
        </div>


        </Paper>

      </div>

    );


  }
}

export default Shop;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
