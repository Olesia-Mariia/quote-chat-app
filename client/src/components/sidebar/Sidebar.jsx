import React from "react";

import "./Sidebar.css";

import UserView from "./userView/UserView";
import SearchForm from "./searchForm/SearchForm";
import ChatsList from "./chatsList/ChatsList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <UserView />
        <SearchForm />
      </div>
      <ChatsList />
    </div>
  );
};

export default Sidebar;
