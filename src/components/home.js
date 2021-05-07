import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home(props){
    const [place, setPlace] = useState("");
    const [location, setLoc] = useState("");
    const history = useHistory();

    let searchPlace = () => {
        if (place.trim().length === 0 || location.trim().length === 0) {
            return;
        }
        props.search(place, location);
        history.push('/');
    }

    let newPlace = (event) => {
        setPlace(event.target.value);
    }

    let newLoc = (event) => {
        setLoc(event.target.value);
    }


    return(
        <Form onSubmit = {searchPlace}>
            <Form.Row className="align-items-center">
            <Col xs={7}>
            <Form.Control type="text" className="my-1" id="Search" placeholder="What are you looking for?" onChange = {newPlace}/>
        </Col>
        <Col>
            <Form.Control type="text" className="my-1" id="Location" placeholder="Near" onChange={newLoc}/>
        </Col>
        <Col>
            <Button variant="dark">Search</Button>
        </Col>
        </Form.Row>
        </Form>

        
    
    );
    
}

export default Home;