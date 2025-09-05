import React, { useState } from "react";
import axios from "axios";
import "../App.css"

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = async e => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      try {
        const res = await axios.post("http://localhost:5000/api/auth/register", user);
        alert(res.data.message);
        setUser({ name: "", email: "", password: "" });
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={register}>
      <h2>Register</h2>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
