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
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <br></br>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  );
}