import { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

import "./ChatsList.css";

import DialogForm from "../../common/dialog/DialogForm";
import ChatPreview from "./chatPreview/ChatPreview";
import useGetChats from "../../../hooks/useGetChats";

import useDialog from "../../../store/useDialog";
import useAllChats from "../../../store/useAllChats";

const ChatsList = () => {
  const {
    showCreateForm,
    setShowCreateForm,
    showUpdateForm,
    showConfirmDialog,
  } = useDialog();
  const { chats } = useAllChats();
  const { getAllChats } = useGetChats();

  useEffect(() => {
    getAllChats();
  }, [showCreateForm, showUpdateForm, showConfirmDialog]);

  return (
    <div className="chats-list">
      <div className="chats-list-header">
        <h2 className="chats-list-title">Chats</h2>
        <button onClick={() => setShowCreateForm(true)}>
          <IoMdAdd size={20} color="#111827" />
        </button>
        {showCreateForm && <DialogForm isNewChat={true} />}
      </div>
      <div className="chats-preview-container">
        {chats.map((chat) => (
          <ChatPreview key={chat._id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatsList;
