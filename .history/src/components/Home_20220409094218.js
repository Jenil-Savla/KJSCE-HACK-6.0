import React from 'react'
import "./Home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
function Home() {
  return (
    <div className="Home"
    style={{
        backgroundColor: "black",
        padding: "0px 18px 36px",
        fontSize: "50px",
        color: "#FFFFFF",

        }}>
        <h1 style={{
      
        fontSize: "50px"
    }}>
            Diasaster 
            Management
            </h1>
    <Grid direction="row" justifyContent="flex end">
   
      <Button variant="contained" style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
    }}>Contained</Button>
  
    </Grid>
    </div>
  )
}

export default Home