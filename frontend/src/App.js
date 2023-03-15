import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FootballClubList from './components/FootballClubList';
import CreateFootballClub from './components/CreateFootballClub';
import UpdateFootballClub from './components/UpdateFootballClub';
import FootballClubDetails from './components/FootballClubDetails';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ManagerList from './components/ManagerList';
import ManagerDetails from './components/ManagerDetails'
import CreateManager from './components/CreateManager'
import UpdateManager from './components/UpdateManager'
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import CreatePlayer from './components/CreatePlayer';
import UpdatePlayer from './components/UpdatePlayer';
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import LandingPage from './components/LandingPage';
import Register from './auth/Register';
import Login from './auth/Login';
import PrivateRoute from './routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
		store.dispatch(loadUser());
	}, []);
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path="/register" element={<Register/>} />
						<Route exact path="/login" element={<Login/>} />
          <Route path='/clublist' element={<FootballClubList/>}/>
          <Route path='/createclub' element={<CreateFootballClub/>}/>
          <Route path='/editclub/:id' element={<UpdateFootballClub/>}/>
          <Route path='/clubdetail/:id' element={<FootballClubDetails/>}/>
          <Route path='/managerlist' element={<ManagerList/>}/>
          <Route path='/managerdetail/:id' element={<ManagerDetails/>}/>
          <Route path='/createmanager' element={<CreateManager/>}/>
          <Route path='/editmanager/:id' element={<UpdateManager/>}/>

          <Route path='/playerlist' element={<PlayerList/>}/>
          <Route path='/playerdetail/:id' element={<PlayerDetails/>}/>
          <Route path='/createplayer' element={<CreatePlayer/>}/>
          <Route path='/editplayer/:id' element={<UpdatePlayer/>}/>

        </Routes>
      </div>

    </Router>
  );
}

export default App;
