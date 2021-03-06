import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Review from './components/review';
import AddPlace from './components/addplace';
import { useState } from 'react';
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import logo from './images/logo.png';

import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [place, setPlace] = useState("");
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  let onLoggedIn = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  }
  
  let logOut = () => {
    setUser('');
    localStorage.setItem('user', '');
  }

  let newUser = (user, pass) => {
    // Add user to DB
    setUser(user);
  }
  
  let newPlace = (place) => {
    setPlace(place);
  }

  return (
    <HashRouter>
      <Container>
      <Navbar fixed="top" expand="lg" bg="light" variant="light">
          <Navbar.Brand><a href='#home'><img src={logo} alt="logo" height="50px"/></a></Navbar.Brand>
          <Nav>
            <Nav.Link> 
                <Link className="link" to="/addplace">Add a Place</Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          {user === '' ?
              <Container>
                <Nav.Link> 
                  <Link className='link' to="/login">Login</Link>
                </Nav.Link> 
                <Nav.Link> 
                  <Link className="link" to="/signup">Sign Up</Link>
                </Nav.Link> 
              </Container>
              :
              <Container>
                <Nav.Link> 
                  <Link className='link' to="/" onClick={logOut}>Logout</Link>
                </Nav.Link>
              </Container>
          }
          </Nav>
      </Navbar>
      <Switch>
        <Route exact path ="/">
          <Redirect to="/home" />
        </Route>
        <Route path ="/home" > <Home newPlace={newPlace} user={user}/> </Route>
        <Route path ="/login"> <Login onLoggedIn ={onLoggedIn}/></Route>
        <Route path ="/signup"> <SignUp newUser ={newUser}/> </Route>
        <Route path="/review"> <Review user = {user} place={place}/></Route>
        <Route path="/addplace" component= { AddPlace } />
      </Switch>
    </Container>
    </HashRouter>
  );
}

export default App;
