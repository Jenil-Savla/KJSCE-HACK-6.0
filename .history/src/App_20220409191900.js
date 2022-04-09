import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Page from './components/Page'
import Dashboard from './components/Dashboard'
import Volunteer from './components/Volunteer'
import Donate from './components/Donate'
import Missingreport from './components/Missingreport'
import Questions from './components/Questions'
function App() {
  return (
    <div className="App">
     
      {/* <Page/> */}
     <Dashboard /> 
     {/* <Volunteer /> */}
     {/* <Donate/> */}
     {/* <Missingreport/> */}
     {/* <Questions/> */}
    </div>
  );
}

export default App;
