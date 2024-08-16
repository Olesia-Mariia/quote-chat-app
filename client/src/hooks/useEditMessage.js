import useChat from "../store/useChat";
import useMessage from "../store/useMessage";

const useEditMessage = () => {
  const { messageId } = useMessage();
  const { messages, setMessages } = useChat();

  const editMessage = async (message) => {
    try {
      const response = await fetch(
        `https://quote-chat-app.onrender.com/messages/${messageId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ text: message }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const newMessages = messages.map((message) =>
        message._id === messageId ? data : message
      );

      setMessages(newMessages);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { editMessage };
};

export default useEditMessage;
