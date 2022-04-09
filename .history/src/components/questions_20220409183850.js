// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Flood" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//      <h2 align="left">01	Keep the drainage system of your house clean and out of any blockage.</h2>
//      <h2 align="left">02	Unplug electrical gadgets and machinery and keep away from the reach of water.</h2>
//      <h2 align="left">03	Store enough food and drinking water with you.</h2>
//      <h2 align="left">04	Turn off gas valves and connected devices.</h2>
//      <h2 align="left">05	Move family and pets in the safe zone.</h2>

//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
//import "./Loc.css"
function Questions() {

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

export default Questions;