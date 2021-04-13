import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Home from './home';
import Login from './login';
import SignUp from './signup';
import Review from './review';
import AddPlace from './addplace';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import logo from './images/logo.png';


function App() {
  return (
    <Container>
    <HashRouter>
      <Switch>
        <Route exact path ="/">
          <Redirect to="/home" />
        </Route>
        <Route path ="/home" component= { Home } />
        <Route path ="/login" component= { Login } />
        <Route path ="/signup" component= { SignUp } />
        <Route path="/review" component={ Review } />
        <Route path="/addplace" component= { AddPlace } />
      </Switch>
    </HashRouter>

    <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Navbar.Brand><a href='#home'><img src={logo} alt="logo" height="50px"/></a></Navbar.Brand>
        <Nav>
          <Nav.Link href='#review'> Write a Review</Nav.Link>
          <Nav.Link href="#addplace">Add a Place</Nav.Link>
        </Nav>
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
