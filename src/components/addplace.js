import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import api from '../communication/api';

function AddPlace() {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalcode, setPostalCode] = useState('');

    const history = useHistory();

    let onPlaceSubmitted = () => {
        let place = { name, street, city, state, postalcode };

        api.addPlace(place)
            .then(() => {
                setName('');
                setStreet('');
                setCity('');
                setState('');
                setPostalCode('');
            })

        history.push('/');
    }

    let newName = (event) => {
        setName(event.target.value);
    }

    let newStreet = (event) => {
        setStreet(event.target.value);
    }

    let newCity = (event) => {
        setCity(event.target.value);
    }

    let newState = (event) => {
        setState(event.target.value);
    }

    let newPostalCode = (event) => {
        setPostalCode(event.target.value);
    }

    return(
        <Container className="form">
                <h4> Add a Place </h4>
                <Form onSubmit={onPlaceSubmitted}>
                    <Row >
                    <Col xs={5}>
                        <Form.Group>
                            <Form.Label>Business Name</Form.Label> 
                            <Form.Control placeholder="Business" onChange={newName}/>
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" size="sm" custom>
                                <option>Restaurant</option>
                                <option>Home services</option>
                                <option>Salon</option>
                                <option>Retail Store</option>
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <Form.Group>
                                <Form.Label>Street</Form.Label>
                                <Form.Control placeholder="Street" onChange={newStreet}/>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City" onChange={newCity} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control placeholder="State" onChange={newState}/>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group>
                                <Form.Label>Area Code</Form.Label>
                                <Form.Control placeholder="Area Code" onChange={newPostalCode}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <Button type="submit">Submit</Button>
                   
                </Form>
            </Container>
    );
}

export default AddPlace;