import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/userSlice";
import { Link } from "react-router-dom";
import Main from "../pages/Main";
import { io } from "socket.io-client";
import _, { set } from "lodash";
import axios from "axios";

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
    socket.auth = {
      userId: user._id || user.id,
      fname: user.fname,
      isProvider: user.isServiceProvider.toString(),
    };
    socket.connect();
    socket.on("users", (u) => {
      const messageArray = [];
      for (const { userId, fname, isProvider } of u) {
        const newMessage = { type: "UserStatus", userId, fname, isProvider };
        messageArray.push(newMessage);
      }
      setMessages([...messages, ...messageArray]);
      setUsers(u);
      console.log("users", u);
    });

    socket.on("session", ({ userId, fname, isProvider }) => {
      console.log("session", userId, fname, isProvider);
      setoUser({ userId, fname, isProvider });
    });

    socket.on("user connected", ({ userId, fname, isProvider }) => {
      console.log("user connected", userId, fname, isProvider);
      setUsers([...users, { userId, fname, isProvider }]);
    });

    socket.on("user disconnected", ({ userId, fname, isProvider }) => {
      console.log("user disconnected", userId, fname, isProvider);
      setUsers(users.filter((user) => user.userId !== userId));
    });

    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, [socket, messages]);

  const getOnlineLawyers = async (uid) => {
    console.log("getOnlineLawyeRS CALLED  ");
    try {
      const res = await axios.get(
        `http://localhost:5000/api/lawyers/lawyer/${uid}`
      );
      console.log("returned");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const userWithoutDuplicates = _.uniqBy(users, "userId");
  console.log("userWithoutDuplicates", userWithoutDuplicates);

  return (
    <div>
      {onlineUsers.map((user) => {
        return (
          <div>
            <h1>{user.fname}</h1>
          </div>
        );
      })}
      <Main onlineLawyers={userWithoutDuplicates} />
    </div>
  );
};

export default Home;
