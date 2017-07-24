import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

//material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

//components
import Digimon from './Digimon';
import User from './User';
import Features from './Features';
import Signup from './Signup';
import SignInButton from './SignInButton';
import Logged_in from './Logged_in';

//firebase
import firebase from '../firebase.js';

class Home extends Component {

  state = {
    user: null,
    logged_in: true,
    page: "Home"
  };

  handle_click = (page) => {
    this.setState(
      {page: page}
    )
  }

  handle_log_in = () => {
    this.setState(
      {logged_in: true}
    )
  }

  handle_log_out = () => {
    this.setState(
      {logged_in: false}
    )
  }
  handleSignIn = () => {
    let this_ = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in.")
        this_.setState({user: user});
        console.log(this_.state.user)
        this_.handle_log_in()

      } else {
        console.log("No user is signed in.")


      }
    });
  };

  handleSignOut = () => {
    let this_ = this
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      this_.setState({user: null});
      this_.handle_log_out()
      console.log("Sign out success")


    }).catch(function(error) {
      // An error happened.
    });
  };



  render() {
    return (

      <div className="App">
      <div className="App-header">
      <img src="http://orig00.deviantart.net/1b37/f/2011/060/7/8/crest_of_courage_base_by_alijameel-d3aozba.png"  className="App-logo" alt="logo" />
      <h2>Digital Domain</h2>
      <RaisedButton label="Home" onTouchTap={() =>{this.handle_click("Home")}}/>
      <RaisedButton label="Profile" onTouchTap={() =>{this.handle_click("Profile")}}/>
      <RaisedButton label="Shop" onTouchTap={() =>{this.handle_click("Shop")}}/>
      <RaisedButton label="Messages" onTouchTap={() =>{this.handle_click("Messages")}}/>

    {  //<RaisedButton label="Explore" onTouchTap={() =>{this.handle_click("Explore")}}/>
    }
      <RaisedButton label="Admin" onTouchTap={() =>{this.handle_click("Admin")}}/>
      <Features/>
      {this.state.logged_in ?
        <div>
        <RaisedButton
        label= "Sign Out"
        onTouchTap={this.handleSignOut}/>
        </div>
        :
        <SignInButton
        user= {this.state.user}
        handleSignIn={this.handleSignIn}/>
      }

      </div>
{
      <div style={{display: 'flex',
      'flexDirection': 'row',
      'justifyContent': 'center'}}>

      {this.state.user ?
        <div style={{display: 'flex',
        'flexDirection': 'column',
        width: '20%',
        margin: 'auto 5%'}}>

        <User/>
        <Digimon/>

        </div>
        : "" }

        <div style={{display: 'flex',
        'flexDirection': 'column',
        margin: '10%'}}>

        {!this.state.logged_in ? <div>


        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <img src="https://wikimon.net/images/2/28/Agumon_vpet_dv.gif"/>
        <img src="https://wikimon.net/images/7/75/Gabumon_vpet_dv.gif"/>
        <img src="https://wikimon.net/images/c/c7/Betamon_vpet_d3.gif"/>
        </div>

        <div>A place to raise your own Digimon. </div>
        <div>Coming Soon! </div>


        <Signup/>



        </div> : ""
      }


        {this.state.logged_in ? <Logged_in page={this.state.page}/> : ""}




        </div>


        </div>
      }







        </div>


      );
    }
  }

  export default Home;
