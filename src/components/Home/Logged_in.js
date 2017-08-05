import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import DigimonPage from '../Digimon/DigimonPage';
import EggSelect from './EggSelect'
import Profile from '../Profile'
import Shop from '../Shop'
import MessagePage from '../MessagePage'
import Admin from '../Admin'


import { Route } from 'react-router-dom'


//firebase
import firebase from '../firebase.js';
let database = firebase.database();

class Logged_in extends Component {


constructor(props){
  super(props)

  this.state = {
    user: this.props.user
  };

  let _this = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      firebase.database()
      .ref("User/" + user.uid)
      .once('value')
      .then(function(res){
        console.log(res.val().first_egg_avaliable)
        _this.setState({first_egg_avaliable : res.val().first_egg_avaliable})
      })
    }
})
}



handle_egg_select = () => {
  console.log("OK")
  firebase.database().ref("User/" + this.state.user.uid).update({
    first_egg_avaliable: false})

    this.setState({
      first_egg_avaliable: false
    })
}



  render() {

    let user = this.props.user



    const Home = () => <div>

    {this.state.first_egg_avaliable ? <EggSelect handle_egg_select={this.handle_egg_select}/> :
    <div>
    <div style={{display: "flex",
      "flexDirection": "row",
      "justifyContent": "space-evenly"}}
    ><DigimonPage/>
    <DigimonPage/>

    </div>

        <div>*Warning, the Agumon will lose their data if you leave the page.</div>
  </div>
}
    </div>


    return (


      <div>

        <Route path="//" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/messages" component={MessagePage}/>
        <Route path="/admin" component={Admin}/>

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
