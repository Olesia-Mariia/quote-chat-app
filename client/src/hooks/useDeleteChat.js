import useChat from "../store/useChat";

const useDeleteChat = () => {
  const { currentChat, setCurrentChat } = useChat();

  const deleteChat = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/chats/${currentChat._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setCurrentChat(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { deleteChat };
};

export default useDeleteChat;
