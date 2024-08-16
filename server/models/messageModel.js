import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isSentByUser: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);

export default Message;
