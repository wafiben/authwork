import React from "react";
import CardUser from "./CardUser";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function List() {
  const url = "http://localhost:9000/api/users";
  const [users, setUsers] = useState([]);
  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {users.length === 0
        ? spinner
        : users.map((user) => <CardUser key={user._id} user={user} />)}
    </div>
  );
}

export default List;
