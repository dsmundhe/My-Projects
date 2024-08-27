const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { tokenGen } = require("../config/tokenGen");

const userSignup = asyncHandler(async (req, res) => {
  try {
    const { name, password, email, pic } = req.body;

    const isMatch = await User.findOne({ email });
    if (isMatch) {
      res.json({ msg: "User Already Exist...." });
    }
    const user = await User.create({ name, password, email, pic: pic });
    if (user) {
      res.json({ msg: "User Created.....", name, email, password, token: tokenGen(user._id) });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

const userLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ email, password, msg: 'Login successful',result:true })
    }
    res.json({ msg: 'Check Email & Password',result:false })
  } catch (error) {
    res.json({ msg: error.message })
  }

})
module.exports = { userSignup, userLogin };
