import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import api from '../communication/api';

function Review(props) {
    const [place, setPlace] = useState('');
    const [city, setCity] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);
    const [user, setUser] = useState('');

    const history = useHistory();

    let onReviewSubmitted = () => {
        setUser(props.user);
        let review = { city, comment, rating, user };

        api.reviewPlace(review, place)
            .then(() => {
                setPlace('');
                setCity('');
                setComment('');
                setRating(1);
                setUser('');
            })
        history.push('/');
    }

    let placeChange = (event) => {
        setPlace(event.target.value);
    }

    let cityChange = (event) => {
        setCity(event.target.value);
    }

    let commentChange = (event) => {
        setComment(event.target.value);
    }

    let ratingChange = (event) => {
        setRating(event.target.value.length);
    }

    return(
        <Container className="form">
                <h4> Write a Review </h4>
                <Form className="review" onSubmit={onReviewSubmitted}>
                    <Row >
                    <Col xs={4}>
                        <Form.Group>
                            <Form.Label>Business Name</Form.Label> 
                            <Form.Control placeholder="Business" onChange={placeChange}/>
                        </Form.Group>
                    </Col>
                    <Col xs={5} >
                        <Form.Group>
                            <Form.Label>City Name</Form.Label>
                            <Form.Control placeholder="City" onChange={cityChange}/>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <Form.Group>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control placeholder="Comment" onChange={commentChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" size="sm" custom onChange={ratingChange}>
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