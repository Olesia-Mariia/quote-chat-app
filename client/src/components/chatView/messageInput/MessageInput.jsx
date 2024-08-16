import { PiPaperPlaneRightFill } from "react-icons/pi";

import "./MessageInput.css";
import useSendMessage from "../../../hooks/useSendMessage";
import useMessage from "../../../store/useMessage";
import useEditMessage from "../../../hooks/useEditMessage";
import useGetMessages from "../../../hooks/useGetMessages";

const MessageInput = () => {
  const { inputMessage, setInputMessage, isNewMessage, setIsNewMessage } =
    useMessage();
  const { sendMessage } = useSendMessage();
  const { editMessage } = useEditMessage();
  const { getMessages } = useGetMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage) return;
    if (isNewMessage) {
      await sendMessage(inputMessage);
      setTimeout(async () => {
        await getMessages();
      }, 3500);
    } else {
      await editMessage(inputMessage);
      setIsNewMessage(true);
    }
    setInputMessage("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="message-input-container">
        <input
          type="text"
          id="message"
          className="message-input"
          placeholder="Type your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className="send-button">
          <PiPaperPlaneRightFill size={20} color="#9ca3af" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
