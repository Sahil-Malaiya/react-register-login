import React, { useState } from "react";
import "./Register.css";

function Register({ darkMode }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Registered Successfully");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""} style={{ padding: "50px" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
