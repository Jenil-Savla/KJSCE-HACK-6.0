import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.css';
function createData(SrNo,DisasterManagementCell,Address,Telephone) {
  return { SrNo,DisasterManagementCell, Address,Telephone };
}

const rows = [
  createData('1','Central Control', 'Municipal Head Office, Main Building, First floor, Mahapalika Marg, Mumbai 400 001.', '022-22620312'),
  createData('2','Cyclone Alert ', 'Muncipal Office, Second Floor,Bhubneswar,Odisha ', '022-2222224444'),
  createData('3','Chennai Area alert', 'DRF Office, Chennai,TamilNadu', '022-333336666'),
  createData('4','Flood Control Center','12 Marg,New Delhi', '022-45673467'),
  createData('5','Earthquake Relief ','4th road, Down Town,Kutch,Gujarat', '022-34523457'),
];

export default function BasicTable() {
  return (
    <>     
    <h3>GOVERNMENT HELPLINE NUMBERS</h3>
     
    <Table stripped bordered hover variant="dark" size="sm" align="center">
      <thead>
        <tr > 
          <th width="170">SrNo</th>
          <th width="170">Name</th>
          <th width="800">Address</th>
          <th width="870">Contact</th>
         
     
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Central control</td>
          <td>Municipal Head Office, Main Building, First floor, Mahapalika Marg, Mumbai 400 001.</td>
          <td>022-22620312</td>
        
     
        </tr>
        <tr>
          <td>2</td>
          <td>Odisha disaster agency</td>
          <td>Muncipal Office, Second Floor,Bhubneswar,Odisha</td>
          <td>022-2222224444</td>
          
     
        </tr>
        <tr>
          <td>3</td>
          <td>Chennai disaster alert</td>
          <td>DRF Office, Chennai,TamilNadu</td>
          <td>022-333336666</td>
         
     
        </tr>
        <tr>
          <td>4</td>
          <td>flood control centre</td>
          <td>12 Marg,New Delhi</td>
          <td>022-45673467</td>
          
     
        </tr>
        <tr>
          <td>5</td>
          <td>Earthquake Relief</td>
          <td>4th road, Down Town,Kutch,Gujarat</td>
          <td>022-34523457</td>
          
     
        </tr>
      
     
      </tbody>
    </Table>
        </>
  );
}
