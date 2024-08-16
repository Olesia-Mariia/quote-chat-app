import express from "express";

import {
  addNewChat,
  getAllChats,
  getChatMessages,
  updateChat,
  deleteChat,
} from "../controllers/chatsController.js";

import userAuthentication from "../middleware/userAuthentication.js";

const router = express.Router();

router.post("/", userAuthentication, addNewChat);
router.get("/", userAuthentication, getAllChats);
router.get("/:id", userAuthentication, getChatMessages);
router.put("/:id", userAuthentication, updateChat);
router.delete("/:id", userAuthentication, deleteChat);

export default router;
