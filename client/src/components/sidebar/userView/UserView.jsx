import { useContext } from "react";
import { IoIosPerson } from "react-icons/io";

import "./UserView.css";

import useLogout from "../../../hooks/useLogout";
import { AuthContext } from "../../../context/AuthContext";

const UserView = () => {
  const {logout} = useLogout()
  const {user} = useContext(AuthContext);

  return (
    <div className="user-container">
      <div className="user-info">
        <div className="user-photo">
          <IoIosPerson size={40}  />
        </div>
        <h1 className="user-name">{`${user.firstName} ${user.lastName}`}</h1>
      </div>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );
};

export default UserView;
