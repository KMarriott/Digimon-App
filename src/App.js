import React, { Component } from 'react';


import Home from './components/Home/Home.js'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {
  render() {
    return (
  <BrowserRouter>
      <MuiThemeProvider>
      <Home/>
      </MuiThemeProvider>
  </BrowserRouter>

    );
  }
}

export default App;

// Home
// Digimon
// Demesne
// Explore
// Shop
