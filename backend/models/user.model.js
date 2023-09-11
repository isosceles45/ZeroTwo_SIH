import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  serviceLookingFor: {
    type: String,
  },
  clientOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "serviceProvider",
  },
  isServiceProvider: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("user", UserSchema);
export default userModel;
