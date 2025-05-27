import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";

// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // checking for all data to add-doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email!" });
    }

    // validating password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long!",
      });
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addDoctor };
