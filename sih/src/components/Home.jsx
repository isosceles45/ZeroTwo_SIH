import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/userSlice";

const Home = () => {
  const user = useSelector((state) => state.userInfo.info);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked");
  };

  return (
    <div>
      This is real home page
      <h1>Name {user.fname}</h1>
      <h1>Phone {user.phoneNumber}</h1>
      <h1>email {user.email}</h1>
      <h1>isProvider {user.isServiceProvider.toString()}</h1>
      <button onClick={handleSubmit}>Update User Info</button>
    </div>
  );
};

export default Home;
