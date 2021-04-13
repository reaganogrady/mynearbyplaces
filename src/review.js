import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

function Review() {

    const history = useHistory();

    let onReviewSubmitted = () => {
        history.push('/');
    }
    return(
        <Container className="form">
                <h4> Write a Review </h4>
                <Form className="review" onSubmit={onReviewSubmitted}>
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
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <Form.Group>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control placeholder="Comment"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" size="sm" custom>
                                <option>☆</option>
                                <option>☆☆</option>
                                <option>☆☆☆</option>
                                <option>☆☆☆☆</option>
                                <option>☆☆☆☆☆</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <br/>
                    <Button type="submit">Submit</Button>
                   
                </Form>
            </Container>
    );
}

export default Review;