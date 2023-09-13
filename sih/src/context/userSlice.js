import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
// console.log("user", user);

const temp = {
  email: "hiteshgoyal943@gmail.com",
  fname: "Himanshu",
  gender: "Male",
  isServiceProvider: false,
  lname: "Goyal",
  phoneNumber: "$2a$10$FbzYP88TpB7FZizWb8YCOeU9sYUpwx5N9O1P5gA/5t17O2zEF5fpS",
  serviceLookingFor: "none",
  _id: "64fdde0c07b59c4d3cb8f7e7",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: user || {
      email: "",
      fname: "",
      gender: "",
      isServiceProvider: false,
      lname: "",
      phoneNumber: "",
      serviceLookingFor: "",
      _id: "",
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      // console.log("action", action.payload);
      state.info = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
