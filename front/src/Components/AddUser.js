import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const url = "http://localhost:9000/api/user";
  const [user, setUser] = useState({ userName: "", email: "", age: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
 /*    setUser({
      userName: e.target.value,
      email: e.target.value,
      age: e.target.value,
    }); */
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/home");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter userName"
          onChange={handleChange}
          id="userName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          id="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control
          type="text"
          placeholder="age"
          onChange={handleChange}
          id="age"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddUser;
