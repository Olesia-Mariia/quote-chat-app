import { create } from "zustand";

const useAllChats = create((set) => ({
  chats: [],
  setChats: (chats) => set({ chats }),
}));

export default useAllChats;
