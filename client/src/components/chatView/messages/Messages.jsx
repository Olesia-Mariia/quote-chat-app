import { useEffect, useRef } from "react";
import useChat from "../../../store/useChat";

import Message from "../message/Message";

import "./Messages.css";

const Messages = () => {
  const { messages, setMessages } = useChat();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    }, 50)

  }, [messages]);

  return (
    <div className="messages">
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      ) : (
        <p className="no-messages-text">There is no messages yet...</p>
      )}
    </div>
  );
};

export default Messages;
