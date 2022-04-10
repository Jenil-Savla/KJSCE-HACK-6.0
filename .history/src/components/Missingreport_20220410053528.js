import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { server } from "./Server";
import Axios from "axios";
function Missingreport (){

//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         this.setState({ profileImg: reader.result });
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };
{
    const handleSubmit = async () => {
        let bodyData = new FormData();
        bodyData.append("first_name", fname);
        bodyData.append("last_name", lname);
        bodyData.append("email", email);
        bodyData.append("gender", gender);
        bodyData.append("description", description);
        bodyData.append("phone", phone.toString());
        bodyData.append("age", age.toString());
        bodyData.append("disaster", 1);
        const data = await Axios({
            url: `${server}/api/report`,
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            data: bodyData,
        }).then((res) => {
            return res;
        });
    };
    };

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const addReport = async () => {
   
    let bodyData = new FormData();
    bodyData.append("first_name", fname);
    bodyData.append("last_name", lname);
    bodyData.append("email", email);
    bodyData.append("gender", gender);
    bodyData.append("description", description);
    bodyData.append("phone", phone.toString());
    bodyData.append("age", age.toString());
    bodyData.append("disaster", 1);
    const data = await Axios({
        url: `${server}/api/report`,
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        data: bodyData,
    }).then((res) => {
        return res;
    });

};
    return (
     <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Missing Person Report
          </Typography>
           <Box component="form" noValidate sx={{ mt: 3 }}> 
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fname}
                  autoFocus
                  onChange={(e)=>setFname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  value={lname}
                  autoFocus
                  onChange={(e)=>setLname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  value={age}
                  autoFocus
                  onChange={(e)=>setAge(e.target.value)}
                />
              </Grid>
                            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  value={gender}
                  autoComplete="family-name"
                  onChange={(e)=>setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={phone}
                  autoComplete="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  
                  label="Description"
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={addReport}
            >
              Report
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
       
      </Container>
  
    


    );

  }


export default Missingreport;
};