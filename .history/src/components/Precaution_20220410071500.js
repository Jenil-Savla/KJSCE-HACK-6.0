import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./Question.css";
function Precaution() {

  const [rule, setRule] = useState([{ id: 0, desc: '' }])

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://djacmdev.pythonanywhere.com/api/guideline/", requestOptions)
      .then(response => response.json())
      .then(result => {
        setRule(result)
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div id="Guidelines" className='mobileview' style={{ color: "black", backgroundColor: "#001522", padding: '0 8%', marginBottom: '4%' }}>

      <center>
        <div data-aos="fade-right">
          <h2 className="guidelineHeading">Precautions</h2>
        </div>
        <Grid container columnSpacing={1} rowSpacing={8}>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">01</span>
              <br />
              <p className="guideContain">Identify potential hazards in your home and start to identify them</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">02</span>
              <br />
              <p className="guideContain">Create a disaster preparedness plan</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">03</span>
              <br />
              <p className="guideContain">Create disaster kits</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">04</span>
              <br />
              <p className="guideContain">Identify your building's potential weaknesses and begin to fix them</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">05</span>
              <br />
              <p className="guideContain">After the calamity,check for injuries and damage</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">06</span>
              <br />
              <p className="guideContain">When safe,continue to follow your disaster-preparedness plan</p>
            </div>
          </Grid>
          
        </Grid>
      </center>
    </div>
  );
}

export default Precaution;