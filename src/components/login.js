import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://bw-5th-wheel.herokuapp.com/auth/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  console.log("TESTING user here", user);

  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          value={user.username}
          placeholder="Type username here"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Type password here"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
