import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const bcryptSalt = bcrypt.genSaltSync(10);
const registerController = async (req, res) => {
  console.log("register controller");
  const { username, password, phoneNumber } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const createdUser = await User.create({
      username,
      password: hashedPassword,
      phoneNumber,
    });
    const token = jwt.sign(
      {
        userId: createdUser._id,
        username,
      },
      process.env.JWT_SECRET
    );
    res
      .cookie("token", token, {
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json({
        id: createdUser._id,
        username,
      });
  } catch (err) {
    res.status(400).json(err);
  }
};
export default registerController;
