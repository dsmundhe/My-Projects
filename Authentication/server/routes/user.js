const express=require('express');
const router=express.Router();
const {userHome,loginFun,signupFun}=require('../controllers/userControllers')

router.get('/',userHome);
router.post('/signup',signupFun);
router.post('/login',loginFun);


module.exports=router;