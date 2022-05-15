import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/Home");
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
    navigate("/Home");
  }

  return (
    <>
    <section className="login-page-body">
      <Container>
        <h1 className="shadow-lg text-info p-3 text-center rounded">
          Please Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded lg"
            id="form-body"
          >
            <form class="was-validated">
              <div class="mb-3 mt-3">
                <label class="form-label">Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter username"
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
            </form>
            Are you an admin ? &nbsp;
            <Link to={"/adminlogin"}>Click here</Link>
            <br />
            <br />
            <h5>Don't have an account ?</h5>
            <Button
              variant="info btn-block"
              type="submit"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="footer-body"><Footer/></div>
      </section>
    </>
  );
};

export default LoginPage;
