import { create } from "zustand";

const useChat = create((set) => ({
  currentChat: null,
  setCurrentChat: (currentChat) => set({ currentChat }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useChat;
