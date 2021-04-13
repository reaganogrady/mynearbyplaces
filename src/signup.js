import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


function SignUp() {
    const history = useHistory();

    let onSignupSubmitted = () => {
        history.push('/');
    }

    return(
    <Container className="form">
        <h4> Create an Account</h4>
        <Form className="login" onSubmit={onSignupSubmitted}>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Email Address</Form.Label> 
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
            </Col>
            </Row>
            <Row className="justify-content-md-center">
            <Col >
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Col>
            </Row>
            <Button type="submit">Register</Button>
        </Form>
    </Container>
    );
}

export default SignUp;