import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    landowner: false,
    bio: "",
    image_url: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://bw-5th-wheel.herokuapp.com/auth/register", newUser)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  console.log("TESTING newUser here", newUser);

  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          value={newUser.username}
          placeholder="Type Username here"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          placeholder="Type password here"
          onChange={handleChange}
        />
        <label for="landowner">Land Owner</label>
        <input
          type="checkbox"
          name="landowner"
          value={true}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
