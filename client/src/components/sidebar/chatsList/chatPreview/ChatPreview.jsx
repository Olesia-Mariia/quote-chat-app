import React from "react";
import { IoIosPerson } from "react-icons/io";

import "./ChatPreview.css";

import useChat from "../../../../store/useChat";

const ChatPreview = ({ chat }) => {
  const { setCurrentChat, setMessages } = useChat();
  const lastMessage = chat.messages.at(-1);

  return (
    <div
      className="chat-preview"
      onClick={() => {
        setCurrentChat(chat);
        setMessages(chat.messages);
      }}
    >
      <div className="chat-preview-photo">
        <IoIosPerson size={40} />
      </div>
      <div className="chat-preview-info">
        <p className="chat-preview-name">
          {`${chat.firstName} ${chat.lastName}`}
          <span className="chat-preview-date">
            {new Date(chat.updatedAt).toDateString()}
          </span>
        </p>

        <p className="chat-preview-text">
          {lastMessage
            ? `${lastMessage.text.slice(0, 35)}`
            : "There is no messages yet"}
        </p>
      </div>
    </div>
  );
};

export default ChatPreview;
