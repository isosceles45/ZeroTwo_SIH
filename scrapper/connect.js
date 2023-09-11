import mongoose from "mongoose";

function connect() {
  mongoose
    .connect("")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
