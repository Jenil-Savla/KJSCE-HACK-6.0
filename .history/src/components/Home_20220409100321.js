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
        padding: "1px 100px 100px",
        fontSize: "50px",
        color: "#FFFFFF",
        height: "100vh",
        
        }}>
        <h1 style={{
        padding: "1px 100px 100px",
        fontSize: "50px"
    }}>
            Disaster 
            Management
            </h1>
    <Grid direction="row" justifyContent="flex end">
   
      <Button variant="contained" flex="row"style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
    }}>Get Started</Button>
  
    </Grid>
    </div>
  )
}

export default Home