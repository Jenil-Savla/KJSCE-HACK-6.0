// import React, { Component } from "react";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect , useContext } from "react";
import axios from "axios";
import {
  TextField,
  makeStyles,
  
} from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import useMeasure from 'react-use-measure'

function MyBlog() {
    const [image, setSelectedFile] = useState(null);
    const [load, setLoadImage] = useState([]);
    const [title, setName] = useState("");
    const [description, setDesc] = useState("");
  
    const [open, toggle] = useState(false)
    const [ref, { width }] = useMeasure()
    const props = useSpring({ width: open ? width : 0 })
  
    const handleSubmission = async (e) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
    
  
    };
  state = {};
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  
  render() {
    const { profileImg } = this.state;
    return (

        <div  className={classes.root}>
     
     
        

         <div  className={classes.mainContainer}>
            <div class="form-group ml-3"> 
            <TextField 
              autoFocus = "1"
               className = {classes.inputbox}
               label="Title"
               required
               variant="outlined" 
               name="title"
               value={title}
               onChange={(e)=>setName(e.target.value)}
             />
            </div>
           
 
         
             <div class="form-group">
             <TextField 
               className = {classes.inputbox}
               label="Description"
               required
               variant="outlined" 
               name="Description"
               value={description}
               onChange={(e)=>setDesc(e.target.value)}
             />
            </div>
          
           
             <div class="form-group">
             <TextField 
               className = {classes.inputbox}
               type="file"
               required
               variant="outlined" 
               name="Image"
               onChange={(e)=>setSelectedFile(e.target.files[0])}
             />
             </div>
          
 
           
            
             <div className={styles.container}>
              <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
              <animated.div className={styles.fill} style={props} />
              <animated.div className={styles.content} onClick={handleSubmission}> Post the blog </animated.div>
              </div>
            </div>
          </div>
           
        
      
          <div className={classes.mainContainer} style={{marginTop:"20px" ,marginLeft:"10px" ,marginBottom:"30px"}}>
              <Grid container spacing={4}>
                
                  {load.map((name) => ( 
                    <Grid item md={3}>
                <Card sx={{ width: 250 }}>
                <Typography gutterBottom variant="h5" component="div" style={{marginLeft:"20px"}}>{name.id}</Typography>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  src={"https://dhirajssh.pythonanywhere.com/" + name.image}
                />
                <CardContent>
               
                  <Typography gutterBottom variant="h5" component="div" >
                   {name.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {name.description}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button  onClick={() => deleteImage(name.id)} style={{color:"red" , borderColor:"red"}} variant="h3"> Delete</Button>
                  <Button size="small"><Link to ={`/Edit/${name.id}`} style={{textDecoration:"none" , color:"blue"}}>Edit</Link></Button>
                </CardActions>
                </Card>
                </Grid>
                ))}
                
              </Grid>
              
         
        </div>
      
      </div>

    );

  }
}

export default Missingreport;
