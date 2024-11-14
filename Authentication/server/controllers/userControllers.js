const { userModel } = require('../models/userModel')

function userHome(req, res) {
    res.send({ msg: "Home page!" })
}


async function signupFun(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const isUserPresent = await userModel.findOne({ email: user.email });
    if (isUserPresent) return res.json({ msg: 'User already Registred !' });

    await userModel.create(user);
    res.json({ msg: "SignUp successful!" })
}

async function loginFun(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    if (!user) return res.json({ msg: "Pleas fill all the details!" });
    const userPresent = await userModel.findOne(user);
    if (!userPresent) return res.json({ msg: 'check email or password!' });

    return res.json({ msg: "LoggedIn successful!" });
}


module.exports = { userHome, loginFun, signupFun }