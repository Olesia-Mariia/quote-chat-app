import useAllChats from "../store/useAllChats";
import useChat from "../store/useChat";

const useGetMessages = () => {
  const { setMessages, currentChat } = useChat();
  const { chats, setChats } = useAllChats();

  const getMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/chats/${currentChat._id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(data);
      setChats(
        chats.map((chat) =>
          chat._id === currentChat._id
            ? { ...chat, messages: data, updatedAt: data.at(-1).updatedAt }
            : chat
        )
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return { getMessages };
};

export default useGetMessages;
