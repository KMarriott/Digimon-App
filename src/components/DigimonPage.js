import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import Digimon from './Digimon';
import EggSelect from './EggSelect'
import StatDrawer from './StatDrawer'

import './digimon_actions.css'

class DigimonPage extends Component {


  constructor(props){
    super(props)



      let greymon_check = (digimon) => {
        if(digimon.age>5000)
        return true
        else return false
      }

      let tyrannomon_check = (digimon) => {
        if(digimon.weight>10)
        return true
        else return false
      }

      let no_evolution = () => {
        return false
      }


      let greymon_json = {
        species: "Greymon",
        stage: "Adult",
        image: "https://wikimon.net/images/5/5c/Greymon_vpet_dv.gif",
        evolutions : {
          priority: [
            {name: "Greymon", data: greymon_json, check: no_evolution},
            {name: "Tyrannomon", data: tyrannomon_json, check: no_evolution}
          ]
        }
      }

      let tyrannomon_json = {
        species: "Tyrannomon",
        stage: "Adult",
        image: "https://wikimon.net/images/2/29/Tyranomon_vpet_d3.gif",
        evolutions : {
          priority: [
            {name: "Greymon", data: greymon_json, check: no_evolution},
            {name: "Tyrannomon", data: tyrannomon_json, check: no_evolution}
          ]
        }
      }



    this.state = ({
        digimon: {
          species: "Agumon",
          stage: "Child",
          image: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
          name: "Agumon",
          age: 0,
          level: 1,
          happiness: 0,
          friendship: 0,
          fullness: 50,
          weight: 0,
          energy: 50,
          evolutions: {
                    priority: [
                      {name: "Greymon", data: greymon_json, check: greymon_check},
                      {name: "Tyrannomon", data: tyrannomon_json, check: tyrannomon_check}
                    ]
                  },
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
        buttons: {
          feed: {enabled: true},
          bathe: {enabled: true},
        }
      })
  }






dimLight = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  if(this.state.digimon_state === "sleep"){
    this.setState({
      dim: false,
      message_log: new_message_log,
      message: `${digimon.name} Woke Up!`,
      digimon_state: "idle",
    })
  }
  else {
    this.setState({
      dim: true,
      message_log: new_message_log,
      message: `${digimon.name} is asleep.`,
      digimon_state: "sleep",
    })
  }




}

feed = () => {

  if(this.state.buttons.feed.enabled === true){
    let new_message_log = this.state.message_log
    new_message_log.push(this.state.message)

    let digimon = this.state.digimon
    let previous_state = this.state.digimon_state

    digimon.weight = digimon.weight+1
    digimon.friendship = digimon.friendship+1
    digimon.happiness = digimon.happiness+1
    digimon.fullness = digimon.fullness+1

    let buttons = this.state.buttons
    buttons.feed.enabled = false;

    this.setState({
      digimon: digimon,
      message_log: new_message_log,
      message: `You fed ${digimon.name}!`,
      digimon_state: "feed",
      buttons: buttons
    })

    let _this = this
    setTimeout(function() {
      buttons.feed.enabled = true;
      _this.setState({
        buttons: buttons,
        digimon_state: "idle",
        message: "Your digimon just ate began to roam about.",
      })
    }, 3000);
  }

  else{

    let new_message_log = this.state.message_log
    new_message_log.push(this.state.message)

    this.setState({
      message: "Your digimon just ate, please wait a moment!",
      message_log: new_message_log,
      digimon_state: "idle",
    })
  }



}

bathe = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon


  this.setState({
    digimon: digimon,
    message_log: new_message_log,
    message: `You cleaned up ${digimon.name}!`,
    digimon_state: "bathe"
  })


}


train = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

  this.setState({
    digimon: digimon,
    digimon_state: "train",
    message_log: new_message_log,
    message: `${digimon.name} is Training!`,
  })


}


relax = () => {
  let new_message_log = this.state.message_log
  new_message_log.push(this.state.message)

  let digimon = this.state.digimon

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

  this.setState({
    digimon: digimon,
    digimon_state: "play",
    message_log: new_message_log,
    message: `${digimon.name} is Playing!`,
  })


}



