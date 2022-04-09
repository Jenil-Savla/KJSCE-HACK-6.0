/*import React from 'react'
import "./Home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="Home"
    style={{
        backgroundColor: "#21b6ae",
        padding: "0px 18px 36px",
        fontSize: "50px";
        height: "100%"
        }}>
        <h1 style={{
        backgroundColor: "#21b6ae",
        padding: "0px 18px 36px",
        fontSize: "50px"
    }}>
            Home
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
*/
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const Home = () => {
  const [light, setLight] = React.useState(true);
  return (
      <>
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev) variant="contained"}>Toggle Theme</Button>
    </ThemeProvider>
    <div className="Home"
  
        >
        <h1 style={{
        backgroundColor: "#21b6ae",
        padding: "0px 18px 36px",
        fontSize: "50px"
    }}>
            Home
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
    </>
  );
};

export default Home