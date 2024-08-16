import useChat from "../store/useChat";

const useSendMessage = () => {
  const { messages, setMessages, currentChat } = useChat();

  const sendMessage = async (message) => {
    try {
      const response = await fetch(
        `http://localhost:5000/messages/send/${currentChat._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ text: message }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, ...data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { sendMessage };
};

export default useSendMessage;
