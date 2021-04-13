import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './home';
import Login from './login';
import SignUp from './signup';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import logo from './images/logo.png';
import {Button, Form} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';

function App() {

  return (
    <Container>
    <HashRouter>
      <Switch>
        <Route exact path ="/" component= { Home } />
        <Route path ="/login" component= { Login } />
        <Route path ="/signup" component= { SignUp } />
      </Switch>
    </HashRouter>

    <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Navbar.Brand>  <a href="mynearbyplaces/"><img src={logo} alt="logo" height="50px"/></a></Navbar.Brand>
        <Nav><Nav.Link href='#review'> Write a Review</Nav.Link></Nav>
        <Nav className="ml-auto">
          {/* If logged in { show logout button}*/}
          <Nav.Link href="#login"> Login </Nav.Link>
          <Nav.Link href="#signup"> Sign up</Nav.Link>
        
        </Nav>
    </Navbar>

    
    </Container>
  );
}

export default App;
