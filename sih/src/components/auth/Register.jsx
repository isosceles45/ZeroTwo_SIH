import React from "react";
import axios from "axios";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/register";
    const { username, password, phoneNumber, email } = e.target;
    console.log(username.value, password.value, phoneNumber.value, email.value);
    const res = await axios.post(url, {
      username: username.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
    });
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Username</label>
        <input type="text" name="username" required />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" required />
        <label>Confirm Password</label>
        <input type="cpassword" name="cpassword" required />
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
