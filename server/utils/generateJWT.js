import jwt from "jsonwebtoken";

const generateJWT = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    saneSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateJWT;
