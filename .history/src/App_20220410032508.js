import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Page from './components/Page'
import Dashboard from './components/Dashboard'
import Volunteer from './components/Volunteer'
import Donate from './components/Donate'
import Missingreport from './components/Missingreport'
import Questions from './components/Questions'
import Precaution from './components/Precaution'
import listItems from './components/listItems'
import Navbar from './components/Navbar'
import Helpline from './components/Helpline'
import Payment from './components/Payment'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
    
    <Navbar/>
      <Routes>
     <Route path="/" element={<Page/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/volunteer" element={<Volunteer/>}/>
     <Route path="/donate" element={<Donate/>}/>
     <Route path="/missing" element={<Missingreport/>}/>
     <Route path="/faq" element={<Questions/>}/>
     <Route path="/precaution" element={<Precaution/>}/>
     <Route path="/helpline" element={<Helpline/>}/>
    
      {/* <Page/> */}
     {/* <Dashboard />  */}
     {/* <Volunteer /> */}
     {/* <Donate/> */}
     {/* <Missingreport/> */}
     {/* <Questions/> */}
     {/* <listItems/>  */}
     </Routes>
     </Router>
    </div>
  );
}

export default App;
