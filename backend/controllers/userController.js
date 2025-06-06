import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({
        success: false,
        message:
          "This email address is already in use. Please use a different one.",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong password.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// API to get user details
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const userData = await userModel.findById(userId).select("-password");

    res.status(200).json({
      success: true,
      userData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//API for update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const { name, phone, address, dob, gender } = req.body;
    const imgFile = req.file;

    if (!name || !phone || !address || !dob || !gender) {
      return res.status(404).json({
        success: false,
        message: "User data is missing.",
      });
    }

    const userData = {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    };

    await userModel.findByIdAndUpdate(userId, userData);

    if (imgFile) {
      //upload img to cloudinary
      const imgUpload = await cloudinary.uploader.upload(imgFile.path, {
        resource_type: "image",
      });

      const imgURL = imgUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imgURL });
    }

    res.status(200).json({
      success: true,
      message: "User profile updated.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { registerUser, loginUser, getUserProfile, updateUserProfile };
