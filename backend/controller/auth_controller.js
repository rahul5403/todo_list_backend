import { User } from "../model/user_model.js";
import bcrypt from "bcryptjs";
import { gtsc } from "../utils/token.js";

export const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(400).json({ message: "Error creating user" });
    }

    await newUser.save();
    await gtsc(newUser._id, res);

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in signUp controller:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    await gtsc(user._id, res);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });

    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
