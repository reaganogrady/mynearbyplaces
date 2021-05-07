import 'bootstrap/dist/css/bootstrap.css'
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

function SignUp(props) {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    let onSignupSubmitted = () => {
        if (user.trim().length === 0 || pass.trim().length === 0) {
            return;
        }
        props.newUser(user, pass);
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