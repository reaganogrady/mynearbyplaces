import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

function Login(props) {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    let onLoginSubmitted = () => {
        if (user.trim().length === 0 || pass.trim().length === 0) {
            return;
        }
        props.onLoggedIn(user);
        history.push('/home');
    }

    let onSetUser = (event) =>{
        setUser(event.target.value);
    }

    let onSetPass = (event) =>{
        setPass(event.target.value);
    }

    return(
    <Container className="form">
        <h4> Login</h4>
        <Form className="login" onSubmit={onLoginSubmitted}>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Email Address</Form.Label> 
                    <Form.Control type="email" placeholder="Email" onChange ={onSetUser}/>
                </Form.Group>
            </Col>
            </Row>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange ={onSetPass}/>
                </Form.Group>
            </Col>
            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    </Container>
    );
}

export default Login;