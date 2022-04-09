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
        backgroundColor: "#001522",
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