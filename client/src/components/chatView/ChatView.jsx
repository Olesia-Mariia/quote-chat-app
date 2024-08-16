import { useState, useContext, useEffect } from "react";
import { IoIosPerson, IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import "./ChatView.css";

import DialogForm from "../common/dialog/DialogForm";
import ConfirmModal from "../common/confirm/ConfirmDialog";
import Messages from "./messages/Messages";
import MessageInput from "./messageInput/MessageInput";

import { AuthContext } from "../../context/AuthContext";
import useChat from "../../store/useChat";
import useDialog from "../../store/useDialog";

const ChatView = () => {
  const {
    showUpdateForm,
    setShowUpdateForm,
    showConfirmDialog,
    setShowConfirmDialog,
  } = useDialog();
  const { currentChat, setCurrentChat } = useChat();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // when component unmounts
    return () => setCurrentChat(null);
  }, [setCurrentChat]);

  return (
    <>
      {!currentChat ? (
        <div className="chat-container no-chat">
          <h2>Hi, {`${user.firstName} ${user.lastName}`}!</h2>
          <p>Select or create a chat to start</p>
        </div>
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-info">
              <div className="chat-photo">
                <IoIosPerson size={50} />
              </div>
              <div className="chat-name">
                {`${currentChat.firstName} ${currentChat.lastName}`}
                <button onClick={() => setShowUpdateForm(true)}>
                  <MdEdit size={20} color="#111827" />
                </button>
                {showUpdateForm && <DialogForm isNewChat={false} />}
              </div>
            </div>
            <button onClick={() => setShowConfirmDialog(true)}>
              <IoMdTrash size={25} color="#111827" />
            </button>
            {showConfirmDialog && <ConfirmModal />}
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
};

export default ChatView;
