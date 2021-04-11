import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function Login() {
    const history = useHistory();

    let onLoginSubmitted = () => {
        history.push('/home');
    }

    return(
    <Form className="login" onSubmit={onLoginSubmitted}>
        <h1> LOGIN</h1>
        <Form.Group>
          <Form.Label>Email Address</Form.Label> 
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    
    );
}

export default Login;