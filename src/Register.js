import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    address: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old users or empty array
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

    // Add new user
    existingUsers.push(user);

    // Save back to localStorage
    localStorage.setItem("userData", JSON.stringify(existingUsers));

    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} /><br />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
