import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './components/home';
import Login from '.components/login';
import SignUp from './components/signup';
import Review from './components/review';
import AddPlace from './components/addplace';
import { useState } from 'react';
import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import logo from './images/logo.png';


function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [place, setPlace] = useState('');
  const [location, setLoc] = useState('');

  let onLoggedIn = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  }
  
  let logOut = () => {
    setUser('');
    localStorage.setItem('user', '');
  }

  let search = (place, location) => {
    //Call the search and pull up results
  }

  let newUser = (user, pass) => {
    // Add user to DB
  }


  return (
    <HashRouter>
      <Container>
      <Navbar fixed="top" expand="lg" bg="light" variant="light">
          <Navbar.Brand><a href='#home'><img src={logo} alt="logo" height="50px"/></a></Navbar.Brand>
          <Nav>
            <Nav.Link> 
                <Link className='link' to = '/review'>Write a Review</Link>
            </Nav.Link>
            <Nav.Link> 
                <Link className="link" to="/addplace">Add a Place</Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link> 
                  {user === '' ?
                    <Link className='link' to="/login">Login</Link>
                    :
                    <Link className='link' onClick={logOut}>Logout</Link>
                  }
            </Nav.Link>
            <Nav.Link> 
              <Link className="link" to="/signup">Sign Up</Link>
            </Nav.Link>
          
          </Nav>
      </Navbar>
      <Switch>
        <Route exact path ="/">
          <Redirect to="/home" />
        </Route>
        <Route path ="/home" component= { Home } />
        <Route path ="/login"> <Login onLoggedIn ={onLoggedIn}/></Route>
        <Route path ="/signup"> <SignUp newUser ={newUser}/> </Route>
        <Route path="/review" component={ Review } />
        <Route path="/addplace" component= { AddPlace } />
      </Switch>
    </Container>
    </HashRouter>
  );
}

export default App;
