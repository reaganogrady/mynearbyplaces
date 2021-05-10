import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import { useState } from 'react';
import { Container} from 'react-bootstrap';
import api from '../communication/api';
import './components.css';

import { useHistory } from 'react-router-dom';

function Home(props){
    const history = useHistory();

    const [place, setPlace] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalcode, setPostalCode] = useState("");
    const [searched, setSearch] = useState(false);

    const [places, setPlaces] = useState([]);

    let searchPlace = () => {
        setSearch(true);
        api.searchPlace(place, street, city, state, postalcode)
        .then(result => setPlaces(result));

        console.log(places.length);
        if (places.length === 0) {
            alert("No matches found, please refresh the page");
        }
     }

    let newPlace = (event) => {
        setPlace(event.target.value);
    }

    let newCity = (event) => {
        setCity(event.target.value);
    }

    let newStreet= (event) => {
        setStreet(event.target.value);
    }

    let newState = (event) => {
        setState(event.target.value);
    }

    let newPostalCode = (event) => {
        setPostalCode(event.target.value);
    }

    let callreview = (place) => {
        if (props.user === '') {
            alert('Must be logged in to create a review');
        } else {
            props.newPlace(place);
            history.push('/review');
        }
    }

    if (!searched) {
        api.getPlaces()
            .then(x => setPlaces(x))
            .catch(e => console.log(e));
    }

    let output = []; 
    for (var i = 0; i < places.length; i++) {
        output.push( 
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">{places[i].place}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Rating: {'☆'.repeat(places[i].reviews[0].rating)}</h6>
              <p class="card-text">{places[i].reviews[0].comment === null ? "No ratings found." : places[i].reviews[0].comment + ' - ' + places[i].reviews[0].user} </p>
              <a onClick={callreview.bind(this, places[i])} class="card-link">Write a Review</a>
            </div>
          </div>
        )
    }

    return(
        <Container>
        <Form onSubmit = {searchPlace}>
            <Form.Row className="align-items-center">
            <Col xs={3}>
                <Form.Control type="text" className="my-1" id="Search" placeholder="What are you looking for?" onChange = {newPlace}/>
            </Col>
            <Col xs={2}>
                <Form.Control type="text" className="my-1" id="Street" placeholder="Street" onChange={newStreet}/>
            </Col>
            <Col xs={2}>
                <Form.Control type="text" className="my-1" id="City" placeholder="City" onChange={newCity}/>
            </Col>
            <Col xs={2}>
                <Form.Control type="text" className="my-1" id="State" placeholder="State" onChange={newState}/>
            </Col>
            <Col xs={2}>
                <Form.Control type="text" className="my-1" id="City" placeholder="Postal Code" onChange={newPostalCode}/>
            </Col>
            <Col >
                <Button variant="dark" type="submit">Search</Button>
            </Col>
            </Form.Row>
        </Form> 
            {output}
        </Container>
    
    );
    
}

export default Home;