import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import UsersList from "./UsersList";

const AddUser = () => {
  // let usersList = [];
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [usersList, setUsersList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, age };
    setUsersList([...usersList, newUser]);
    console.log(usersList);
  };
  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={onSubmit} className={classes.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit" className={classes.submit}>
            Add User
          </Button>
        </form>
      </Card>
      <UsersList users={usersList} />
    </div>
  );
};

export default AddUser;
