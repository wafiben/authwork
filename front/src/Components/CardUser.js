import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function CardUser({ user }) {
  const [show, setShow] = useState(false);
  const [userUpdate, setUpdate] = useState({
    userName: "",
    email: "",
    age: "",
  });
  const reload = () => window.location.reload();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = `http://localhost:9000/api/user/`;
  const handleDelete = () => {
    if (window.confirm("are you sure you want to delete this user")) {
      axios
        .delete(`${url}${user._id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    reload();
  };
  const handleChange = (e) => {
    setUpdate({ ...userUpdate, [e.target.id]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}${user._id}`, userUpdate);
    } catch (error) {
      console.log(error);
    }
    handleClose();
    reload();
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.userName}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.age}</Card.Text>
          <Button variant="danger" onClick={handleDelete}>
            deleted
          </Button>
          <Button variant="primary" onClick={handleShow}>
            update
          </Button>
        </Card.Body>
      </Card>
      {/* ////// */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* /////////// */}

          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.userName}
                onChange={handleChange}
                id="userName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                onChange={handleChange}
                id="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>age</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.age}
                onChange={handleChange}
                id="age"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* ////////////// */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardUser;
