import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ darkMode }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (savedUser?.email === loginData.email && savedUser?.name === loginData.name) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : ""} style={{ padding: "50px" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
