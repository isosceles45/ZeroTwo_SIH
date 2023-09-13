import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/userSlice";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import _, { set } from "lodash";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  secure: true,
});

const Home = () => {
  const user = useSelector((state) => state.userInfo.info);
  const [users, setUsers] = useState([]);
  const [ouser, setoUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.auth = { userId: user._id || user.id, fname: user.fname };
    socket.connect();
    socket.on("users", (u) => {
      const messageArray = [];
      for (const { userId, fname } of u) {
        const newMessage = { type: "UserStatus", userId, fname };
        messageArray.push(newMessage);
      }
      setMessages([...messages, ...messageArray]);
      setUsers(u);
      console.log("users", u);
    });

    socket.on("session", ({ userId, fname }) => {
      console.log("session", userId, fname);
      setoUser({ userId, fname });
    });

    socket.on("user connected", ({ userId, fname }) => {
      console.log("user connected", userId, fname);
      setUsers([...users, { userId, fname }]);
    });

    socket.on("user disconnected", ({ userId, fname }) => {
      console.log("user disconnected", userId, fname);
      setUsers(users.filter((user) => user.userId !== userId));
    });
    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, [socket, messages]);

  const userWithoutDuplicates = _.uniqBy(users, "userId");
  console.log("userWithoutDuplicates", userWithoutDuplicates);
  return (
    <div>
      This is real home page
      <h1>Name {user.fname}</h1>
      <h1>Phone {user.phoneNumber}</h1>
      <h1>email {user.email}</h1>
      <h1>isProvider {user.isServiceProvider.toString()}</h1>
      <button>Update User Info</button>
      <button>
        <Link to="/applay-advocate">Applay Lawyer</Link>
      </button>
      <div className="m-20">X</div>
      <h1 className="bg-red-50 h-20 w-52">{ouser.fname}</h1>
      {userWithoutDuplicates &&
        userWithoutDuplicates.map((person) => {
          return (
            <div className="m-20">
              <h1>{person.fname}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
