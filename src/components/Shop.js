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
        Shop Keeper 
        </div>
        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <img src="https://wikimon.net/images/thumb/e/e6/Kurihara_hina1.jpg/171px-Kurihara_hina1.jpg"/>

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
