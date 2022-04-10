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
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  );
}