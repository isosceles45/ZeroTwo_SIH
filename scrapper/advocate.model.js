import mongoose from "mongoose";

const AdvocateSchema = new mongoose.Schema({
  name: {
    type: "String",
  },
  address: {
    type: "String",
  },
  tel: {
    type: "String",
  },
  desc: {
    type: "String",
  },
  cop: {
    type: "String",
  },
  city: {
    type: "String",
  },
});

const advocateModel = mongoose.model("Advocate", AdvocateSchema);
export default advocateModel;
