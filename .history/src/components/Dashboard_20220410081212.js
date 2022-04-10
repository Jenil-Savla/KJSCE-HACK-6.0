import  React,{ useEffect, useState }from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
//import LocationOn from '@mui/material/LocationOn';
import Edit from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Axios from "axios";

//import * as Mui from '@material-ui/core';




// const options = {
//   // Required: API key
//   key: 'i94Qh5qtthgbbFjIheQ1WMTFPtjCd3rc', // REPLACE WITH YOUR KEY !!!

//   // Put additional console output
//   verbose: true,

//   // Optional: Initial state of the map
//   lat: 50.4,
//   lon: 14.3,
//   zoom: 5,
// };

// // Initialize Windy API
// windyInit(options, windyAPI => {
//   // windyAPI is ready, and contain 'map', 'store',
//   // 'picker' and other usefull stuff

//   const { map } = windyAPI;
//   // .map is instance of Leaflet map

//   L.popup()
//       .setLatLng([50.4, 14.3])
//       .setContent('Hello World')
//       .openOn(map);
// });
//import Chart from './Chart';

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



// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

//  fetch("https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake|cyclone|flood|tsunami", requestOptions)
//    .then(response => response.text())
//    .then(result => console.log(result))
//    .catch(error => console.log('error', error));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
    <Card>
    <Box sx={{ p: 2, display: 'flex' }}>
      <Avatar variant="rounded" src="avatar1.jpg" />
      <Stack spacing={0.5}>
        <Typography fontWeight={700}>Michael Scott</Typography>
        <Typography variant="body2" color="text.secondary">
        <LocationOn sx={6} /> Scranton, PA
        </Typography>
      </Stack>
      <IconButton>
        <Edit sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
    <Divider />
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
    >
      <Chip>Active account</Chip>
      <Switch />
    </Stack>
  </Card>
  </div>

  
        

     
    // </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}