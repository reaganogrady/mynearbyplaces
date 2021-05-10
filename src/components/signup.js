import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import api from '../communication/api';

function SignUp(props) {
    const history = useHistory();
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');

    let onSignupSubmitted = () => {
        if (username.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        let info = { username, password };
        api.signup(info);
        props.newUser(username, password);
        history.push('/');
    }

    let onSetUser = (event) =>{
        setUser(event.target.value);
    }

    let onSetPass = (event) =>{
        setPass(event.target.value);
    }


    return(
    <Container className="form">
        <h4> Create an Account</h4>
        <Form className="login" onSubmit={onSignupSubmitted}>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Email Address</Form.Label> 
                    <Form.Control type="email" placeholder="Email" onChange={onSetUser}/>
                </Form.Group>
            </Col>
            </Row>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onSetPass} />
                </Form.Group>
            </Col>
            </Row>
            <Button type="submit">Register</Button>
        </Form>
    </Container>
    );
}

export default SignUp;