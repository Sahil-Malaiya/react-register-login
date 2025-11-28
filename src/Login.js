import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", name: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("userData")) || [];

    const findUser = savedUsers.find(
      (u) =>
        u.email === loginData.email &&
        u.name === loginData.name
    );

    if (findUser) {
      alert("Login Successfully");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
