const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User is already exist" });
    }
    const userInfo = new User(req.body);
    userInfo.password = await bcrypt.hash(password, 12);
    await userInfo.save();
    return res.status(201).json({ message: "Successfully registered" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.ststus(403).json({ message: "Invalid Credentials" });
    }
    //password check
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
    const userObject = {
      email,
      username: user.username,
      _id: user._id,
    };
    const jwtToken = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: 2592000000,
    });

    userObject.jwtToken = jwtToken;
    res.status(200).json({ message: "Successful", data: userObject });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

module.exports = {
  registerUser,
  login,
};
