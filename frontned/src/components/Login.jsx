import React, { useState } from "react";
import axios from "axios";
import "../App.css"
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async e => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user);
        alert("Login successful, welcome!!! " + res.data.user.name);
        setUser({ email: "", password: "" });
        // Save token to localStorage or context (optional)
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit"><a href="/home">Login</a></button>
    </form>
  );
};

export default Login;
