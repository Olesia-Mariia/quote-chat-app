import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const userAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised (No token provided)" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decodedToken) {
      return res.status(401).json({ error: "Unauthorised (Invalid token)" });
    }

    const user = await User.findById(decodedToken.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("Error at authentication", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default userAuthentication;
