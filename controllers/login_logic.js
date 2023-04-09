const { BadRequestErr, UnauthenticatedErr } = require("../errors/Errors");
const User = require("../models/Users");
const { StatusCodes } = require("http-status-codes");

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestErr("Please Provide Email & Password");
  }

  const user_doc = await User.findOne({ email });
  if (!user_doc) {
    throw new UnauthenticatedErr("Invalid Email Credentials");
  }

  if (!user_doc.comparePassword(password)) {
    throw new UnauthenticatedErr("Invalid Password Credentials");
  }

  const token = user_doc.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user_doc.name }, token });
};

module.exports = Login;
