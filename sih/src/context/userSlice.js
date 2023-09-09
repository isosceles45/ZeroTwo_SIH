import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
console.log("user", user);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: user || {
      name: "",
      email: "",
      phone: "",
      uid: "",
      isProvider: false,
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.info.name = action.payload.name;
      state.info.email = action.payload.email;
      state.info.phone = action.payload.phone;
      state.info.uid = action.payload.uid;
      state.info.isProvider = action.payload.isProvider;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
