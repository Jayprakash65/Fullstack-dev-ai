import sendMail from "../middlewares/sendMail.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
// Login and send OTP
export const loginUser = async (req, res) => {
   try {
       const { email } = req.body;
       let user = await User.findOne({ email });
       if (!user) {
           user = await User.create({ email });
       }
       const otp = Math.floor(Math.random() * 1000000);
       const verifyToken = jwt.sign({ userId: user._id, otp }, process.env.Activation_sec, { expiresIn: "5m" });

       console.log("Generated Token:", verifyToken); // Debugging Line

       await sendMail(email, "Chatbot", otp);
       res.json({
           message: "OTP is sent to your email",
           verifyToken // Ensure this matches frontend
       });
   } catch (error) {
       console.error(`Error: ${error.message}`);
       res.status(500).json({ message: "Server Error" });
   }
};
// Verify OTP and log in
export const verifyUser = async (req, res) => {
  try {
    const { otp, verifyToken } = req.body;
    // Verify JWT token
    const decoded = jwt.verify(verifyToken, process.env.Activation_sec);
    if (!decoded) {
      return res.status(400).json({ message: "OTP Expired" });
    }
    // Check OTP match
    if (decoded.otp !== otp) {
      return res.status(400).json({ message: "Wrong OTP" });
    }
    // Generate a new JWT token for the session
    const sessionToken = jwt.sign({ _id: decoded.userId }, process.env.Jwt_sec, {
      expiresIn: "5d",
    });
    // Retrieve user info from DB for response
    const user= await User.findById(decoded.userId);
    res.json({
      message: "Logged in successfully",
      user,
      token: sessionToken,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
// Get user profile
export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
