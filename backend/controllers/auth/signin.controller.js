import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";

const LoginController = async (req, res) => {
  const { phoneNumber } = req.body;
  const allUsers = await User.find({});
  let passOk;
  let foundUser;
  for (let i = 0; i < allUsers.length; i++) {
    console.log(allUsers[i].phoneNumber);
    passOk = bcrypt.compareSync(phoneNumber, allUsers[i].phoneNumber);
    console.log(passOk);
    if (passOk === true) {
      foundUser = allUsers[i];
      console.log(foundUser);
      break;
    }
  }
  //foundUser = await User.findOne({ phoneNumber: passOk });
  if (!foundUser) {
    return res.status(400).json("User not found");
  }
  if (!passOk) {
    res.status(401).json("Password incorrect");
  }
  jwt.sign(
    {
      userId: foundUser._id,
      fname: foundUser.fname,
      isServiceProvider: foundUser.isServiceProvider,
    },
    process.env.JWT_SECRET,
    {},
    (err, token) => {
      if (err) {
        res.status(500).json(err);
      }
      res
        .cookie("token", token, {
          sameSite: "none",
          secure: true,
        })
        .status(200)
        .json({
          id: foundUser._id,
          username,
          isServiceProvider: foundUser.isServiceProvider,
        });
    }
  );
  return res.status(200).json(foundUser);
};

export default LoginController;
