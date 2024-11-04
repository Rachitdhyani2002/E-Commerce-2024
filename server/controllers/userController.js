//Import statements
import userModel from '../database/models/userModel.js'
import { hashPassword, comparePassword } from '../helpers/encryption/userEncryption.js'
import { sendToAdmin } from '../helpers/nodeMailer/nodeMailer.js'
import JWT from 'jsonwebtoken'

//Generating Access Token and Refresh Token function
export const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        //Fetching user's data through his userId
        const user = await userModel.findById(userId);

        //Generating access token for user
        const accessToken = user.generateAccessToken();

        //Generating refresh token for user
        const refreshToken = user.generateRefreshToken();

        //Passing refresh token value to user refresh token in database
        user.refreshToken = refreshToken

        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    }
    catch (error) {
        console.error(`Error while generating tokens for user ${error}`)
    }
}

//Register User Controller Function
export const userRegisterController = async (req, res) => {
    try {
        //Destructuring data from request body
        const { name, email, password, contact } = req.body

        //Checking if user already exist
        const existedUser = await userModel.findOne({ email: email })

        //If user is already registered then tell him to login
        if (existedUser) { return res.status(409).send({ success: false, message: "User already registered Please! Login" }) }

        //Hashing user's password using bcrypt function
        const hashedUserPassword = await hashPassword(password);

        //Registering a new user to database
        const newUser = await new userModel({ name, email, password: hashedUserPassword, contact }).save();

        //Sending Ok response if everything is fine
        res.status(200).send({ success: true, message: "User successfully registered", newUser })
    }
    catch (error) {
        return res.status(501).send({ success: false, message: "Error while registering user" })
    }
}

//Login User Controller Function
export const userLoginController = async (req, res) => {
    try {
        //Destructuring data from request body
        const { email, password } = req.body;

        //Checking the user's email is existing or not
        const user = await userModel.findOne({ email: email })

        //If user email is not found tell him to register first
        if (!user) { return res.status(409).send({ success: false, message: 'User not found Please! Register First' }) }

        //Matching user's password from the request body to hashed password
        const compare = await comparePassword(password, user.password)

        //If user's password does not match
        if (!compare) { return res.status(409).send({ success: false, message: "Sorry! Invalid Password" }) }

        //Generating tokens for the user
        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id)

        //Sending ok response if everything goes well
        return res.status(200).cookie('accessToken',accessToken,{maxAge:60000}).cookie('refreshToken',refreshToken,{maxAge:300000}).send({ success: true, message: "Welcome user! Logged in successfully ", user, accessToken, refreshToken })
    }
    catch (error) {
        return res.status(501).send({ success: false, message: "Error while login user" })
    }
}

//Refresh AccessToken Function
export const refreshAccessToken = async (req, res) => {
    console.log("Refresh token route hit")

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    console.log("Incoming refresh token", incomingRefreshToken)

    if (!incomingRefreshToken) {
        console.log("No token found in request")
        return res.status(409).send({ success: false, message: "No token found" })
    }
    try {
        const decodedToken = JWT.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        console.log("Decoded Token", decodedToken);

        const user = await userModel.findById(decodedToken._id)
        console.log("User Found", user)

        if (!user) {
            console.log("User not found")
            return res.status(401).send({ success: false, message: "user not found" })
        }

        if (incomingRefreshToken !== user.refreshToken) {
            console.log("Refresh token does not match")
            return res.status(401).send({ success: false, message: "Invalid refresh token" })
        }

        const options = { httpOnly: true, secure: false};
        const { accessToken, refreshToken: newRefreshToken } = await generateAccessTokenAndRefreshToken(user._id);

        console.log("Generated Access Token", accessToken)
        console.log("Generated Refresh Token", newRefreshToken)

        return res.status(200).cookie("accessToken", accessToken, options,{maxAge:60000}).cookie('refreshToken', newRefreshToken, options,{maxAge:300000}).send({ success: true, message: "Access Token Refreshed", accessToken, refreshToken: newRefreshToken })

    }
    catch (error) {
        console.log("Error refreshing token:", error)
        return res.status(501).send({ success: "false", message: "Internal server error" })
    }

}

//Forget Password Function
export const forgetPasswordController = async (req, res) => {
    try {
        const { email, oldPassword, newPassword } = req.body;

        // Find the user by email
        const user = await userModel.findOne({ email });

        // Check if user exists
        if (!user) { return res.status(404).send({ success: false, message: "User not found" }); }

        // Compare the old password
        const match = await comparePassword(oldPassword, user.password);
        if (!match) { return res.status(400).send({ success: false, message: "Old password does not match" }); }

        // Hash the new password before updating
        const hashedPassword = await hashPassword(newPassword);

        // Update the user's password
        await userModel.updateOne({ email }, { password: hashedPassword });

        return res.status(200).send({ success: true, message: "Password successfully updated" });
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in updating password" });
    }
}

//Contact Admin Function
export const contactUsController = async (req, res) => {
    try {
        //Destructuring data from request body
        const { email, query } = req.body;

        //Function to send user email and his query
        await sendToAdmin(email, query)

        //Sending ok response
        return res.status(200).send({ success: true, message: 'Your message has been sent to the admin!' });
    }
    catch (error) {
        console.error('Error sending message to admin:', error);
        return res.status(500).send({ success: false, message: 'Error sending message to admin' });
    }
}