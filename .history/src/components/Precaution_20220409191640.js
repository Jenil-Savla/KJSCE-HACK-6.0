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
          <h2 className="guidelineHeading">Guidelines</h2>
        </div>
        <Grid container columnSpacing={1} rowSpacing={8}>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">01</span>
              <br />
              <p className="guideContain">Registration will be done through Devfolio. All teams must also submit their team for review.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">02</span>
              <br />
              <p className="guideContain">Each team should contain 2-4 members.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">03</span>
              <br />
              <p className="guideContain">Teams will be shortlisted on the basis of their Devfolio profile.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">04</span>
              <br />
              <p className="guideContain">Every shortlisted team must RSVP on Devfolio for their team to participate in the hackathon.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">05</span>
              <br />
              <p className="guideContain">Each team should provide the new GitHub link of their project at the start of the hackathon.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">06</span>
              <br />
              <p className="guideContain">No commits should be made after the event completion.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">07</span>
              <br />
              <p className="guideContain">Problem statement will be released prior to the event and teams have to work on only one PS.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">08</span>
              <br />
              <p className="guideContain">Plagiarism/clones of the project are strictly prohibited.</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <div data-aos="fade-up" className="guidelines">
              <span className="guideNumber">09</span>
              <br />
              <p className="guideContain">Mentoring and assistance will be provided during the hackathon.</p>
            </div>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}

export default Precautions;