import useAllChats from "../store/useAllChats";

const useGetChats = () => {
  const { setChats } = useAllChats();

  const getAllChats = async () => {
    try {
      const response = await fetch(
        "https://quote-chat-app.onrender.com/chats",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setChats(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { getAllChats };
};

export default useGetChats;
