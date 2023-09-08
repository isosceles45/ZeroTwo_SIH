import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
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
  password: {
    type: String,
    required: true,
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
