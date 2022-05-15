import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import './AddScreen.css'
import AdminHeader from './AdminHeader';

const AddScreen = () => {
    const [screenName, setScreenName] = useState('')
    const [rows, setRows] = useState('')
    const [columns, setColumns] = useState('')


    const{theatreId}=useParams();

    const handleClick = (e) => {
        console.log(theatreId);

        const screen = { screenName, rows, columns }
        fetch(`http://localhost:8000/screens/add?theatreId=${theatreId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(screen)

        }).then(() => {
            console.log("New Screen Added")
        })

        e.preventDefault();

    }

    return (
        <>
        <AdminHeader/>
        <br/>
        <br/>
            <div>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicScrName">
                        <Form.Label>Screen Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" 
                        value={screenName}
                        onChange={(e) => setScreenName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicScrRow">
                        <Form.Label> Rows </Form.Label>
                        <Form.Control type="number" 
                        value={rows}
                        onChange={(e) => setRows(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicScrCol">
                        <Form.Label> Columns </Form.Label>
                        <Form.Control type="number" 
                        value={columns}
                        onChange={(e) => setColumns(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default AddScreen;