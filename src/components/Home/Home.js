import React, { Component } from 'react';
import '../../App.css';

//material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

//components
import User from './User';
import Features from '../Features';
import Signup from './Signup';
import SignInButton from './SignInButton';
import Logged_in from './Logged_in';

//firebase
import firebase from '../firebase.js';


//Router
import { BrowserRouter, Link } from 'react-router-dom'



let database = firebase.database();


class Home extends Component {

  state = {
    page: "Home"
  };



  componentWillMount = () => {
    let _this = this

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        _this.setState({
          logged_in: true,
          user: user})

        console.log(user.uid)
      } else {
        _this.setState({
          logged_in: false,
          user: null})
      }
    });
  }



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
    let _this = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in.")

        console.log(_this.state.user)
        _this.setState(
          {logged_in: true,
          user: user}
        )

      } else {
        console.log("No user is signed in.")


      }
    });
  };

  handleSignOut = () => {
    let _this = this
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      _this.setState(
        {logged_in: false,
        user: null}
      )
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
      <Link to="/"><RaisedButton label="Home" onTouchTap={() =>{this.handle_click("Home")}}/></Link>
      <Link to="/profile"><RaisedButton label="Profile" onTouchTap={() =>{this.handle_click("Profile")}}/></Link>
      <Link to="/shop"><RaisedButton label="Shop" onTouchTap={() =>{this.handle_click("Shop")}}/></Link>
      <Link to="/messages"><RaisedButton label="Messages" onTouchTap={() =>{this.handle_click("Messages")}}/></Link>

    {  //<RaisedButton label="Explore" onTouchTap={() =>{this.handle_click("Explore")}}/>
    }
      <Link to="/admin"><RaisedButton label="Admin" onTouchTap={() =>{this.handle_click("Admin")}}/></Link>
      <Features/>


      </div>

      <div style={{display: 'flex',
      'flexDirection': 'row',
      'justifyContent': 'center'}}>


        <div style={{display: 'flex',
        'flexDirection': 'column',
        margin: '10%'}}>

        {this.state.logged_in==false ? <div>


        <div style={{display: 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center'}}>
        <img src="https://wikimon.net/images/2/28/Agumon_vpet_dv.gif"/>
        <img src="https://wikimon.net/images/7/75/Gabumon_vpet_dv.gif"/>
        <img src="https://wikimon.net/images/c/c7/Betamon_vpet_d3.gif"/>
        </div>

        <div>A place to raise your own Digimon. </div>

<div>---</div>


        <Signup/>
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



        </div> : ""
      }

<Logged_in page={this.state.page} user={this.state.user}/>

        </div>



        </div>








        </div>


      );
    }
  }

  export default Home;
