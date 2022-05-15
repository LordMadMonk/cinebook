import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import './AddShow.css'
import AdminHeader from './AdminHeader';

const AddShow = () => {
    const [showName, setShowName] = useState('')
    const [showDate, setShowDate] = useState('')
    const [showStartTime, setShowStartTime] = useState('')
    const [showEndTime, setShowEndTime] = useState('')

    const{theatreId, screenId}=useParams();

    const handleClick = (e) => {
        const show = { showName,showDate, showStartTime, showEndTime }
        console.log(show)
        fetch(`http://localhost:8000/shows/add?theatreId=${theatreId}&screenId=${screenId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(show)

        }).then(() => {
            console.log("New Show Added")
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
                        <Form.Label>Show Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" 
                        value={showName}
                        onChange={(e) => setShowName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicScrName">
                        <Form.Label>Show Date</Form.Label>
                        <Form.Control type="date" 
                        value={showDate}
                        onChange={(e) => setShowDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovLang">
                        <Form.Label> Show Start Time </Form.Label>
                        <Form.Control type="datetime-local" 
                        value={showStartTime}
                        onChange={(e) => setShowStartTime(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovDur">
                        <Form.Label>Show End Time</Form.Label>
                        <Form.Control type="datetime-local" 
                        value={showEndTime}
                        onChange={(e) => setShowEndTime(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default AddShow;