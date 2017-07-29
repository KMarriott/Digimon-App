import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';
import EggSelect from './EggSelect'
import StatDrawer from './StatDrawer'

import './digimon_actions.css'

class DigimonPage extends Component {

  state = {
    digimon: {
    species: "Agumon",
    stage: "Child",
    image: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
    name: "Agumon",
    age: 0,
    happiness: 0,
    friendship: 0,
    fullness: 0,
    weight: 0,
    energy: 0,
    battle_stats: {
      attack: 0,
      defense: 0,
      intelligence: 0,
      speed: 0
    },
    experience: 0,
    special_experience: {
      dragon: 0,
      beast: 0,
      insect: 0,
      plant: 0,
      machine: 0,
      aqua: 0,
      bird: 0,
     holy: 0,
     dark: 0
   },
   care_mistakes: 0,
   times_trained: 0,
   battles: {
     baby: 0,
     baby_ii: 0,
     child: 0,
     adult: 0,
     perfect: 0,
     ultimate: 0
   },
   win_percentage: 0,
   reincarnation: 0
  },
  message: "This is your Digimon, take good care of it!",
  message_log: [],
  digimon_state: "idle",
  time_speed: 1000,
  dim: false,
}




dimLight = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

this.setState({
  dim: !this.state.dim,
  message_log: new_message_log,
  message: `${digimon.name} is asleep.`,
  digimon_state: "sleep",
})

}

feed = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  digimon.weight = digimon.weight+1,
  digimon.friendship = digimon.friendship+1,
  digimon.happiness = digimon.happiness+1,
  digimon.fullness = digimon.fullness+1,


  this.setState({
    digimon: digimon,
      message_log: new_message_log,
      message: `You fed ${digimon.name}!`,
  })

}

bathe = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon


  this.setState({
    digimon: digimon,
      message_log: new_message_log,
      message: `You cleaned up ${digimon.name}!`,
  })

}


train = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  digimon.friendship = digimon.friendship+1,
  digimon.experience = digimon.experience++,
  digimon.energy = digimon.energy-1,

  this.setState({
    digimon: digimon,
    digimon_state: "train",
      message_log: new_message_log,
      message: `${digimon.name} is Training!`,
  })

}

rest = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  digimon.friendship = digimon.friendship+1,
  digimon.happiness = digimon.happiness+1,
  digimon.energy = digimon.energy+1,

  this.setState({
    digimon: digimon,
    digimon_state: "idle",
      message_log: new_message_log,
      message: `${digimon.name} is Relaxing.`,
  })

}


play = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  digimon.friendship = digimon.friendship+2,
  digimon.happiness = digimon.happiness+2,
  digimon.energy = digimon.energy-1,

  this.setState({
    digimon: digimon,
    digimon_state: "play",
      message_log: new_message_log,
      message: `${digimon.name} is Playing!`,
  })

}



componentDidMount() {
    this.time_interval = setInterval(this.timer, this.state.time_speed);
}

timer() {
    console.log("ok")
}

componentWillUnmount(){
    clearInterval(this.time_interval);
}


  render() {


    return (


      <div>
      {this.state.dim ? <div style={{
          "position":"fixed",
          "top":0,
          "left":0,
          "width":"100%",
          "minHeight": "100%",
          "height":"auto",
          "background": "url('semitransparent1x1.png')",
          "background": "rgba(0, 0, 0, 0.8)",
          "zIndex": 100,
      }} > </div> : ""}

        <Paper style={{'padding-bottom': '5%'}}>

        <div style={{padding: '5%'}}>
          <div>{this.state.digimon.name}</div>
          <div>{`Stage: ${this.state.digimon.stage}`}</div>
          <div>{`Age: ${this.state.digimon.age}`}</div>

          <StatDrawer digimon={this.state.digimon}/>

          <FlatButton label="Battle"/>
          <FlatButton label="Switch"/>

        </div>

        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>

        <img src={this.state.digimon.image} className={this.state.digimon_state}/>

        </div>
        <div style={{ padding: '5%'}}> {this.state.message}</div>

        <FlatButton label="Feed" onTouchTap = { () => {this.feed()}} />
        <FlatButton label="Bathe" onTouchTap = { () => {this.bathe()}}/>
        <br/>

        <FlatButton label="Train" onTouchTap = { () => {this.train()}}/>
        <FlatButton label="Rest" onTouchTap = { () => {this.rest()}}/>
        <FlatButton label="Play" onTouchTap = { () => {this.play()}}/>
        <br/>



        <FlatButton label="Lights" style = {{zIndex: 101}} onTouchTap = { () => {this.dimLight()} }/>

        </Paper>



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
