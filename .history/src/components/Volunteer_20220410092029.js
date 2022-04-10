import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function AddressForm() {
  return (
    <form>
    <div class="form-row">
    <TextField id="outlined-basic" label="first name" variant="outlined" />
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="last name" variant="outlined" />
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="Phone number" variant="outlined" />
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="email id" variant="outlined" />
    <br></br> <br></br>
    <TextField id="outlined-basic" label="Age" variant="outlined" />
    <br></br> <br></br>
    <TextField id="outlined-basic" label="Gender" variant="outlined" />
   
    
    </div>
    <br></br>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  );
}