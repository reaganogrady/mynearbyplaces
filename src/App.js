import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './home';
import Login from './login';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import logo from './images/logo.png';
import {Button, Form} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'

function App() {
  return (
    <Container>
    <HashRouter>
      <Switch>
        <Route path ="/home" component= { Home } />
        <Route path ="/login" component= { Login } />
      </Switch>
    </HashRouter>

    <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Navbar.Brand>  <img src={logo} alt="logo" height="50px"/></Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">  Home </Nav.Link>
          <Nav.Link href="#login"> Login </Nav.Link>
          <Nav.Link href="#signup"> Sign Up </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Form inline> 
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="dark">Search</Button>
          </Form>
        </Nav>
    </Navbar>

    
    </Container>
  );
}

export default App;
