import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';


class StatDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});




  render() {
    let digimon=this.props.digimon

    let mytext = Object.keys(digimon).map(function(key) {
        if(typeof digimon[key] === "object"){
    Object.keys(digimon[key]).map(function(key2) {
      return <div> {key + " / " + key2 + " " + digimon[key][key2]} </div>
    })
}
else {

  return <div> {key + " - " + digimon[key]} </div>
}
});


    return (
      <div>
        <FlatButton
          label="Stats"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          {mytext}
        </Drawer>
      </div>
    );
  }
}



export default StatDrawer;
