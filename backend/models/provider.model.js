import { Schema } from "mongoose";

const ServiceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    enum: ["lawyer", "notery", "accountant", "other"],
    required: true,
  },
  specialization: {
    type: String,
    enum: ["criminal", "civil", "family", "tax", "corporate"],
  },
});

const serviceProviderModel = mongoose.model(
  "serviceProvider",
  ServiceProviderSchema
);
export default serviceProviderModel;
