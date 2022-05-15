import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./AdminLogin.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { green } from "@mui/material/colors";

const AdminLogin = () => {
  let navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/adminhome");
    }
  }, []);

  async function validate() {
    console.log("*****Working*****");
    let item = {};
    // let item = {customerName, password};
    let result = await fetch(
      `http://localhost:8000/login/${customerName}/${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {},
      }
    );
    console.log(result);
    result = result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/adminhome");
  }

  return (
    <>
    <div className="admin-login-body">
      <Container>
        <h1 className="shadow-lg p-3 text-center rounded" id='greet'>
          Greetings Admin !!
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded lg"
            id="form-body"
          >
            <form class="was-validated" >
              <div class="mb-3 mt-3">
                <label class="form-label">Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter admin name"
                  required
                  onChange={(e) => setCustomerName(e.target.value)}
                />
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" required />
                <label class="form-check-label" for="myCheck">
                  I agree on all terms and conditions.
                </label>
              </div>
              <button class="btn btn-info" onClick={validate}>
                Submit
              </button>
              <br/>
              <br/>
              <Link to={"/"}><ArrowCircleLeftIcon/>Back to customer login</Link>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
    </>
  );
};

export default AdminLogin;
