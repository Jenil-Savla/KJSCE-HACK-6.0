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
                how to volunteer?
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
               To volunteer, navigate to volunteer page , where the user
               is required to fill in the required details to register as
               a volunteer
              
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
               How to donate ?
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
                 To donate, navigate to donate page , where the user
               is required to fill in the required details to
                donate
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
                How to lodge a missing report ?
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
               To lodge a missing report , user iis reuqired to 
               provide information about the person missing with 
               a photo of the missing person
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
              Where can you obtain the helpline numbers in case of
              an emergency ?
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
               contacts of all the disaster relief agencies have
               been added to the helpline section 
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
               What steps should i take in case of an emergency 
               due to an unexpected natural calamity
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
                All the optimal options in case of a calamity
                are listed in the precaution's section
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Questions;