import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  secure: true,
});

const Login = () => {
  const [users, setUser] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Login");
    const url = "http://localhost:5000/api/auth/login";
    const { username, password } = e.target;
    console.log(username.value, password.value);
    const res = await axios.post(url, {
      username: username.value,
      password: password.value,
    });
    alert(res.status);
    console.log(res.data);
    socket.emit("online", { ...res.data });

    console.log(users);
  };

  useEffect(() => {
    
    socket.on("onlinef", (user) => {
      console.log("New user connected to socket");
      console.log(user);
      setUser(user);
    });
  }, [socket]);

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" required />
        <label>password</label>
        <input type="text" name="password" required />
        <button type="submit">Submit</button>
      </form>
      {users.length > 0 &&
        users.map((u) => {
          return <h1>{u.username}</h1>;
        })}
    </div>
  );
};

export default Login;
