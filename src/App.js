import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AddUser from './components/AddUser';
import Users from './components/Users';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
      <Topbar/>
      
      
      <Route path="/addusers">
      <AddUser/>
      </Route>
      <Route path="/users">
      <Users/>
      </Route>
      <Route path="/weather">
      <Weather/>
      </Route>
    
      

      </Router>
     
    </div>
  );
}

export default App;
