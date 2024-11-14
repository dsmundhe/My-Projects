const express = require("express");
const { userSignup, userLogin, allUsers } = require("../controllers/userControllers");
const router = express.Router();
const { protect } = require('../middleware/protect')

router.post("/signup", userSignup);
router.post('/login', userLogin);
router.get('/allusers', protect, allUsers);
module.exports = router;
