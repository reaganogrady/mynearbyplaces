import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

function AddPlace() {
    const history = useHistory();

    let onPlaceSubmitted = () => {
        history.push('/');
    }
    return(
        <Container className="form">
                <h4> Add a Place </h4>
                <Form onSubmit={onPlaceSubmitted}>
                    <Row >
                    <Col xs={5}>
                        <Form.Group>
                            <Form.Label>Business Name</Form.Label> 
                            <Form.Control placeholder="Business"/>
                        </Form.Group>
                    </Col>
                    <Col xs={4} >
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control placeholder="Location" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
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
                    <br/>
                    <Button type="submit">Submit</Button>
                   
                </Form>
            </Container>
    );
}

export default AddPlace;