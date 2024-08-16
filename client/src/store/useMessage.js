import { create } from "zustand";

const useMessage = create((set) => ({
  inputMessage: "",
  setInputMessage: (inputMessage) => set({ inputMessage }),
  messageId: "",
  setMessageId: (messageId) => set({ messageId }),
  isNewMessage: true,
  setIsNewMessage: (isNewMessage) => set({ isNewMessage }),
}));

export default useMessage;
