//Import Statement
import express from 'express'
import { contactUsController, forgetPasswordController, refreshAccessToken, userLoginController, userRegisterController } from '../controllers/userController.js';

//Router Object
 const router = express.Router();

//Routes

//User Register Route Method:Post
router.post('/register',userRegisterController)

//User Login Route Method:Post
router.post('/login',userLoginController)

//Refresh Token Route Method:Post
router.post('/refresh-token',refreshAccessToken)

//Forget Password Route Method:Post
router.post('/forget-password',forgetPasswordController)

//Contact Us Route Method:Post
router.post('/contact-us',contactUsController)

//Export Statement
export default router
