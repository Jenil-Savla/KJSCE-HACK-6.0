import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Page from './components/Page'
import Dashboard from './components/Dashboard'
import Volunteer from './components/Volunteer'
import Donate from './components/Donate'
import Missingreport from './components/Missingreport'
import Questions from './components/Questions'
import listItems from './components/listItems'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>

     <Navbar/>
     
      {/* <Page/> */}
     {/* <Dashboard />  */}
     {/* <Volunteer /> */}
     {/* <Donate/> */}
     {/* <Missingreport/> */}
     {/* <Questions/> */}
     {/* <listItems/>  */}
     </Router>
    </div>
  );
}

export default App;
