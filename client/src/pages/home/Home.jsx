import React from "react";
import "./Home.css";

import Sidebar from "../../components/sidebar/Sidebar";
import ChatView from "../../components/chatView/ChatView";

const Home = () => {
  return <div className="home-container">
    <Sidebar />
    <ChatView />
  </div>;
};

export default Home;
