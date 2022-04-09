import React from 'react'
import "./Home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
function Home() {
  return (
    <div className="Home">
        <h1 color="white">
            Home
            </h1>
    <Grid direction="row" justifyContent="flex end">
   
      <Button variant="contained">Contained</Button>
  
    </Grid>
            </div>
  )
}

export default Home