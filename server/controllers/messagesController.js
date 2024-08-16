import Message from "../models/messageModel.js";
import Chat from "../models/chatModel.js";

const createMesage = async ({ userId, chatId, text, isSentByUser }) => {
  const newMessage = new Message({
    userId,
    chatId,
    text,
    isSentByUser,
  });

  const chat = await Chat.findById(chatId);

  if (newMessage) {
    chat.messages.push(newMessage._id);
  }

  await Promise.all([chat.save(), newMessage.save()]);

  return newMessage;
};

export const addNewMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id: chatId } = req.params;
    const userId = req.user._id;

    const userMessage = await createMesage({
      userId,
      chatId,
      text,
      isSentByUser: true,
    });

    setTimeout(async () => {
      const response = await fetch("https://api.quotable.io/random");
      const quote = await response.json();

      const quoteMessage = await createMesage({
        userId,
        chatId,
        text: `${quote.content}\n- ${quote.author}`,
        isSentByUser: false,
      });
    }, 3000);
    res.status(201).json([userMessage]);
  } catch (err) {
    console.log("Error in addNewMessage", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;

    const message = await Message.findById(id);

    message.text = text;

    await message.save();
    res.status(200).json(message);
  } catch (err) {
    console.log("Error in updateMessage", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
