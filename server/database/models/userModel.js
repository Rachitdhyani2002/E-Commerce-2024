// Import statements
import mongoose from "mongoose";
import JWT from 'jsonwebtoken';

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contact: { type: String, trim: true, required: true },
    refreshToken: { type: String },
    role: { type: Number, default: 0 }
}, { timestamps: true });

// Generate Access Token Function
userSchema.methods.generateAccessToken = function() {
    return JWT.sign(
        { _id: this._id },  // using this._id, not this.id
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// Generate Refresh Token Function
userSchema.methods.generateRefreshToken = function() {
    return JWT.sign(
        { _id: this._id },  // using this._id, not this.id
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

// Exporting the user model
const userModel = mongoose.model('users', userSchema);
export default userModel;
