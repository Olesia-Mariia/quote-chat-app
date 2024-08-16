import useChat from "../store/useChat";

const useCreateChat = () => {
  const { setMessages, setCurrentChat } = useChat();

  const createChat = async (firstName, lastName) => {
    try {
      const response = await fetch(
        `https://quote-chat-app.onrender.com/chats`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            firstName,
            lastName,
          }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setCurrentChat(data);
      setMessages([]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { createChat };
};

export default useCreateChat;
