// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';

// // function TabPanel(props) {
// //   const { children, value, index, ...other } = props;

// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`simple-tabpanel-${index}`}
// //       aria-labelledby={`simple-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box sx={{ p: 3 }}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // TabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.number.isRequired,
// //   value: PropTypes.number.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `simple-tab-${index}`,
// //     'aria-controls': `simple-tabpanel-${index}`,
// //   };
// // }

// // export default function BasicTabs() {
// //   const [value, setValue] = React.useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <Box sx={{ width: '100%' }}>
// //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
// //           <Tab label="Flood" {...a11yProps(0)} />
// //           <Tab label="Item Two" {...a11yProps(1)} />
// //           <Tab label="Item Three" {...a11yProps(2)} />
// //         </Tabs>
// //       </Box>
// //       <TabPanel value={value} index={0}>
// //      <h2 align="left">01	Keep the drainage system of your house clean and out of any blockage.</h2>
// //      <h2 align="left">02	Unplug electrical gadgets and machinery and keep away from the reach of water.</h2>
// //      <h2 align="left">03	Store enough food and drinking water with you.</h2>
// //      <h2 align="left">04	Turn off gas valves and connected devices.</h2>
// //      <h2 align="left">05	Move family and pets in the safe zone.</h2>

// //       </TabPanel>
// //       <TabPanel value={value} index={1}>
// //         Item Two
// //       </TabPanel>
// //       <TabPanel value={value} index={2}>
// //         Item Three
// //       </TabPanel>
// //     </Box>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import "./Question.css"
// function Questions() {

//   const [rule, setRule] = useState([{ id: 0, desc: '' }])

// //   useEffect(() => {

// //     var myHeaders = new Headers();
// //     myHeaders.append("Cookie", "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump");

// //     var requestOptions = {
// //       method: 'GET',
// //       headers: myHeaders,
// //       redirect: 'follow'
// //     };

// //     fetch("https://djacmdev.pythonanywhere.com/api/guideline/", requestOptions)
// //       .then(response => response.json())
// //       .then(result => {
// //         setRule(result)
// //       })
// //       .catch(error => console.log('error', error));
// //   }, [])

//   return (
//     <div id="Guidelines" className='mobileview' style={{ color: "black", backgroundColor: "#001522", padding: '0 8%', marginBottom: '4%' }}>

//       <center>
//         <div data-aos="fade-right">
//           <h2 className="guidelineHeading">Precautions</h2>
//         </div>
//         <Grid container columnSpacing={1} rowSpacing={8}>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">01</span>
//               <br />
//               <p className="guideContain">Registration will be done through Devfolio. All teams must also submit their team for review.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">02</span>
//               <br />
//               <p className="guideContain">Each team should contain 2-4 members.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">03</span>
//               <br />
//               <p className="guideContain">Teams will be shortlisted on the basis of their Devfolio profile.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">04</span>
//               <br />
//               <p className="guideContain">Every shortlisted team must RSVP on Devfolio for their team to participate in the hackathon.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">05</span>
//               <br />
//               <p className="guideContain">Each team should provide the new GitHub link of their project at the start of the hackathon.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">06</span>
//               <br />
//               <p className="guideContain">No commits should be made after the event completion.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">07</span>
//               <br />
//               <p className="guideContain">Problem statement will be released prior to the event and teams have to work on only one PS.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">08</span>
//               <br />
//               <p className="guideContain">Plagiarism/clones of the project are strictly prohibited.</p>
//             </div>
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12} >
//             <div data-aos="fade-up" className="guidelines">
//               <span className="guideNumber">09</span>
//               <br />
//               <p className="guideContain">Mentoring and assistance will be provided during the hackathon.</p>
//             </div>
//           </Grid>
//         </Grid>
//       </center>
//     </div>
//   );
// }

// export default Questions;

import React from "react";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {BsChevronDown} from "react-icons/bs";
//import {Link} from "react-scroll";
import "./Question.css";

function Questions() {
  const Accordion = styled(props => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({theme}) => ({
    borderBottom: `1px solid #16bdff`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  return (
    <div
      id="FAQS"
      className="mobileview"
      style={{
        color: "black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      <h1
        style={{color: "white", fontFamily: "Righteous", padding: "0 2% 0 2%"}}
        data-aos="fade-right"
      >
        {" "}
        Frequently Asked Questions{" "}
      </h1>
      <h3
        style={{
          fontFamily: "montserrat",
          color: "white",
          fontWeight: "500",
          padding: "0% 4% 2% 4%",
        }}
      >
        {" "}
        Can&#39;t find the answers to what you are looking for?{" "}
        {/* <Link
          spy={true}
          smooth={true}
          to="Contact Us"
          style={{color: "#FF8A50", padding: "5px", cursor: "pointer"}}
        >
          {" "}
          Reach out to our Team{" "}
        </Link>{" "} */}
      </h3>
      <div style={{width: "80%", paddingBottom: "5%", paddingTop: "2%"}}>
        <div data-aos="fade-up">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                What is a hackathon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                }}
              >
                A hackathon is a social coding event where programmers,
                designers and developers collaborate to solve a problem and
                compete for prizes.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                What are the problem statements for the hackathon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                The problem statements will be declared soon. Once you&#39;ve
                registered we&#39;ll keep you posted with all details.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                What will be the mode and location of the hackathon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                LoC 4.0 will be conducted in hybrid mode. Primarily held offline
                at SVKM's Dwarkadas J. Sanghvi College of Engineering campus,
                Vile Parla, Mumbai, India; with an online presence on Discord,
                being live braodcasted to participants attending online from
                throughout the world.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                What are the eligibility criteria? Are there any prerequisites?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                This competition is open to all university students so do send
                in your application to attend ! While experience in programming
                and software development is beneficial, this can be a great
                opportunity to network and learn.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
                variant="h6"
              >
                How many members are allowed in one team for this Hackathon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                LoC allows 2 to 4 members per team.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
                variant="h6"
              >
                How much does this cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                LoC is FREE for all participants if your team is selected!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div data-aos="fade-up">
          <Accordion style={{paddingBlock: "2%"}}>
            <AccordionSummary
              expandIcon={
                <BsChevronDown style={{color: "#16bdff", padding: "5px"}} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                Can I start working on my submission before the event or use
                something that I have built previously?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat",
                  color: "white",
                }}
              >
                The submission for LoC has to be made during the duration of the
                event in its entirety. Using prior work can lead to
                disqualification.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Questions;