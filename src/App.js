import React, { Component } from 'react';


import Home from './components/Home.js'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import { Router, Route, Switch } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
      <Home/>
      </MuiThemeProvider>

    );
  }
}

export default App;

// Home
// Digimon
// Demesne
// Explore
// Shop
