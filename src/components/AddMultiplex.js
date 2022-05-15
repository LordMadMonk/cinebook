import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './AddScreen.css'
import AdminHeader from './AdminHeader';

const AddMultiplex = () => {

    const [theatreName, setTheatreName] = useState('')
    const [theatreCity, setTheatreCity] = useState('')
    const [managerName, setManagerName] = useState('')
    const [managerContact, setManagerContact] = useState('')

    const handleClick = (e) => {
        const theatre = { theatreName, theatreCity, managerName, managerContact }
        console.log(theatre)
        fetch("http://localhost:8000/theatre/insert", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(theatre)

        }).then(() => {
            console.log("New Multiplex Added")
        })
    }

    return (
        <>
        <AdminHeader/>
        <br/>
        <br/>
            <div>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicScrName">
                        <Form.Label>Multiplex Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" 
                        value={theatreName}
                        onChange={(e) => setTheatreName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovGenre">
                        <Form.Label> Multiplex City </Form.Label>
                        <Form.Control type="text" placeholder="Enter the city" 
                        value={theatreCity}
                        onChange={(e) => setTheatreCity(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovLang">
                        <Form.Label> Manager Name </Form.Label>
                        <Form.Control type="text" placeholder="Give the name" 
                        value={managerName}
                        onChange={(e) => setManagerName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovLang">
                        <Form.Label> Manager Contact </Form.Label>
                        <Form.Control type="tel" placeholder="Give the contact number" 
                        value={managerContact}
                        onChange={(e) => setManagerContact(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default AddMultiplex;