status_effect = () => {
  let digimon = this.state.digimon

  switch(this.state.digimon_state){
    case "train":
    //positive
    digimon.friendship = digimon.friendship+1
    digimon.experience = digimon.experience+5
    digimon.times_trained = digimon.times_trained+1

    //negative
    digimon.energy = digimon.energy-1
    digimon.happiness = digimon.happiness-0.5
    digimon.weight = digimon.weight-0.5
    break;
    case "play":
    //positive
    digimon.friendship = digimon.friendship+3
    digimon.happiness = digimon.happiness+3

    //negative
    digimon.energy = digimon.energy-1
    break;
    case "idle":
    //positive
    digimon.happiness = digimon.happiness+1
    digimon.energy = digimon.energy+0.5
    break;
    case "sleep":
    digimon.energy = digimon.energy+5
    break;
  }


  this.setState({
    digimon: digimon
  })

  this.evolution_check(this.state.digimon)
}



componentDidMount() {
  this.time_interval = setInterval(this.timer.bind(this), this.state.time_speed);

}

evolution_check(digimon){

  //evolution condition will be saved as an array/json, with priority
  //evolutions will be checked in priority order
  //evolution check will be saved as a function
  let check = false
  let evolution = {}

        if(digimon.evolutions.priority[0].check(digimon) === true){
          check = true;
          evolution = digimon.evolutions.priority[0].data
        }
        else if(digimon.evolutions.priority[1].check(digimon) === true){
          check = true;
          evolution = digimon.evolutions.priority[1].data
        }

if(check){
  digimon.image = evolution.image
  digimon.species = evolution.species
  digimon.stage = evolution.stage
  digimon.evolutions = evolution.evolutions

  this.setState({
    digimon: digimon
  })
}

  //check evolution condition
  //if correct, update state for new digimon.
}

timer() {


  this.status_effect()

  let update_digimon = this.state.digimon
  update_digimon.age = this.state.digimon.age+1

  if(this.state.digimon.energy<=0){
    update_digimon.care_mistakes = update_digimon.care_mistakes+1
    update_digimon.energy = 0

    this.setState({
      message: "Your digimon wore itself out and is now relaxing.",
      digimon_state : "idle",
      digimon: update_digimon,
    })
  }

  //weight is 0
  if(this.state.digimon.weight<=0){
    update_digimon.weight = 0;
    update_digimon.happiness = update_digimon.happiness-1;
  }

  if(this.state.digimon.happiness<=0){
    update_digimon.happiness = 0;
    update_digimon.friendship = update_digimon.friendship-10;
  }

  if(this.state.digimon.friendship<=0){
    update_digimon.friendship = 0;
  }

  if(this.state.digimon.energy>=100){
    update_digimon.energy = 100;
  }



  this.setState({
    digimon : update_digimon
  })


}

componentWillUnmount(){
  clearInterval(this.time_interval);
}

render() {


  return (


    <div>


    <Paper style={{'margin': '0 5% 0 5%',
    "position": "relative",
    width: "100%"}}>

    {this.state.dim ? <div style={{
      "position": "absolute",
      "width":"100%",
      "minHeight": "100%",
      "height":"auto",
      "background": "url('semitransparent1x1.png')",
      "background": "rgba(0, 0, 0, 0.8)",
      "zIndex": 100
    }} > </div> : <div></div>}


    <div style={{padding: '5%'}}>
    <div style={{
      width: "100%",
    }}><h1>{this.state.digimon.name}</h1></div>
    <div>{`Age: ${Math.round(this.state.digimon.age/10)}`}</div>
    <div>{`Experience: ${this.state.digimon.experience}`}</div>
    <div>{`Energy: ${Math.round(this.state.digimon.energy)}`}</div>
    <div>{`Weight: ${this.state.digimon.weight}g`}</div>

    <StatDrawer digimon={this.state.digimon}/>
    </div>

    <div style={{display: 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center'}}>

    <img src={this.state.digimon.image} className={this.state.digimon_state}/>

    </div>
    <div style={{ padding: '5%', height: "3vh"}}> {this.state.message}</div>

    <FlatButton label="Feed" onTouchTap = { () => {this.feed()}} />
    <FlatButton label="Bathe" onTouchTap = { () => {this.bathe()}}/>
    <br/>

    <FlatButton label="Train" onTouchTap = { () => {this.train()}}/>
    <FlatButton label="Relax" onTouchTap = { () => {this.relax()}}/>
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
