import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
export default function AddressForm() {
  return (
      <div style={}>
    <React.Fragment sx={{padding:"100px" }}>
      <Typography variant="h6" gutterBottom sx={{padding:"100px" }}>
        Volunteer 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Age"
            name="Age"
            label="Age"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
      <Button variant="contained" flex="row"
              type="submit"

              fullWidth
               
              // endIcon={<ArrowRightAltIcon fontSize="large"/>}
              style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 5px",
        fontSize: "20px"
    }}>Get Started</Button>
    </React.Fragment>
    </div>
  );
}