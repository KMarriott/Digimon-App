import React, { Component } from 'react';

import Paper from 'material-ui/Paper';


class EggSelect extends Component {


  render() {

    return (


      <div style={{padding: '5%'}}>

      <Paper style={{margin: '5%'}}>

      <div style={{display: 'flex',
      'flexDirection': 'row',
      'justifyContent': 'center',
      padding: '5%'}}>
      <img
      src="https://sites.google.com/site/digimonunlimitedwiki/_/rsrc/1369591394956/eggs-and-evolution-charts/Nature%20Spirits.jpg"
       onTouchTap={() =>{this.props.handle_egg_select()}}/>
      <img
      src="https://sites.google.com/site/digimonunlimitedwiki/_/rsrc/1369591406522/eggs-and-evolution-charts/Deep%20Savers.jpg"
       onTouchTap={() =>{this.props.handle_egg_select()}}/>
      <img
      src="https://sites.google.com/site/digimonunlimitedwiki/_/rsrc/1369591510340/eggs-and-evolution-charts/Dark%20Area.jpg"
       onTouchTap={() =>{this.props.handle_egg_select()}}/>
      </div>
      <div style={{ padding: '5%'}}>
        Please Select an Egg!</div>

      </Paper>

      </div>

    );


  }
}

export default EggSelect;

// Home
// Digimon
// Demesne
// Forum
// Explore
// Shop


//Things
