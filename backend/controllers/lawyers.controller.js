import advocateModel from "../models/lawyers.model.js";
import userModel from "../models/user.model.js";

export const getAllLawyers = async (req, res) => {
  const lawyers = await advocateModel.find({});
  res.json(lawyers);
};

export const getLawyerByCity = async (req, res) => {
  console.log(req.params.id);
  const lawyer = await advocateModel.find({ city: req.params.id });
  res.json(lawyer);
};

export const ApplayLawyer = async (req, res) => {
  console.log("hello 1");
  const {
    serviceType,
    specialization,
    state,
    city,
    id,
    name,
    phoneNo,
    email,
    desc,
    image,
    experience,
    gender,
    courtPractice,
    address,
    certificate,
  } = req.body;
  const userInfo = await userModel.findById(id);
  console.log("hello 2");
  if (!userInfo) {
    return res.status(400).json("User not found");
  }
  const serviceProvider = new advocateModel({
    id,
    name,
    phoneNo,
    email,
    city,
    state,
    desc,
    image,
    experience,
    gender,
    courtPractice,
    serviceType,
    specialization,
    address,
    certificate,
  });
  console.log("hello 3");
  await serviceProvider.save();
  await userInfo.save();
  return res.status(200).json(serviceProvider);
};
