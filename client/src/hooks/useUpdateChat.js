import useChat from "../store/useChat";

const useUpdateChat = () => {
  const { currentChat, setCurrentChat } = useChat();

  const updateChat = async (firstName, lastName) => {
    try {
      const response = await fetch(
        `https://quote-chat-app.onrender.com/chats/${currentChat._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ firstName, lastName }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setCurrentChat(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { updateChat };
};

export default useUpdateChat;
