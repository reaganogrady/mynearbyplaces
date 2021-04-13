import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import {Button, Form, Col} from 'react-bootstrap';


function Home (){
        return(
         <Form>
             <Form.Row className="align-items-center">
             <Col xs={7}>
                <Form.Control className="my-1" id="Search" placeholder="What are you looking for?"/>
            </Col>
            <Col>
                <Form.Control className="my-1" id="Location" placeholder="Near"/>
            </Col>
            <Col>
                <Button variant="dark">Search</Button>
            </Col>
            </Form.Row>
         </Form>

         
        
        );
    
}

export default Home;