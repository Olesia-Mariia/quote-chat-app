import express from "express";

import {
  addNewMessage,
  updateMessage,
} from "../controllers/messagesController.js";

import userAuthentication from "../middleware/userAuthentication.js";

const router = express.Router();

router.post("/send/:id", userAuthentication, addNewMessage);
router.put("/:id", userAuthentication, updateMessage);

export default router;
