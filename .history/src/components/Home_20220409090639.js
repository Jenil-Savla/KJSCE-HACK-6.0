import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css';
function Home() {
  return (
    <div>
        <h1>
            Home
            </h1>
        <div className="button">  
      <Button variant="contained" color="non-primary">Contained</Button>
      </div>
    </div>
  )
}

export default Home