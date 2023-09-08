import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";

const LoginController = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (!foundUser) {
    return res.status(400).json("User not found");
  }
  const passOk = bcrypt.compareSync(password, foundUser.password);
  if (!passOk) {
    res.status(401).json("Password incorrect");
  }
  jwt.sign(
    {
      userId: foundUser._id,
      username,
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
};

export default LoginController;
