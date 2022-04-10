import  React,{ useEffect, useState }from 'react';
import { styled, createTheme, ThemeProvider,makeStyles } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Edit from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {server} from './Server'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
//   const useStyles = makeStyles((theme) => 
// ({

//     mainContainer : {
//       display:"grid",
//       justifyContent:"center",
//       position:"relative",
//       zIndex: 5,
//       marginTop:"15px"
//   },
//   inputbox:{
//    marginBottom:"1rem",
//    width:"100%",
//    borderColor:"blue"
//   },
//   signbtn:{
//       width:"100%",
//       height:"2.5rem",
//       background : "#95a6fe",
//       color:"black",
//       fontSize:"1.1rem"
//   },

// }));

const [image, setSelectedFile] = useState(null);
const [data,SetData] = useState(null);
const handleSubmission = async (e) => {
  if(image.name !== '')
  {
    const typefile = image.name.split('.').pop();
    if(typefile !== 'pdf')
    {
      // const formData = new FormData();
      // formData.append("image", image);
      // await fetch(`${server}/ml/predict/`, {
      //   method: "POST",
      //   body: formData,
        
      // }).then((result)=>{
      //     SetData(result.data);     
      //     console.log(result);
      // })
      // .catch(()=>{
      //     alert('Error in the Code');
      // });
      var formdata = new FormData();
formdata.append("image", image, "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://1d0b-103-59-202-104.ngrok.io/ml/predict/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.stringify(result)))
  .catch(error => console.log('error', error));
      
  }
  
};
}
//const type = obj
//{console.log(type)}
// var url
// if(type ==='cyclone')url ="./images/cyclone.jpg"
// else if(type === 'earthquake')url ="./images/earthquake.png"
// else if(type === 'wildfire')url ="./images/wildfire.jpg"
// else url ="./images/flood-icon-3.jpg"






  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>
    <Card sx={{ maxWidth: 900 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://thumbs.dreamstime.com/b/cracked-road-earthquake-24086864.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Earthquake
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Earthquake of magnitude 6.2- around 65 km west of WSW of Norsup ,Vanuata

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <br />
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/webp;base64,UklGRoIsAABXRUJQVlA4IHYsAADQhACdASoTAbcAPo04lUelIyIhMjpr2KARiWY/kqPjVyKgi6OrwS6j8hAPm+RhtnZ+pLd+NWsvlQiV5Z8Yu9/F+Qv7T36vR7/gvSC6Mfmi83H0w/47pqPWC/uXqgedT6zH+LtZlqBr4/M4WHYfmT93c7PZ/+y+IW8XtEbUvVo8V+wH5P/+PxM/vn/Y9gT+pf5D/1f6H2q9Bz7b6iPTW9IBR4/8YgRiQV0/GiOdi+qZx3i+ziewD69dEvUrqF5gljyrs1gPF9Sh70Yw/l4k+q2D+qNRLlX2TI+CbPzMGpHpB5MRGMNrtZ+JG0Ye305fclEwLOEymfaEPzAPAt8cfs7uJe7atCdi2wGj17Ka4hPd/vVXDjcC+SnJ+9MYIaXxHpNtMm8h/Hsa8Hp8aGxLNxm69dH7ZkCtGXFXaAbO32+PEzx0xRLDwtrQ6rDwaHBkYuQJjMZyVUnuKZ/EK2Rj4aMPbSrIQbfkyyX/ZByV8FXl7MwoCJ9GEqE7adyZIFuN5GP4UQKT/8aoDkJshcjs007OspfG/adbIitRmpHdHu/+GH+V/akFhmkAA830ZdnZiUg6ulGcypsKJW0LucYn+jpFyrI5fUwydojNkTrYoEkVPan0Cn0b40DIuyK6I3Z/YBxXnz1S/WMy8sXBiBUazOWAuFX4RNDSNaR1+VOVG1adXBYAsmm/sT7mYHYNzH++SdDjD4eGBmUuPjItpN3edeaJWensq2lROtMQ/wXWlspSdvJI84Z5THRmWa2JPT0CEjybYwSkyw4ScfySr2xRmkzt8G70ZzE0hjdxEd2abrQhvLmte+LCpwAF8cBCjp8rjHx6oCMsZ2cpmKkZHxctP2uNlB3/6gOnH3qi/avsKa+AGYvLgMBmNeP5A87gM1chApPHx+o3S81u1h1nti+0a1hsCt86gASWyEjk/gzCP2RMTmj++oYZVNTkx/q1wPXF8QUd8Rws7RcfPra+RXZ7ICOHFw3JFCQqHv2/SLu+dIomGu4CBeEm8QeJ0VPWeAZtw7o33aU55gCJmNQFneNvYX12nMAP3LiHDk3EEKFODXKIKF/LyjDzdwQ+vjIH5u0JoGZEJaYbPv+BYBd+5gmujudfwCYaKvooHHlXTzLXLX0+nh4AbaGJlmb+aNgHfCBVdgPn61nkoxNRwwKKPmtaw8UHoNG5T0fin0sfv2U1xQXtZlcrZnBS32RISxrw+/D2bu63l/bHaJ52ZIZa6VaKeJ+Cj+pQwukECAs2/SW5IDhrQe2/EYqxZH1jB4+Yye8GcaOafi1c3fLjSMR906T+xaGBBK+sHGL4USyTsC87glRhCufg4gdpjB6Uo0vqragGYUs02CcAnVNzRrBQ1y6Bmp06v50uTlmVm4BbiDyufBt3ne3qcPAcNbgmYWXla+so8wtStjeA/k4YAb4vnvvAvVAA/v71uR/HYSFkKSnnzaHfmRhPIzBMSBIaCiRJtffCySNSwzoS+hfGWwy6OU1w82TzIF++KAJfPAZF+J4BEF2gSmkbMWzscsHyK6qlTUurSv5BXxaGYKFaqg76ADyAyJyUNjIYjpi37HYxaBwA4drwD92/+zssNSV+FfOxetlEC3COUPDKuSAgQAKtaE+CJk5CFhboS7lyV3LN8gV3p36hUTbk484DR3VHRR6Yxs5/EaVboj3H9ipsc8AfhzB7OEnVYNeA8NtTse9IFnRkwbGJF0euoUC8WDZWvGTMihRLXgiAMblYvuP3zvJkwaVauvkVMiRsztHDZZNuVw3OrNaOLh8Sn2L8lMHuA0fEcputWFCOkDJsjeDiEY7g/7Mv0JbIC6R2Xbi5bvMROK5dZHJc3OUCc2uxQhbaxm8FawD8SsKVXHZFCxsNBSTv+kf+DlUaMPlLomipU13ZlwU2EFvQGDhA7ZX6K7Lh8EvixvnfeBAXEHpjnLfLxf/qWMe2EI8L5upYkfYxaamXC7AZhlbgbKsPDQvs1ivTXgSaomIEuyIH7TKHvDlQE4s+bkxjmX/ex4k528KOj7NBQzfQDcgjU9itAagClBEPFLoSbysgzwvdY+vHpsiIW0ua3sUwB5WCpzVGo9Dnyl2ZgYSKyc9NHp6z/uP6Z2+nfUal596ihURV5f0W7px26l7+0XN1WvZGhD6bpPAS9m3Vj6AeYI2pIiP5ni9g0BA+7mV9OlDrycvkg/BcmYr3cyPHOhmaVyahhwrzhR72V+lsFn+rZnCS/5MlqeaiSJF1sfAt2thiEe/ftG5iaFC+vrV9JhF3cb8NT9hiZ0tuAlwMUPVObkErarcZ4+x9BJzmuE4ZnWh72uVD8JQheF5Q/nwmWZu0i6+Z3Kd98t+ubxcSTYJHkwAFFWgSTCVcxTS55UgqxM5KR7qUlF1U+auzzOQYZpHPXNAs2iTo4hQfEDtMD7oL5ZgJyD4dyUEImrsc5kuZGlNmc+tugcu6ReqvgeOXdoNx5UV5KskPqUzc/CN1nB21mWnRTjG/FOG2ZQIHGtqD3guqW28WRtJlwam8O45nFwTsAuEBqNhXqkfWpYj7ug39hHOokT6Xd5LpjPBo7uWUNnRn+5rNMcbrDc57dFRmnineAfDYfyG22VQSlNkXrTTtF/58nE1NlZpgpO6VANODNggMi6VrOyf6+K66A6TaVmBcqBUN2AaGaRDjIlZEY6W+RdlU4MvSy2q2eTDM9XRW29uJMSn/FHvmRiwP3m1HNkFVztObASYc/FthKU1NNTIxGhtpj8Yy7LYLwjw378RGETxmhL2Z6dn7fYoZ1OWvKiZKdduHh2z07kFt98h4DZ5c4oM+eeGhxrxGAjHZYWZmA307/NfIUreYAqD38C4BT1d0xbZN6qvWFT98qHD6hZ6XYUm7jdDv66216093/zr6h6oZ1MohYNUzulS1ZGpC3IgvUt/UL/SQMP4kruMAqkCt9vKc4WdeRSu3xIo5rMgXOVR1JxOQcJdu+n6EEDeVpywMoF5scqFw3NfIoiYfsNopIHsVQ2IgNM8qYK1hDv8JCVjhKIeWWa/Lnp4DqysJzlfAy4y/w9WXuFg15oKqNukzsGNnv7sX+TrzHiqt54ynofOoCDVVKq1nhOu1bBCTn81VQkdDCJif+cETckcSnVpENf0rVZ66bgcEFgbtQYtKNUK1z2f2HtHJTjoGBitoDQqD6tRnASDuaHykOSlv1xDKg3SyzP2eI3jpTV64G/Fv+cOvwNB8RP2yxczKb8jxK60JhyCRuhuZrAUyapIljQWMWkgZgiXozfsCAYWRXsEQhDl7JWRM1YMMiTZByaRBC3EWqc5FHz1ocC8i2fkW2Tg35I1PIJrIDhpve97aEZl8zTA8cpHHPvOOUWixXlWT9eHhnssFAPUR32A3Ru4SiinBytXUjk57lrD6Rzxzm878zfdLenNJezr/D2RDxl6IT90Bz4fC6U2ctSl32/4+AI8f5nsDM7Oz9sOor8AX6TNVySrnWsqx/4HLbf92eyn2l3BVvBxVUFQYzE9mT59cMT6ZegcI0t3POWC4QZoEzvUNPNsrNDcywfSHhJNtemuq+Q/LUhrzqp3tBrMf/t8V2tKgOaaBtCX/R2+bCx12CbseB2evi1U5qVT5AqR4oaM4FJ73WkywVLPKpW55wBPChR6SlHkOXN5eaCZKbdprrL+ptqlEuRPgU88SZgdVah5gGoEqNMq9Jo3e4wYMFPgO1NpMadWjo2h4ii8Ypz6u8Xc86hMjzRHKs+AChJZTVhnPvudUP/27TnmcPUzdAD137I5PN9rePSNVdRhC7WhkEshFtJOKf40r6FRbpWEK5hCTl1RZSPIDeULMj6d7yzIL9Zdx/5T2C33Mvb1PRbiug9xtuqGPbMt7ey6NVJkHRYEegI+A7uacAq0nsuZ2muATHQJp1was9iPYhkQdwUkUKRgMi5hyugPVNZfpV6E+UYXEpXUh1y2NB4VW22hz/I3mtO2s/QZzHKJh9yEeLbqCXYPDT9LNjlqiXBQ7AUK0mqRkkB9vMpsXkfauPGICjBl2+qlO6F0CnDjKQb2mZla0KUfhjW7gYu/vM6QSD0VnGmbXDV2lyvotarwUaCzEP0sae5X3W3qKpb1HIpk7p7VgI9dDopG9EG2AXCn8Ge7Q8HWhm4KKAVCVq4OeJ4WeYTvvgKswhQz92jLB93xLDQsXoWHOEhmw11TgBJiRZ2AqsXH55UcOExdu9uUmUXFlA86Xx/3afNBBHwvSM61POSOlRbfU0lDqc4VMt4+Ro7He1DbVgpZIpLveXH2aj+ggNexJtykROIp+1601vaOTxu+JhexFxNPfLD+CUuvnZdV+UXlu8YM7q2YS8J4Nudp+yl0ssYMj/x7EyucbDBKgdjipY2Af1o41uYXxBGuZriG2PcxCdxpqGy7NPwc2KUPuM3ImJbi+TJB/OG4z4cdJaMmnBy1xZE9gKAxk+tkOBeNTpzxUgwlxNP3hAV/IydmM8cmqrxxV7sgGEsJZBxuA+kEF30pF190tNfLLzPXgzqS8JQS2TacUGxekgq+28FLNjInxcceB6eG/3JoDhbjMKLKMGsnPQieYUix8NvifavKdVnpqpQp300bFNqfM51Q4II117Jt3wxNqGqZRL9tDqIwBiTcNSYwft7HfgTVVxtCEyjVSaZHlXlW2P1x1Li6Zx/XxoOmTVQkZVroIZOJcZyTKQFP7v/inEZqCnAl0wn1BYbh3QT6StPsjEYJ1bNkNFJcX60R5Tuhak1qgVYC7qDORJIcbwp5qJEqwI+UcLXnSwN6NuDJ1ElMh+RPLw0ZCKnQhznNY2+gefb1gCF1uU87mKbOdnMYi+cnmdaSFjG5hdYvt2k+/q3C6A5YWbSRiw8NpzxJWGTweMGeyJACUWBh2FpDMxocCJlEDoG7KMX8/W/ILGEovaTKsnTHypHjaKk/6ZeFeIdvSuEHJk8CVbjhR711C0RTA733Mx4DkDUDIk+OdXBY+X1q9FHVqUCGXTraUOLU7tiBeBLN8nvpErh4aESP5srwMHL4TIGYyLVmlT/nEUmg5Go5AH6DrcvHZhyoJ8UtRHA3RI8HGFuIjM4JSqidEAMibSMaGwJM8h2Ls6apLIldn/c2dEUPQ21h7/eZozsP/92cypwNX280xyOOZ0VRMJhJOKINSGzwTaC8b63uqucWoAuX0hM44kkiJlHjpMjuB6esXzgaOcAGhyTiaLwO0im776JCclW5GbWIoomsZox2YoIq57f7NfUqsunAPSF7JZ2ZrdR8GhP+NzT3TSw7vwjDMZLd+3PZ9+rMSb0S/qjJSuV3esuAcX1p/ZQ9fvyhAaFgvN5N49U2AzloP48TpRtpn0qospUQTdrpL3qsbxf0uyMXkTgpGc2i0ELXZGacMenwlxWJoePhLqV8szbu2jNC7jga7lI1+6MQMM+gN4uN7KhlLe4cA0hKAFT6uwtTLbriFYh1Vy3PoLhmwjwet3+UxLl7GtSQq5gXS3Sxd8zbP3X4lFbHUYXKx+99TlmfiDlzUF4LoKPlwVYaXYCKhXNFAXsoWlwtkrgrAhAc3HK2UmRLAwWvbcCn+ArfFWib+tyfD1WbRkSu7KkL6Ni4LE1uKbDoopcvY6ytg2e/5yxXYdhDt26rvqTy9KMxhi56/V+poigMjb101K7OD0pTIZoyRlv0y8VnrxOY2/ZGfHZrD7q43eoTXwyXZ8ujTlQ5k8mbIhHUJ1Xu+9TD0Mm28xdxWS5yCS35nZjKpM678eHDGbrXNgYDHNfecrkjchJ3BJc9IrAPBKnR71htqTrYSII7RQ42F5zpBY4iXDs8b37CsUGAKVd/Q+p+8L2tR9jEJcxchA/8fvqJCsMU8e33UmPW7UC9pxkzOr9XjRmfyVguvwyP0AHvtTcz/Vudspwhggd1axuYdh53avYBkAn9Nt44Dr8nT3gg22Y5H19XtXs8jKG1RcInh6bcPCnRa/nv0j1JQp/F+pPunljj3ViEZWrvXI/Cylr1nmnw2tB88IqFZumvaLBwSNtO0pSzFL/1RfvHiB0u9It6WGu35UmhzAIW8R4cAN2ln7MtaYo0zCC7jc+EpGDnp/dvA5Kku/NSE3tnNkqd+BUykQcqbtMCTOeQjn9Do07HhAN3axyF86SYOMEsnqsU5+6KbhMaFCr7JhoqMV4U7Ftw5iBAYxHzOPT9jgCoZwn/DuI20l5St0mUNDHrTzz3pcF5ZVhCzer/ncq0vJ1gPJTC/R300EdzK7ICyKsb7f5f1yX/mK8Zo5M+jaJl1JVwwemrxHAn/nJoIuKFfWXgPAHR7VS8jU4KFJ8KvfTUKMP2nCQMe4v7jXRAYo2gnYte/J5dW4SegXW32FS+IA6TEZGl7Jtr5i3kKmeCkqXi4XjAocPRvNoyzJiX5S9iSft5RpNmMjkbq2l3szfuticqVct6PpvYPIhAB4elrJ8z1372jeQ4tbpZbG0T0B/de7TsisRvu7F33fkfGc+i+chkEcCIG2RAhx0TyiVhL56C6zEqFW048Ni61uAc0jdt2sZKlaZMASn4fNGqzBvsoQmK3VKDbOn3Z4n4/0RaiGG/SYYD+gCbX0guYzZhFsGKJ0gh6Ah3IvegkDuQl/zy6KaF5M0adSSZ42TA0ZbLgEwu/syDTrPHtJYrh2jmuVlMeSJStiLNX3IjD00JrkbQggvzeAk/iat4QaeYK6yRR1zxnDky15QsfbPd+7o6+DaM0OulbQMetvVUS3PCxCiOcxswa8psnnEHWfsQp5igKxc0VqmcVUrpA3a0gM8H4V8CdbXMfA5sCMGiVtigyy2ACEolmYAawY2LfFrcZt3cv1WuOkfjjY7xgJfy8XQDASvJGf+9B+LzdPBGJl5SyDU1zxarBK7LIaRIFC2AsHGcz/EufF9WeIWMe0qkp9qZfptNz1HfmWixyO+daRkYcOAxirnJJ8RcoSBY9doxCVkD8FDZtxnPjxTDPJOmPL6XIRDpphXfXVc+UFUrxrOV3w1p+zSdw0zthkHNU51eB80BX4KHmBWDJdfwA+mL2hNVreqQHgkzj3BGS6KghmxdlDqrmi+1uZ9yImpN/j1Pvim1XNFb4iGUyvMbR9xxe2BMHEOcl7342immlG4YKg9T975gnkQJZtR3xu4azMxHR/HzfzkvKSylNAfIjs7GgEwieQNNIP3MDbRGAiv9q4NCM8rz/hEElkwnzI6XgCiYy6gJnICwur6hwtCGF9DxnRHx+sNpdJm2jYodsIx8+ZWB1CTe5mCvrT9FFeX6wO2+LGQij90dK0s3MJu5qSY3tVuxZNBRH1v7deEbiFoDXp+TMyIiV4v1jqq1MyZlOm9Q2g9cjlFfmt6jquNzkoXXiEqE70G9Hr4VM+WhJOYbYC1Pa8E73whE4dryH3NoyqKY2CU8Bak/5L024gUNV8pOaayDnDjLPUXgv3C7yw2kDPaWzT0AxgjLZ1qLD35XQOiRH7Ft1INtrdV3xSab3SR+zKRl29fAAwxUlD6hw2CWkt5OQeE7pnE6P6Wagvp4PANbMlYV+wbywIj77bbVbY6FX95jGEeeu8dz2t7tWuVEIsJDh5E9ltVdKPBGLJYxOVd/aGtOacDNB6i7od59IU+WKNvdUQz6SZGxo3makdBviUosPUIqoj9NjyTQEa59x5kUlssvw1D4Y6Q+ATohFM+KBx5CX/pmWRsBAnLlqyTdgDlXp8h9wZ50IoLqtA7i77cL9M7LlXABMAOYyva8zmgqVoLEZizzEp8A+Zfz7Zd+TXodrpDSF7Zf3vAcC2OY1Zn3yVAFu/mdnkRSknD551K7ChvNOFtPdzlSagPzJP5cn50EL8qTUDBBuYiPTN5itCuMLguF2CwhnUHAnB8iKMwFop0+VdyAuc/zrLDYW3ivwunb3igxfcBbR9V6FKp5rDZ3FLu5TXY8+kNkRcgSDj24l/G/0d0K4EXGnreLFximZCA3euVJFAv56Hcmk2Ztr8teweqBECIdZnQj2aWWXB5n0d7Tay0bBWTJInlRxgwn3D6rh9xmMJgP6T/9r1MldhghoA0u4AzAVLdQDMLyOwIjyG7hEagQwtg+p5BibLMuLwEVzKGeZ2yik6CnnF8TRUU57JH+3sHSxBjtVnD2frKPXCnjafuYzgBm8T9YGXXW3WE3TbsB5sZSBwhekaE0UfeM+9sz3LEMdte6XCYr7LWx+IKvZQso6m5GgdifFUw+OfhYhFTq3OolnA6VI9Zm4rh2OMDHChsIx4fzf/v84p0wT4RyJHcMl/XvsKEDtlJEzeZv2GcfwXiEVvCNV52Ce7XftkyH788wsr0FcwBhq0JWivA5slTPMR6EwmiRvJQH/jekDlA7G4/gYdupmLYVJZxeFDntMXZt8QZ9S0FKMM4MMZgpplDzNjJI09aGDN+vuQrKHF6LqhujNzBLPZnsXc6tpOKawf+H6nV0OvbYYqZTHUJpDstVimaw7QkfjjEHzxa7HJcR9MsZdpeu4g9tI/hMbPgmm2oeVPy03VAaem60bOv8rQTuMEvtoRj1FLuR9YpgC6PErMrK+jrtS4oMqzdDusHe65jA4wn9jpbJvkEkP0pc2bbInCxNmCTYuj073oQpb289SrYWush6nwGVjDyMuiiM0bbLLSKmAuunVrYvG2+ArQ6zI8Own1NikCopK3Utop/dnyFEXzR3+JqkMy+0Z2YHT3lNuxGNKK93uP72t2e/gupXfZ5K3J4DIH8Jb4aT8nOt6jQF6Yd8wC8HpOY6g9ztKYbLYNr94IaU/VYpaoQbSW1tJNSAn0JDzdUVM5pAJD8WLXV2pgxia+uppRhJYWA01lfMtT0q2nnYOPU7a3DAm/UBX4W9Q9K5sfbOHJYghjfn6k5rTNA2N500uC4xfGT2xVFKfz/wKP/Zn/4uWnZb38j2KQOQKs1BURz4eG7cYidVjmafj50F4vm5S8zYxqm6+8EFNI2ZvEWLTOSf5DEHjmaftr1J8x5k+pA77LzvE50Hv4OCjItoUtnzn282j3iWSMbvwUUYQd6YonOeGJhdhqapou+xFkDb8//rZNNk4NzfSWzuPWrOmqpoL/QwpIWUkJbf/CW9uVIsan7Pg2RXzMQ+kvdtDXAOctSNbVAs/X4U0DJsHrtw+fODrnD/jTFjOY+HrykA7UtnC/K3zzbSLWCcoSMeEI4F483iF13/8hj/9ub1U7kohTCkVEQM2FzrmUxMg28id6h7QevgbckAXUFz1lBuhhYRj5kb2j9/bxlMIWkgvndIg7YOF8sDnylPksAMDlqHoEkYyOQRXj19ZrqVJlOrroKpn4c9AQAO+Xy/NvWYvjwj7UomRZxDn1YkGTiOsSccIKtpO5uMoLFWGdsU1P1835HJ9jgof3VNxWw4nqH5EfJdxLp3MhW8YvPNEACdoZefHjPYN5FV/7gMpV4sLvD+UIc6Hyk+5Nj6lR+F+RAuC8kmHH8cZWaJ9JsEE/GPayDLc15wdlbBMKKUPIuh4GHzvavP9PyJWXaufKa9jf8+h74cCgSb+04UEbEw1v4PhiS19QwU40Ipm2aSxmZWVrMZ+oNhEzkZO4fQIZ4WqOi+JJYsBRn7vJ6ZBuh5u7cmHvdVJVu95cqzm87qrnq/XnGZmgfZoCqcsk3soGfzSiML5W1N9YDF8xt+9oezw9e3CrDVwXAPsi7UsA4CHNgj4COSFQuwLJXRxz5tSJG0Eqb0wUgLVfp/SrHch655qcWMQEDG6iIesMHmy0v8uayXbBoE0X/WhDmQrNzxFj1eSZmz+nkNGqvMm+4QpCOfFr9K2dRrAo6b7jKanQ1XJPeJSWrCaao1SLyaliN3/HWb4pEDaRAK39grTNtLJRh1DREVK8xb62CShMNAHFpYl2F2BnqOJZ/dDznLVqv+i/BSdni7PbED/7NCJhGFESY35YFYOCnrETSV7H8B3x/z4pNUML+3s/iNlAjJyMOs2W7xIzdnmc36U91H0l9noeBcqVBx5dqoDH90TCBpD7pz7YmmyzIg pconRXNh0qX2rSmbezxAiKWMbg9LHl+3gloJl131a/0Vd4KaU8rKLLbwyz84NH7H+1PuCfJOO8TFguK9LRR7U1RgZ/VIWLgr6qTQZ3TGXlgbYFg4re0mibYDpDUY2AWdzhllvE/Lcewq3CxWJzMwreSXYRHwIunkfggVzapqOIXF/hIkqCrJB2F/SOXnWCgg9KWSu4r7lanKLjvkFj0PWnSVMRoKJbhY2Q/BkuCi/Gv6K4G7cNC9AHG54crw9/uPYGn2/7s7lc0X35DXNht2cWQdQA738rId5EOy+1/INVzDdTIOIdIPnI2Zou1H3m5dalD0nBv16UWzobFLV5dXzxavc7mx4GN1vbC8EdyHasDgvSivJ+PkWUVwWCS/g4WdU0LMZgiSvGtELhHENAui7DWR86L97XpLRNfcTmtz+jHM4Qcs1sxCT0f3EWTmb2GGupsZ6wx1jZpLLMhWWBlQnWxL7PjqBe7lkH136aL/sL+JPDOpT8hf4adxKB9+e0AT81XImvh5tUzF/8kYm7je/lS6+zbBwYCl4bGNK9lgB/QjfXoVTdOE9NEj/HflPGucAAQN/50EvtHwF/1rIzN64qI8O2rSobpLMu6ueKUQpiFb8av4j2g78XazXP46+NZ3QwIEXmDjs9RbG2LEUZ4WNHR7zExN7ARXu86EzTc3bOq5VcukjY//MM/CmCeHmQSu4B+ndUjstE2TucH7IUld/G+J7+TARtDm5Q8PL8HQFK3iQT5xbMAACSGY2hVjRYD5/alCJtIJn4YyOf2yeRyVpjbmWBZ8tTQuEfHDypeqP+biGIWvK5GeUOcS6N168c4pHCxkd8uTyYVTejFRdkkJvM8swPpXHXJJs5bwQ3GpU9DdOoKUbTyvCCOHO490/N53tK0V5Sf6nYGCHk+XUNkfrVzLV+TmwfcVfZi0PuJNkJYrBRPdwbr0QxkID+06d5YXLquYqnHZa7kWGjBbUQGltFe4J5YEF5Rhq2tF7P3wjgbJs1ky1Z4fvXDQCjO/o4D7umiocwvKVjjFVXlrCOYb42IXzKN8JhgqFy/bk9+tBoGTWV1cMxhIS8GA1FbWIvme49RBdPDdjP4zWxhxRk+wBW3xrs1V8r2cXUBNPKoHvXZ62dRToI91im8JjpzF3PnroHMb7LnIzdSE36A9Grq0Gcp0dXXONPj1DsnAE/HhQdP9lbDd6o4M+p27QR6Jt4O3P4Bb5Pu4zubU/1Q817HA/f+T6Rmv/8bshxizbIt90y1Op2TUDPtbeqEjEd5SXvM/fzBKSi0diY9xvbhnXQTIqGFkR05igneGznda3F75MmR37fVRQQODT2hw6rKeFXdy5nvrTXCYUlkc5ujMde6r4UiiPW+AiTeGFM4IKtIAOufdgtp0ST6sQKEqtyCspCcmRuchvjcTMdMJ9v2sXf/c1KqwZpaaddWx1M8R5jr9Ea3CAhw3y3W8OdH5P3FqeG3jiCE1SXspZDM05knV44K7gWFAy6jGMovAXPhhsYcUxt68Hp53vRDT6L9Nx/8kKw1kV4wSERrA8Ab3Qu+7r9M/q9xKeSuTg+ZwsMkeFnzQu+W45blEyqRIofCtIh4QkXS4XfPGyRlBPQezTDbfAd8aXbfW7XMstY30jcnV9Zixq5yJid7p7X2QBgDMGMP71Mrvnroe+Xl+9GNxgDJkysPKwJe9M5/CF5Dcc/MTc0098upaABXUOk9zo8+DKb/yrVPXnvZHzTc/XzDO/0UbaVQDsrjFvuHjn7Ex8ZBarHCOP8kjA65ogHQ8IY1uq3iW1foEOfqd/n32kfNsd2jZljNvSpjHz45T9P+3ceHtFRQMMUWUDLkuSkozUim0LnjQYflC+idodk89fwkWIo+K0UWeyvPpZkW5vTBZhK4GfdXY+qXQB5PR8AVDW4IgrA8fbNU+fgZfnAI3zsSsKPojYznPhbBpxOw626iZAfNyNl6ZcOvmmpwvr4ESu2jppKgpqkEGhq1LHfMAqH7/IZOkqYri8tHoaLzOo/RQ5OkGAwBAiPQhvHq54/i/3i1ucT5BhRrMjBYcFTkD7F3YWh4MVp5t+MaABsMCHMVjHLEMMOHYWoega+cNZlPHll3Rc9vnHyVbwdMKv575ulPzu3sTR27Xv2Hi/p5V09E6pF8qTPz9tas7VPodzKh2Vwt6RF2Ai1f79yx87o9pHHhI9f/fZvkdPRgutxcClCGehRE4CRfORPm3x08xdi4utXXy24J1xlZD9icdlPjVv0Bgsm/SMcTkjw4xa/F9Cx0vBNbuu3vtpbB2LNMix+Sz95eU4gdkEnE/eXA9QGjg7rhcsrJgqnXcqbbj+TnfL7wZuzbWa6NNh/eAtJ7vCarPvSYXrEpGoUbJtcUBkqECmrQitA0q+BMmgiZVPtAjWdCOAzjfdTQ4EyP3Kpy1MfbaHDsD39vlbgy9GGX/QtGg21ryWwk8WsNDB6afS3x+aWpVc/y36gojamtk7VPRkFN2hTRoPekxx2sDoXLAR19FS073utkey2fSmfrBCR7NUVE2aYlccA1QxpLoLZ92joKXdFv9Ay46N9JdAspOdXy4sAXOzH70PxoAbIO2vgAnOd8Eda56Zr/UMR6sWDMv0ig37ZmnInysv1RwbFNP71cltV/JlsVpYqWPR/AxpKzVv3oH9N9gZZoxyiN28nlEpz7SQE8I+kWSMl+9NG9Fl843x1ShUQeIFtvxtb9GU4lTHCa8FeXN6dkd3aVbZS+AiaJN6Ig0UZoOM+MriMlg6a99eYQGq+q2GxEOctxuxeyf1MQvJ1wrOD9GpSVyyDJ2b1lixmyFdjwsdCWNmLvCY7SfqHHjntCnNVBULKrNOfh3VEzLsY3t+u1Jx4HXE7VCf5Fm+Rohee7t8HI8eX33VAIIAw/PShhdyCBF3uiksllPkF+odY7/rhy04fKzv8a18P88LpL07nPBN7nbF5JD4thLdHhPLp6ijTz5IZr11hO9rSujKHQ4HQPWN9aoZNlSlLxgk/cZ0bf/KVYxEa4zwFTuFRoHiSP31Iqu3V+p6f656eIXbwj/Is9jwU+KX0pJmldc9x5fEJ52MujuwKUUnAsCIR6Rrr6QmG1q1erJ2KzUfDFQhgEekc7toF/O+CquC33qILlxcm1Bh5tkGof8KLL/F1uNlpnwObGQAGlJK+rfASG192V2qrWz79NosIcU/lYu4HjeabG1p8d9JbX+MpRb6t7xbbIbQVC4mPBHLZWQVeiUh2070k8UfOaOpMGSVLFOKi/smWPfhTyb4RIMk9VkcCQD7+kMb9IQf8U8a7uNx/OVC9PlYe/vdxDIl97pTq9qoWXFmldfTxFrZSIhjOGmHZSJT0Yd6a1l/KfqVIu0l2SJa59MgnhyVAd1VgoepzObWKY1x3Z/5eB1DlxkFYBzzuL/KEK9MtNeFBWRU1e9ahSy86NpQv5YLIspP8Dspsl2nKAfm0tJ4jQ3D4tPSCXy+uEGeLMvM0E2FsTQi5VjJ73DeDt4SKF0cA9mqsWcr8jyTHiPgbjNzRUhq4E8O4bVKQi/8shl15/C5XWOYOxqncgZTLB6rRfS9v4LAjSlqgDTLh/grhxBhfWzsRzI9MoVHNCmiha7PTQmRBppSHmyqQw8QXOEevKEfqav6gRpZngX/E91aNbBXnBz6FgZQFuo0SS2VlkbfPWKTGLelFymOb+QvixxfOFhByg4loORLOOzuZ5stkbMNWkHGukSn86RwmAE07JQgnYXABWQqyWj339xmnYy4njHSES+cFEscnnLMqM2ATmAgjNY1teaZ7COuHuFuy7fKeGwXmdPmbBabRzDHJoqJaoXQrQq4EsnUdlDxfPK8aSfvWR7HLuQRghzsPvM2LYQMTFudu05JWAyYcbOkmJiLhovbvMNa/BQGQBIYN1hwAfEP/cSht+kLPwk36iotbROhAdDZfSsFzcQuUcA93bLPXQgyUWYsPYsfnHY4If8rX902GcQ3lWTnteztbO4dZGYjXDKrTdkAZhO4Hlxu2M9gaArzvjhpOZ/3c7+XpJOTdh9pta4Jt3IHt1Ol/lTVs+UjJ+6csARjXDdXvJV8sfPwH8SjOgBwx/zAjmctgrYvxju8mwWZ7W4k31N9A+NM5Ie9Scej2l/zOnx4qF7o3DLfz5eYoybLV0r4pv/D3R2BwMCGf61gpL28CTnpMdfsIMtqtxni4SFzYinc51Kjjhgy82PS3veIfvvcSZ9K7L+Btxsuy7tU7acdfEsbOU5mPn545g4Jd+q3NvyNj1LWKdB3lH+HK4pHsPc3nchUPlqMafRdl12+5sTmvUd/o9RExLKTjyci9tyenlg6/IvM+Dgea3Ufyy8maRCeRLQtQJoXaTGWeUFvuoDhEuquODxkSqgZ2HR+0lRRjlu68Eu/OcLp0V3igJ7WbOcYpxP1w71UKrnj8FyYOokQxf29GLh9TDO0hr74xdbSmRQbJR3XjU+y50Negs6M9+m8nlMd16wWy0Clo2LYvJK5mD914d1qQlXwW2Jk4Hk7H9UgnG/kjpDPu19qRbS2lxwp/nAisTgpCAK1In0AToxnICvHFJpek4eWhzpjJHoHeue+Xh8FqJJ7FACTCNAKpJLmtlCpCNOsEU2HhJwcvX+ilP2EjBK+Gywznrq1+kx/QFIcXgZt4YXojr506sV93w4SoXFL4mnqFye6EzSTjhu4nMwk42XCrr9fqGTe+iHqY5CTbtIEPqc1/yd0FzjY+uxcwmZGvi0JcJGaDczfnYl83zVlyhrsh49ZFbq48G7NL3JPphOdt1hCe5PWlnCr91x51mGDoOk625sfbKbwHihJvUKxY5G22/kaQeKt1u0Ne7dRZ3aGUDWN5+uAG/rza/MMvlVInRsLwaOfjD9f+9lNuGpcHel9QFuZm1ZBCi+6Zxfo//9SK3wF+y3gNPCpF39AO+6TyddxM3XUDbRwpgYHoPSci3NzeEoV21iQfMeEGsyjoeKLRtN7NkqCBhWMBHiUuqRMdOcaon0pw0ZVK+1cVWk/wYyNrmK+C+076lDR8LckBG6Gz3Swbb6bdO8R4SMgk+wTjcm7dy7zbEzxBDHaFMSpc1vG3DAJ35dCcrO7RHmooMk464vQ/E63XUQGYMyh4NrdEVXgd8Af6BhGRxEjFJDEQRHYaAHokLqoGcUURykKAH0H8g3rYOuSAsrhAA4IosEATR8ABmf5XQPHHMJBen7hEgrbYrPGr8virXGfZPmSoqAYKHUggAAAAAAAAAA="
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wildfire
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A fierce wildfire blazes in Assam’s Dima Hasao district,the most forest fire-prone district in the country.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Item>
  </Grid>
  <Grid item xs={8} >
    <Item>
    <div style={{fontSize:"1.5rem" ,color:"black" ,margin:"1.5vh"}}>Upload the Satellite Image here</div>
    <TextField 
            
            type="file"
            required
            variant="outlined" 
            name="Image"
            onChange={(e)=>setSelectedFile(e.target.files[0])}
          />
          <Button onClick={handleSubmission}>Submit</Button>
          {/* <img src={url}/> */}
        { data && <Card sx={{ maxWidth: 900 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://thumbs.dreamstime.com/b/cracked-road-earthquake-24086864.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {data.Chances}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Disaster}

        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>}
    </Item>
  </Grid>
</Grid>
  );
};

export default  DashboardContent;