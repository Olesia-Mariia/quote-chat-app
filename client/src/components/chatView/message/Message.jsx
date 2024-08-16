import { MdEdit } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";

import "./Message.css";

import formatText from "../../../utils/formatText";
import useMessage from "../../../store/useMessage";

const Message = ({ message }) => {
  const { setIsNewMessage, setInputMessage, setMessageId } = useMessage();

  const handleClick = () => {
    setIsNewMessage(false);
    setInputMessage(message.text);
    setMessageId(message._id);
  };

  return (
    <div
      className={`message-row ${
        message.isSentByUser ? "user-message" : "chat-message"
      }`}
    >
      <div className="message">
        <div className="message-info">
          {message.isSentByUser ? (
            <button className="edit" onClick={handleClick}>
              <MdEdit size={13} color="#111827" />
            </button>
          ) : (
            <div className="chat-photo">
              <IoIosPerson size={40} />
            </div>
          )}
          <div
            className={`message-text ${
              message.isSentByUser ? "user-text" : "chat-text"
            }`}
          >
            {message.isSentByUser ? (
              <p>{message.text}</p>
            ) : (
              formatText(message.text)
            )}
          </div>
        </div>
        <div className="message-date">{`${new Date(message.updatedAt)
          .toDateString()
          .slice(4)} ${new Date(message.updatedAt)
          .toTimeString()
          .slice(0, 5)}`}</div>
      </div>
    </div>
  );
};

export default Message;
