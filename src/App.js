import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './home';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <Container>
    <HashRouter>
      <Switch>
        <Route path ="/home" component= { Home } />
      </Switch>
    </HashRouter>

    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand> YelpJr </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home"> Home </Nav.Link>
          <Nav.Link href="#login"> Login </Nav.Link>
          <Nav.Link href="#signup"> Sign Up </Nav.Link>
        </Nav>
    </Navbar>
    </Container>
  );
}

export default App;
