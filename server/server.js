import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import chatsRoutes from "./routes/chatsRoutes.js";

import connectDB from "./db/connectDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5001",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/chats", chatsRoutes);
app.use("/messages", messagesRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
