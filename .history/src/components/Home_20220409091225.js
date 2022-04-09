import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
        <h1>
            Home
            </h1>
    <Stack spacing={2} direction="row" justify="center">
   
      <Button variant="contained">Contained</Button>
  
    </Stack>
            </div>
  )
}

export default Home