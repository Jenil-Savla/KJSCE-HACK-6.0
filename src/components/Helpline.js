import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, padding:"40px 10px",align:"center" }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Sr No.</TableCell>
            <TableCell>Disaster Management Cell</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Telephone</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.DisasterManagementCell}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
              <TableCell align="right">{row.Telephone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
