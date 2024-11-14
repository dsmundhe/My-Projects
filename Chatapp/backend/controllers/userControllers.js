const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { tokenGen } = require("../config/tokenGen");

const userSignup = asyncHandler(async (req, res) => {
  try {
    const { name, password, email, pic } = req.body;

    const isMatch = await User.findOne({ email });
    if (isMatch) {
      return res.json({ msg: "User Already Exist....", result: false });
    }
    const user = await User.create({ name, password, email, pic: pic });
    if (user) {
      return res.json({ msg: "User Created.....", name, email, password, token: tokenGen(user._id), result: true });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

const userLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    console.log(user._id);
    if (user) {
      res.json({ email, password, msg: 'Login successful', token: tokenGen(user._id), result: true })
    }
    res.json({ msg: 'Check Email & Password', result: false })
  } catch (error) {
    res.json({ msg: error.message })
  }

})

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.name ? {
    $or: [
      { name: { $regex: req.query.name, $options: 'i' } },
      { email: { $regex: req.query.name, $options: 'i' } }
    ]
  } : {}
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  return res.json(users);
})

module.exports = { userSignup, userLogin, allUsers };
