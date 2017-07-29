import React, { Component } from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// var database = firebase.database();

class Admin extends Component {
  render() {
    return (
      <div>


<div>Welcome to the Admin Page</div>


{
      // <Table>
      //   <TableHeader>
      //     <TableRow>
      //       <TableHeaderColumn>ID</TableHeaderColumn>
      //       <TableHeaderColumn>Name</TableHeaderColumn>
      //       <TableHeaderColumn>Status</TableHeaderColumn>
      //     </TableRow>
      //   </TableHeader>
      //   <TableBody>
      //     <TableRow>
      //       <TableRowColumn>1</TableRowColumn>
      //       <TableRowColumn>John Smith</TableRowColumn>
      //       <TableRowColumn>Employed</TableRowColumn>
      //     </TableRow>
      //     <TableRow>
      //       <TableRowColumn>2</TableRowColumn>
      //       <TableRowColumn>Randal White</TableRowColumn>
      //       <TableRowColumn>Unemployed</TableRowColumn>
      //     </TableRow>
      //   </TableBody>
      // </Table>
    }
      <RaisedButton label="Add Digimon"/>
      <RaisedButton label="View Digimon"/>
      <div>
      <RaisedButton label="Update Digimon"/>
      <RaisedButton label="Add Evolutions"/>
      </div>
      </div>

    );
  }
}

export default Admin;
