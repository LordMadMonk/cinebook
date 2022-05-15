import React from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './AddSeats.css'

const AddSeats = () => {
    return (
        <>
            <div>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicScrName">
                        <Form.Label>Seat Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovGenre">
                        <Form.Label> IDK</Form.Label>
                        <Form.Control type="text" placeholder="IDK" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovLang">
                        <Form.Label> IDK </Form.Label>
                        <Form.Control type="text" placeholder="IDK" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovDur">
                        <Form.Label> IDK </Form.Label>
                        <Form.Control type="text" placeholder="IDK" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovRating">
                        <Form.Label> IDK </Form.Label>
                        <Form.Control type="number" placeholder="IDK" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovDesc">
                        <Form.Label> IDK Description</Form.Label>
                        <Form.Control rows="3" type="text" placeholder="IDK Description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default AddSeats;