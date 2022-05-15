import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./LoginPage.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const SignUpPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    const customer = { customerName, address, mobileNumber, email, password };
    console.log(customer);
    fetch("http://localhost:8000/customer/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    }).then(() => {
      console.log("New Customer Added");
    });
  };

  return (
    <>
      <div className="login-page-body">
        <Container>
          <h1 className="shadow-lg text-info p-3 text-center rounded">
            Please Sign up to explore better !!
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-lg rounded lg"
              id="form-body"
            >
              <Form>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please tell us where you live"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="sub">
                  <Button
                    variant="info btn-block"
                    type="submit"
                    onClick={handleClick}
                  >
                    Sign up
                  </Button>
                 
                </div>
              </Form>
              <br />
              <Link to={"/"}>
                <ArrowCircleLeftIcon />
                Back to login
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SignUpPage;
