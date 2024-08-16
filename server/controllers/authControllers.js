import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateJWT from "../utils/generateJWT.js";

export const signupController = async (req, res) => {
  try {
    const { firstName, lastName, username, password, confirmPassword } =
      req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hash,
    });

    if (newUser) {
      generateJWT(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("Error in signup controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateJWT(user._id, res);

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    });
  } catch (err) {
    console.log("Error in login controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logoutController = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
