import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

export const addNewChat = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const userId = req.user._id;

    const newChat = new Chat({
      firstName,
      lastName,
      userId,
    });

    if (newChat) {
      await newChat.save();

      res.status(201).json(newChat);
    } else {
      res.status(400).json({ error: "Invalid chat data" });
    }
  } catch (err) {
    console.log("Error in addNewChat", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const userId = req.user._id;

    const allChats = await Chat.find({ userId }).populate({
      path: "messages",
      model: Message,
    });

    res.status(200).json(allChats);
  } catch (err) {
    console.log("Error in getAllChats", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getChatMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const chat = await Chat.findById(id).populate({
      path: "messages",
      model: Message,
    });

    const messages = chat.messages;

    res.status(200).json(messages);
  } catch (err) {
    console.log("Error in getChatMessages", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true }
    );

    res.status(200).json(updatedChat);
  } catch (err) {
    console.log("Error in updateChat", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteChat = async (req, res) => {
  try {
    const { id } = req.params;

    const chatToDelete = await Chat.findById(id);

    chatToDelete.messages.forEach(
      async (messageId) => await Message.findByIdAndDelete(messageId)
    );

    await Chat.findByIdAndDelete(id);

    res.status(200).json({ message: "Chat is successfully deleted" });
  } catch (err) {
    console.log("Error in deleteChat", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
