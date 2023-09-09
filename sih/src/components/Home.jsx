import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/userSlice";

const Home = () => {
  const user = useSelector((state) => state.userInfo.info);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked");
    dispatch(
      setUserDetails({
        name: "Himanshu Goyal",
        email: "h@123",
        isProvider: true,
      })
    );
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));

  return (
    <div>
      This is real home page
      <h1>Name {user.name}</h1>
      <h1>isProvider {user.isProvider.toString()}</h1>
      <button onClick={handleSubmit}>Update User Info</button>
    </div>
  );
};

export default Home;
